# Team Design Document (with Figma)

**Course:** CSSD1161 — Communication & Teamwork in Software Development  
**Team:** G1 • **Repo:** [GitHub](https://github.com/Jirenemey/G1-CSSD1161-Note-Taking-App) • **Term:** Fall Term
**Version:** 0.3 • **Last Updated:** 2026-10-29

---

## 0) Revision History
| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 0.1 | 2026-10-27 | _Kumanan_ | Initial draft |
| 0.2 | 2026-10-28 | _Kumanan_ | Project Overview |
| 0.3 | 2026-10-29 | _Kumanan_ | Expanded proposed requirements, design notes, and test plan; team review required |

---

## 1) Project Overview
**1.1 Problem Statement**
Post-secondary students often accumulate notes across courses and have difficulty keeping them organized and finding the right material when they need it. This app gives students one place to create and edit notes, group them into folders, add tags, and search or sort their collection. Notes should also be available for offline viewing after they have been saved or downloaded. The MVP focuses on dependable note organization and retrieval rather than calendars, reminders, or collaboration.

**1.2 Users & Context**  
- **Primary users:** Post-secondary students managing notes for multiple courses.
- **User needs:** Create and edit notes quickly; group notes by course or topic; find notes by title, content, tag, or date; read saved notes without an internet connection.
- **Context & constraints:** A responsive web experience for desktop and mobile browsers. Offline access depends on the chosen storage approach and supported browser. The interface should support keyboard navigation, readable contrast, and clear recovery from errors. Authentication and cross-device synchronization are not confirmed MVP requirements.

**1.3 Value Proposition**
The app helps students turn a growing collection of class notes into material they can actually find and review. Folders provide a familiar way to group notes by course or topic, while tags, search, and sorting make it easy to narrow a large collection down to the right material. Offline viewing supports study when a reliable connection is not available. The initial scope stays focused on personal note management so the core workflow can remain simple and quick.

**1.4 Goals & Non‑Goals**  
- **Goals (in-scope):** Create, view, edit, and delete notes; organize notes into folders and with tags; search notes; sort and filter the collection; and provide offline viewing for saved notes.
- **Non‑Goals (out-of-scope):** Calendars, reminders, task management, real-time collaboration, sharing permissions, and rich media attachments unless the team explicitly adds them to the MVP.

---

## 2) Requirements
**2.1 User Stories (MoSCoW priority)**
| ID | As a… | I want… | So that… | Priority (M/S/C/W) |
|---|---|---|---|---|
| US-1 | student | to create and edit a note with a title and body | I can capture and update class information | M |
| US-2 | student | to organize notes into folders and add tags | I can group material by course or topic | M |
| US-3 | student | to search notes by title or content | I can find information without opening every note | M |
| US-4 | student | to sort notes by title or last-updated date | I can choose a useful order for reviewing them | S |
| US-5 | student | to filter notes by folder or tag | I can focus on a smaller set of related material | S |
| US-6 | student | to open notes I have saved for offline use | I can study when I do not have a connection | S |
| US-7 | student | to delete a note after confirmation | I can remove notes I no longer need and avoid accidental deletion | S |
| US-8 | student | to see helpful empty, loading, and error states | I know what is happening and what action I can take next | C |

**2.2 Acceptance Criteria (Given/When/Then)**
- **US-1:**
  - Given the student is viewing their notes, when they create a note with a non-empty title and save it, then the note appears in the collection with its title and saved content.
  - Given an existing note, when the student changes its title or body and saves, then the updated content is shown when the note is reopened.
- **US-2:**
  - Given a note is open, when the student assigns it to a folder or adds a tag, then that organization is visible on the note and can be used to find it later.
  - Given the student creates a folder or tag with a name already in use, when they try to save it, then the app prevents an unintended duplicate or explains how duplicates are handled.
- **US-3:**
  - Given the collection contains notes, when the student enters a word from a note title or body in search, then matching notes are shown.
  - Given no notes match the query, when search completes, then the app shows a no-results message and provides a way to clear the query.
- **US-4:** Given the collection contains multiple notes, when the student chooses title or last-updated sorting, then the list is ordered accordingly and the selected sort option is visible.
- **US-5:** Given notes have folders or tags, when the student selects a folder or tag filter, then only matching notes are shown; clearing the filter restores the full collection.
- **US-6:** Given a note has been saved for offline use, when the device is offline and the student opens that note, then its saved content remains readable and the app communicates that the device is offline.
- **US-7:** Given a note is selected for deletion, when the student confirms the action, then the note is removed from the collection; cancelling leaves it unchanged.
- **US-8:** Given the collection is empty or an operation cannot complete, when the relevant screen is shown, then the app explains the state in plain language and offers an appropriate next action.

**2.3 Assumptions & Constraints**  
- The MVP is designed for one student's personal collection; account registration and synchronization across devices are undecided.
- The team will confirm the framework, persistence method, hosting, and offline implementation before treating them as commitments in this proposal.
- Offline viewing requires notes to be stored on the device. The interface must distinguish saved content from changes that have not yet been saved.
- Notes may contain private academic information. Collect only data needed by the product, avoid exposing note content in logs, and document any account or cloud storage behavior before release.
- The project is limited by the course schedule, team capacity, and the devices and browsers available for testing. The MVP prioritizes core note workflows over advanced formatting and collaboration.
- Design and implementation should target WCAG 2.1 AA contrast and keyboard accessibility; automated checks do not replace manual review.

---

## 3) Figma Design
> Provide **view-only Figma links** and 2–3 **exported screenshots** per key screen.

**3.1 Figma Links**  
- **Design file:** To be added by the team (view-only link).
- **Prototype (Present mode):** To be added by the team (view-only link).
- **Design System / Components (optional):** To be added if created.

**3.2 Screen Inventory**
| Screen ID | Name | Purpose | Status (Draft/Final) | Link |
|---|---|---|---|---|
| S-1 | Notes list | Browse, search, sort, and filter the collection; open or create a note | Draft | To be added |
| S-2 | Note editor | Create and edit a note; assign folders and tags; save or delete | Draft | To be added |
| S-3 | Folder view | Browse notes grouped under a selected course or topic | Draft | To be added |
| S-4 | Search results | Review matching notes or a clear no-results state | Draft | To be added |

**3.3 User Flows**
1. **Create and organize a note:** Open the notes list, create a note, enter a title and content, assign a folder or tags, and save. Success: the note appears in the collection and can be reopened with its content and organization intact.
2. **Find a note:** Search by a word or filter by folder/tag, then open a result. Success: the expected note is shown, and clearing the search or filter returns the broader collection.
3. **Read offline:** Save a note for offline use, disconnect, and reopen it. Success: the saved content is readable and the offline state is communicated. Confirm the exact download/save interaction during design.

**3.4 Accessibility in Design**  
- Use WCAG 2.1 AA contrast as the target for text and controls; do not rely on color alone to communicate selection or status.
- Show a visible focus indicator and document a logical keyboard order for navigation, search, editing, dialogs, and menus.
- Give inputs persistent labels; associate validation messages with the relevant field; make icon-only controls accessible by name.
- Ensure layouts reflow on narrow screens, text can be enlarged, and touch targets are usable without precision gestures.

> **Paste 2–3 key Figma screenshots below (export PNGs)**
Add exported screenshots after the Figma screens are ready. Suggested exports: notes list, note editor, and the search or offline flow. No screenshots are attached yet.

---

## 4) Information Architecture & Data
**4.1 Sitemap / Navigation**
Notes list (home) → Search results → Note editor
Notes list (home) → Folder view → Note editor
Notes list (home) → Tag filter → Filtered notes → Note editor
Use a persistent create-note action to start a new note. Keep navigation between the collection and an open note clear on desktop and mobile.

**4.2 Content / Data Model**  
| Entity | Key Fields | Notes |
|---|---|---|
| Note | id, title, body, folderId, tagIds, createdAt, updatedAt, offlineAvailable | A note belongs to zero or one folder and can have zero or more tags. `offlineAvailable` describes local availability, not synchronization status. |
| Folder | id, name, createdAt, updatedAt | Used to group notes, for example by course or topic. |
| Tag | id, name | Reusable label that can be applied to multiple notes. |
| User | id, name, email | Include only if accounts are part of the confirmed design; authentication is not yet in MVP scope. |

---

## 5) UI Specifications
**5.1 Layouts per Screen**
- **Notes list:** On wide screens, use a navigation area for folders/tags and a main note list; on narrow screens, present navigation as a compact menu or separate view. Keep search and create-note actions easy to reach. Use consistent spacing based on an 8 px unit.
- **Note editor:** Keep the title and body as the primary content, with save status and organization controls accessible without obscuring writing. On narrow screens, stack controls above or below the editor rather than forcing horizontal scrolling.
- **Folder and search views:** Reuse the notes-list layout and show the active folder, query, or filters in the page heading. Keep sort and filter controls available at narrow widths.
- **Responsive behavior:** Define breakpoints in Figma based on the content layout; verify a phone-width viewport, tablet-width viewport, and desktop viewport before finalizing.

**5.2 Style Guide**
- **Colors (proposed):** Primary `#176B5B`; page background `#F7F8F5`; surface `#FFFFFF`; primary text `#202522`; secondary text `#59635E`; border `#D8DED9`; error `#B42318`. Verify all foreground/background combinations against WCAG 2.1 AA in the final design.
- **Typography (proposed):** Use a highly legible sans-serif. Body text 16 px with line-height around 1.5; secondary labels at least 14 px; headings sized by hierarchy, with comfortable line spacing. Keep note content easy to read at browser zoom.
- **Iconography:** Use a consistent, familiar icon set for search, add, edit, delete, folders, and tags. Provide accessible names and tooltips where an icon is not self-explanatory.
- **Components:** Buttons and inputs need default, hover, focus, disabled, and error states. Confirm destructive actions before deletion. Provide visible save status, inline validation, and empty/error messages. Avoid relying on color alone for component state.

---

## 6) Interaction Design
**6.1 States & Behaviours**  
- **Loading:** Keep the page structure stable and indicate when a search or save operation is in progress.
- **Empty:** Explain that there are no notes yet and provide a create-note action. For filtered or searched results, distinguish “no notes yet” from “no matches”.
- **Success:** Confirm saves with a concise saved status; return focus predictably after closing dialogs.
- **Error:** Explain what failed, preserve unsaved text when possible, and offer a retry or recovery path. Do not silently discard edits.
- **Offline:** Indicate connection status and whether the currently open note is available locally. Do not imply that unsaved changes have synchronized.
- **Keyboard:** All actions must be operable by keyboard. Use a logical tab order, visible focus, Escape to dismiss non-destructive dialogs/menus, and return focus to the control that opened a dialog.

**6.2 Microcopy**
- Empty collection: “No notes yet. Create a note to get started.” Button: “New note”.
- No search matches: “No notes match this search.” Action: “Clear search”.
- Save status: “Saved” / “Saving…” / “Couldn't save. Try again.”
- Offline status: “Offline. Only notes saved on this device are available.”
- Delete confirmation: “Delete this note? This action cannot be undone.” Buttons: “Cancel” and “Delete note”.
- Required title error: “Add a title before saving.”
- Tooltips should name the action, such as “Search notes”, “Add tag”, or “Delete note”.

---

## 7) System Overview (Lightweight)
**7.1 Architecture (if applicable)**  
- Client (framework), optional server/API, storage (if any)  
- Diagram (image or ASCII)
Proposed MVP: a responsive browser client with persistent storage selected by the team after confirming framework and offline requirements. If offline viewing is required, the storage design must retain saved notes on the device and define how edits are saved while offline. A server/API and account system are optional and remain undecided; do not promise cross-device sync until designed and tested.

`Student → Notes interface → Local persistence (offline-capable storage: implementation TBD)`

**7.2 External Services / APIs (if any)**  
| Service | Purpose | Auth | Notes |
|---|---|---|---|
| None confirmed | No external service is required by the current proposal | N/A | Add a row if the team selects hosting, authentication, analytics, or synchronization services. |

---

## 8) GitHub Workflow (Course Conventions)
- **Repository:** https://github.com/Jirenemey/G1-CSSD1161-Note-Taking-App • **Default Branch:** `main`  
- **Branching:** `feature/xyz-123`, small PRs (< 200 lines), request review  
- **Issues & Milestones:** link each PR to an issue; use labels (feature/bug/docs)  
- **PR Checklist:** lint passes, screenshots (if UI), tests (if any), clear description

---

## 9) Testing Plan
**9.1 Usability Checks (3 participants)**  
Ask three participants who are post-secondary students to complete these tasks without coaching: create a note and organize it; find a note using search; filter by a tag or folder; and explain how they would access a note offline. Record completion, time, errors, requests for help, and any points of confusion. Success means each participant can complete the core create, organize, and find tasks without help. Do not collect real personal or course-note content during testing.

**9.2 Functional Checks (Happy/Edge Paths)**  
| Case ID | Story | Steps | Expected |
|---|---|---|---|
| TC-1 | US-1 | Create a note with a title and body, save, reopen it | The note appears in the list and the saved title and body are retained |
| TC-2 | US-1 | Attempt to save a note without a title | The app explains the title requirement and does not lose entered content |
| TC-3 | US-2 | Assign a folder and multiple tags to a note, then reopen it | The selected folder and tags remain associated with the note |
| TC-4 | US-3 | Search for a word in a title, then a word in note content | Matching notes are returned; clearing the query restores the collection |
| TC-5 | US-4, US-5 | Sort by updated date; filter by folder and tag; clear filters | Each result set and order matches the selected controls |
| TC-6 | US-6 | Save a note for offline access, disconnect, and reopen it | Saved content remains readable and offline status is clear |
| TC-7 | US-7 | Start deletion and cancel, then repeat and confirm | Cancel preserves the note; confirm removes it from the collection |
| TC-8 | US-8 | Open an empty collection and trigger a recoverable save/search error | State is explained in plain language and a next action is available |

---

## 10) Accessibility & Inclusion
- Support keyboard-only use for creating, editing, organizing, searching, filtering, and deleting notes; verify focus visibility and order manually.
- Use labels for every form field, accessible names for icon controls, and text alternatives for meaningful images. Decorative images should not add redundant announcements.
- Use plain, inclusive language (approximately grade 8–10); explain errors in terms of how the student can recover.
- Check contrast, zoom/reflow, and screen-reader announcements for save status, validation, and search results. Record the assistive technology and browser used during checks.

---

## 11) Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| Offline storage and synchronization behavior is unclear | High: notes may be unavailable or edits may be lost | Medium | Confirm whether offline is required for the MVP; define what is stored locally and test offline and reconnect scenarios before promising sync. |
| Accidental deletion or unsaved edits | High: students may lose study material | Medium | Confirm destructive actions, show save status, preserve content after recoverable errors, and test cancel/save paths. |
| Search and organization become difficult as notes grow | Medium: users cannot find material quickly | Medium | Test search, tags, folders, sorting, and empty-result states with representative collections. |
| Accessibility issues block core workflows | High: some students cannot use the app | Medium | Include keyboard, contrast, zoom, and screen-reader checks during design and functional testing. |
| Course timeline limits implementation scope | Medium: core features may be incomplete | Medium | Prioritize Must-have note creation/editing and organization; defer Could-have features if needed. |
|  |  |  |  |

---

## 12) Milestones & Schedule
| Milestone | Date | Deliverable |
|---|---|---|
| Requirements and flow review | TBD | Confirm MVP stories, acceptance criteria, and offline scope |
| Design Freeze | TBD | Figma screens, user flows, and view-only links |
| MVP Build | TBD | Implement and test Must-have note creation, editing, organization, and retrieval |
| Usability and accessibility review | TBD | Findings from three participants and accessibility checks |
| Demo and submission | TBD | Working MVP, test results, proposal, and screenshots |

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
**B) AI‑Assistance Disclosure**  
**C) References**

- **Note:** A titled entry containing text that a student can create, edit, organize, and read.
- **Folder:** A grouping for notes, such as a course or topic.
- **Tag:** A reusable label that can be applied across folders.
- **Offline availability:** A note's saved content can be opened on the same device without an internet connection; this does not imply cloud synchronization.
- **AI-assistance disclosure:** GitHub Copilot was used to help draft and organize proposal text. The team should review all requirements, design decisions, and claims for accuracy before submission.
- **References:** WCAG 2.1, W3C Recommendation: https://www.w3.org/TR/WCAG21/
