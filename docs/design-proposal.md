# Team Design Document (with Figma)

**Course:** CSSD1161 — Communication & Teamwork in Software Development  
**Team:** _G1_ • **Repo:** [_GitHub URL_](https://github.com/Jirenemey/G1-CSSD1161-Note-Taking-App) • **Term:** _e.g., Fall 2025_  
**Version:** _0.2_ • **Last Updated:** 2026-10-28

---

## 0) Revision History
| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 0.1 | 2026-10-27 | _Kumanan_ | Initial draft |
| 0.2 | 2026-10-28 | _Kumanan_ | Project Overview |

---

## 1) Project Overview
**1.1 Problem Statement**  
_What problem are you solving and for whom? (3–5 sentences)_
We're solving problems for all post-secondary students that struggle with keeping track of notes.
Users are able to organize, sort, and manage their notes efficently within our app.
They can add tags, put them in folders and search for them.
These notes can be downloaded for offline viewing.

**1.2 Users & Context**  
- Primary users: _Post secondary students_
- User needs: _Notes organization, note editing, find notes fast_
- Context & constraints: _web, mobile, online/offline , accessibility considerations_

**1.3 Value Proposition**  
_A one-paragraph pitch: why this matters; what’s different/better._
This note taking app matters because students often find dozens of notes per course by the end of the semester.
Being able to organize and sort notes based on date, course, or priority help students prepare for exams.
Students can easily put together a folder for all the material they need to review.

**1.4 Goals & Non‑Goals**  
- **Goals (in-scope):** _Sorted notes, note editing, searching for notes, filtering notes by tag/dates_
- **Non‑Goals (out-of-scope):** _Calendar, reminders_

---

## 2) Requirements
**2.1 User Stories (MoSCoW priority)**  
_List at least 6; include ID and priority._
| ID | As a… | I want… | So that… | Priority (M/S/C/W) |
|---|---|---|---|---|
| US-1 |  |  |  |  |
| US-2 |  |  |  |  |

**2.2 Acceptance Criteria (Given/When/Then)**  
_Trace to user stories._
- **US-1:**  
  - Given … When … Then …  
  - Given … When … Then …

**2.3 Assumptions & Constraints**  
- _Tech limits, time, skills, devices, data, privacy._

---

## 3) Figma Design
> Provide **view-only Figma links** and 2–3 **exported screenshots** per key screen.

**3.1 Figma Links**  
- **Design file:** _https://www.figma.com/file/…_  
- **Prototype (Present mode):** _https://www.figma.com/proto/…_  
- **Design System / Components (optional):** _https://www.figma.com/file/…_

**3.2 Screen Inventory**
| Screen ID | Name | Purpose | Status (Draft/Final) | Link |
|---|---|---|---|---|
| S-1 |  |  |  |  |
| S-2 |  |  |  |  |

**3.3 User Flows**  
_Attach Figma flow(s) and list success criteria for each flow._

**3.4 Accessibility in Design**  
- Color contrast (target WCAG 2.1 AA)  
- Keyboard focus order indicated  
- Labels, hints, and error messaging specified

> **Paste 2–3 key Figma screenshots below (export PNGs)**
![Home screen](./imgs/home.png)
![Task flow](./imgs/flow.png)

---

## 4) Information Architecture & Data
**4.1 Sitemap / Navigation**  
_Draw or link a simple diagram (can be Figma)._

**4.2 Content / Data Model**  
| Entity | Key Fields | Notes |
|---|---|---|
| User | id, name, email |  |
| Item | id, title, tags |  |

---

## 5) UI Specifications
**5.1 Layouts per Screen**  
_For each screen, specify: layout, spacing, breakpoints, and annotations._

**5.2 Style Guide**
- **Colors:** _Hex codes with roles (Primary, Background, Text, Error, etc.)_
- **Typography:** _Heading sizes, body text, line-height_
- **Iconography:** _Set used and sizes_
- **Components:** _Buttons, inputs, cards, alerts (states: default/hover/focus/disabled/error)_

---

## 6) Interaction Design
**6.1 States & Behaviours**  
- Loading, empty, success, error states with visuals and messaging  
- Keyboard interactions and focus management

**6.2 Microcopy**  
_Errors, empty states, tooltips, button labels._

---

## 7) System Overview (Lightweight)
**7.1 Architecture (if applicable)**  
- Client (framework), optional server/API, storage (if any)  
- Diagram (image or ASCII)

**7.2 External Services / APIs (if any)**  
| Service | Purpose | Auth | Notes |
|---|---|---|---|

---

## 8) GitHub Workflow (Course Conventions)
- **Repository:** _URL_ • **Default Branch:** `main`  
- **Branching:** `feature/xyz-123`, small PRs (< 200 lines), request review  
- **Issues & Milestones:** link each PR to an issue; use labels (feature/bug/docs)  
- **PR Checklist:** lint passes, screenshots (if UI), tests (if any), clear description

---

## 9) Testing Plan
**9.1 Usability Checks (3 participants)**  
- Short task script, success criteria, and observations template.

**9.2 Functional Checks (Happy/Edge Paths)**  
| Case ID | Story | Steps | Expected |
|---|---|---|---|
| TC-1 | US-1 |  |  |

---

## 10) Accessibility & Inclusion
- Keyboard-only use possible on key flows  
- Alt text for images; form labels; error messaging helps recovery  
- Language plain and inclusive (grade ~8–10)

---

## 11) Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
|  |  |  |  |

---

## 12) Milestones & Schedule
| Milestone | Date | Deliverable |
|---|---|---|
| Design Freeze |  | Figma screens & flows |
| MVP Build |  |  |
| Demo |  |  |

---

## 13) Submission Checklist
- [ ] Figma links (design + prototype)  
- [ ] 2–3 screenshots per key screen  
- [ ] User stories + acceptance criteria  
- [ ] Screen inventory & flows  
- [ ] Style guide & interaction states  
- [ ] GitHub repo URL and PR/Issue links  
- [ ] Usability + functional check results  
- [ ] Accessibility notes  
- [ ] Risks & timeline

---

## Appendix
**A) Glossary**  
**B) AI‑Assistance Disclosure** (_tools used and how_)  
**C) References**
