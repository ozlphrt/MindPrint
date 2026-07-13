# Self-Discovery PWA Project Kit

This folder contains the initial product and engineering blueprint for an offline-first self-discovery application.

## Working concept

A user chooses something they want to understand about themselves, completes an adaptive multiple-choice journey, receives detailed insights, and is eventually assigned a memorable archetype such as:

- The Socratic Connector
- The Independent Explorer
- The Quiet Strategist
- The Empathic Challenger

The application is designed to work during flights and in other low-connectivity situations.

## Core principle

The app should not pretend to diagnose people or reveal absolute truths. It should identify patterns from structured answers, explain why those patterns were inferred, state confidence levels, and offer alternative interpretations.

## Files

1. `01_PROJECT_OVERVIEW.md`  
   Product concept, user experience, scope, principles, and success criteria.

2. `02_TECHNICAL_ARCHITECTURE.md`  
   Recommended frontend, backend, deployment, observability, and security architecture.

3. `03_OFFLINE_FIRST_STRATEGY.md`  
   Service worker, local storage, synchronization, conflict handling, and offline result strategies.

4. `04_DATA_MODEL_AND_SCORING.md`  
   Core entities, question model, scoring model, archetype mapping, and AI interpretation boundaries.

5. `05_PRODUCT_ROADMAP.md`  
   MVP, beta, and future release phases.

6. `06_TASK_BREAKDOWN.md`  
   Epics, user stories, engineering tasks, and acceptance criteria.

7. `07_GIT_BRANCHING_AND_VERSIONING.md`  
   Repository structure, branch model, pull requests, semantic versioning, and release process.

8. `08_TESTING_AND_QUALITY.md`  
   Unit, integration, end-to-end, offline, accessibility, and psychometric testing.

9. `09_SECURITY_PRIVACY_AND_ETHICS.md`  
   Privacy, consent, responsible wording, data minimization, and safety boundaries.

10. `10_DEPLOYMENT_AND_OPERATIONS.md`  
    Hosting, CI/CD, environments, backups, monitoring, and incident procedures.

11. `11_INITIAL_BACKLOG.md`  
    Prioritized implementation backlog suitable for GitHub Issues, Linear, Jira, or an AI coding agent.

12. `12_AGENT_KICKOFF_PROMPT.md`  
    A ready-to-use build prompt for an AI coding environment.

## Recommended starting point

Build one complete journey first:

> How do other people probably experience me?

Do not start by creating dozens of archetypes. First define the underlying dimensions, question metadata, deterministic scoring rules, and insight evidence model. Archetypes should be derived from the profile rather than determining the profile.

---

**EOF**
