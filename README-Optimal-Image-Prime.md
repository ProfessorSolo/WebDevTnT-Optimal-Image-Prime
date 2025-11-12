# WebDevTnT · Optimal Image Prime

**Serve the right pixels to the right device.**

> Lesson 04 of the WebDev TnT series by Professor Solo — mastering modern web image handling and optimization.

---

## 🎯 Objective

Learn how to deliver high-performance, responsive images that preserve design intent and accessibility across every screen size and device.

---

## 🧩 Lesson Modules

Each folder in this repo builds on the previous one to show the evolution from static to fully responsive imagery.

| Folder                          | Title                          | Focus                                                                                             |
| ------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------- |
| **01-format-showdown**          | 🗡️ _Format Showdown_           | JPEG vs. PNG vs. AVIF — the ultimate compression cage match.                                      |
| **02-contain-yourself**         | 📏 _Contain Yourself_          | Keeping your images under control with `max-width` and intrinsic scaling.                         |
| **03-right-pixels-right-place** | 🎯 _Right Pixels, Right Place_ | `srcset` + `sizes` = responsive precision and smart delivery.                                     |
| **04-picture-rolling-action**   | 🎥 _Picture Rolling Action!_   | `<picture>` takes the spotlight — art direction and format fallbacks on cue.                      |
| **05-on-set-image-set**         | 🎬 _On Set, image-set!_        | CSS takes the director’s chair — adaptive backgrounds and density-aware assets behind the scenes. |

Each directory contains:

- a working demo (`index.html`)
- scoped stylesheet (`styles.css`)
- short README describing its purpose

---

## 🚀 Quick Start

```bash
git clone https://github.com/ProfessorSolo/WebDevTnT-Optimal-Image-Prime.git
cd WebDevTnT-Optimal-Image-Prime
```

Open each folder’s HTML file in your browser and observe how image behavior evolves with each step.

---

## 💡 Key Takeaways

- Choose formats intentionally — **AVIF → WebP → JPEG** covers most needs.
- Use `<picture>` for art direction and fallback handling.
- Let the browser decide with `srcset` + `sizes`.
- Use `image-set()` in CSS for responsive background imagery.
- Optimize for performance metrics like **LCP** (Largest Contentful Paint).

---

## 🧑‍🏫 Credits

Developed by **Professor Solo**  
WebDev TnT

Demo assets © 2025 Josh Solomon — generated with Adobe Firefly.  
For educational use only.

---

## ⚙️ License

Licensed under the **WebDevTnT Learner License 1.0**  
_Learn from it — don’t teach from it._
