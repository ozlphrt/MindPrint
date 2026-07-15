import { test, expect } from '@playwright/test';

test.describe('Offline-First Assessment Journey E2E', () => {
  test('should complete journey successfully under offline conditions with session persistence and branching', async ({ page, context }) => {
    // 1. Load the application
    await page.addInitScript(() => {
      window.localStorage.setItem('mindprint_onboarding_completed', 'true');
    });
    await page.goto('/');
    
    // Wait for the PWA Service Worker to register and be ready
    await page.evaluate(async () => {
      if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.ready;
      }
    });
    
    // Click Begin Discovery on the welcome onboarding page
    await page.locator('button:has-text("Begin Discovery")').click();
    
    // Ensure we start on Question 1 of 12
    await expect(page.locator('text=Question 1 of 12')).toBeVisible();
    await expect(page.locator('text=Online')).toBeVisible();

    // Answer first 4 questions online (Baseline Phase)
    for (let i = 1; i <= 4; i++) {
      await expect(page.locator(`text=Question ${i} of 12`)).toBeVisible();
      await page.locator('.option-card').first().click();
      await page.locator('button:has-text("Continue")').click();
    }

    // Go offline for Phase 2 (Adaptive Phase)
    await context.setOffline(true);
    await expect(page.locator('text=Offline Mode')).toBeVisible();

    // Answer 3 more questions offline (total 7 answered, on 8th)
    for (let i = 5; i <= 7; i++) {
      await expect(page.locator(`text=Question ${i} of 12`)).toBeVisible();
      await page.locator('.option-card').first().click();
      await page.locator('button:has-text("Continue")').click();
    }

    // Wait for Question 8 to render to ensure Dexie transaction is committed
    await expect(page.locator('text=Question 8 of 12')).toBeVisible();

    // Simulate Device Crash/Refresh at Question 8
    await page.reload();
    // Click Begin Discovery to resume the session from welcome page
    await page.locator('button:has-text("Begin Discovery")').click();
    await expect(page.locator('text=Offline Mode')).toBeVisible();
    await expect(page.locator('text=Question 8 of 12')).toBeVisible();

    // Answer remaining questions until we reach the results landing screen
    while (await page.locator('text=View Results').count() === 0) {
      const continueBtn = page.locator('button:has-text("Continue")');
      if (await continueBtn.count() > 0 && await continueBtn.isVisible() && await continueBtn.isEnabled()) {
        await continueBtn.click();
      } else {
        await page.locator('.option-card').first().click();
      }
      await page.waitForTimeout(200);
    }

    // Land on results
    await expect(page.locator('text=View Results')).toBeVisible();
    await page.locator('text=View Results').click();

    // Verify results page loads completely offline
    await expect(page.locator('h1:has-text("Your MindPrint")')).toBeVisible();
    await expect(page.locator('text=Primary Archetype')).toBeVisible();
    await expect(page.locator('text=Your Profile Dimensions')).toBeVisible();

    // Restart journey button should work
    await page.locator('text=Restart Journey').click();
    await expect(page.locator('text=Question 1 of 12')).toBeVisible();
  });
});
