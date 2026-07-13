# Initial Backlog

## Priority P0 — Foundation

### P0-001 Create monorepo

Set up pnpm workspaces and Turborepo.

### P0-002 Create web application

React, TypeScript, Vite, routing, linting, formatting.

### P0-003 Create assessment-engine package

Pure TypeScript package with no UI dependencies.

### P0-004 Define content schema

Zod schemas for journeys, questions, answers, branches, dimensions, insights, and archetypes.

### P0-005 Configure IndexedDB

Dexie schema with initial migration.

### P0-006 Configure PWA

Manifest, icons, Workbox, installability, offline shell.

### P0-007 Build basic question screen

Single question, ranked answers, submit behavior.

### P0-008 Build local session persistence

Create, update, resume, and complete sessions.

### P0-009 Build deterministic scoring

Weighted answer effects and normalized dimensions.

### P0-010 Build first local result

Dimension summary and provisional archetype.

## Priority P1 — Complete first journey

### P1-001 Define dimension model

Document dimension poles and evidence requirements.

### P1-002 Draft first 40 questions

Include scenarios, trade-offs, and validation questions.

### P1-003 Select MVP question set

Choose 25–35 questions.

### P1-004 Add adaptive branching

Confidence-gap and evidence-coverage selection.

### P1-005 Create initial archetypes

Define ideal vectors and descriptions.

### P1-006 Create insight library

Observations, alternative explanations, contradictions, and blind spots.

### P1-007 Build result reveal UI

Progressive cards and archetype reveal.

### P1-008 Add result feedback

Exactly me, partly true, not really.

### P1-009 Add share card

Generate safe downloadable image.

## Priority P1 — Offline reliability

### P1-010 Download journey package

Cache versioned journey and assets.

### P1-011 Add offline status

Show downloaded, offline, update available, and pending sync.

### P1-012 Add sync queue

Idempotent local operations.

### P1-013 Build reconnect sync

Retry with backoff.

### P1-014 Add update safety

Do not replace files needed by an active session.

### P1-015 Build offline Playwright scenarios

Flight-mode completion and reconnect.

## Priority P2 — Backend

### P2-001 Create Fastify API

Health endpoint and OpenAPI.

### P2-002 Create PostgreSQL schema

Users, devices, sessions, responses, results, feedback, operations.

### P2-003 Add idempotent sync endpoint

Deduplicate by client operation ID.

### P2-004 Add anonymous device registration

Support anonymous usage.

### P2-005 Add authentication

Magic link, Apple, and Google as appropriate.

### P2-006 Add anonymous account upgrade

Link local data to account after consent.

### P2-007 Store result feedback

Support quality analysis.

## Priority P2 — Quality tools

### P2-008 Build journey simulator

Test branches and scoring distribution.

### P2-009 Build content validator

Detect unreachable questions and missing effects.

### P2-010 Build archetype distribution report

Run random and synthetic profiles.

### P2-011 Add Sentry

Client and API errors.

### P2-012 Add privacy-safe analytics

Journey funnel and offline metrics.

## Priority P3 — Beta preparation

### P3-001 Accessibility audit

### P3-002 Privacy policy and consent

### P3-003 Account deletion

### P3-004 Data export

### P3-005 Cross-device Personal Map

### P3-006 AI-enhanced result wording

### P3-007 Admin content interface

### P3-008 Localization framework

## Definition of done

A task is done only when:

- acceptance criteria pass;
- tests are added;
- TypeScript passes;
- documentation is updated;
- offline behavior is considered;
- analytics and privacy impact are considered;
- no critical accessibility regression is introduced.

---

**EOF**
