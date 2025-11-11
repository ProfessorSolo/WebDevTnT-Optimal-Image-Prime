# WebDevTnT · Optimal Image Prime  
**Serve the right pixels to the right device.**

> Lesson 04 of the WebDev TnT series by Professor Solo — mastering modern web image handling and optimization.

---

## 🎯 Objective
Learn how to deliver high-performance, responsive images that preserve design intent and accessibility across every screen size and device.

---

## 🧩 Lesson Modules
Each folder in this repo builds on the previous one to show the evolution from static to fully responsive imagery.

| Folder | Focus | Key Concepts |
|---------|--------|--------------|
| **01-web-image-formats** | Compare classic vs. modern image formats. | JPEG · PNG · GIF · SVG · WebP · AVIF |
| **02-max-width** | Prevent image overflow. | `max-width: 100%` · intrinsic scaling |
| **03-srcset-and-sizes** | Serve right-sized images for different viewports. | `srcset` · `sizes` · width descriptors |
| **04-picture-element** | Add art direction & format fallbacks. | `<picture>` · `<source type>` · responsive breakpoints |

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
WebDev TnT · BCIT SSD Program  

Demo assets © 2025 Josh Solomon — generated with Adobe Firefly.  
For educational use only.

---

## ⚙️ License
Licensed under the **WebDevTnT Learner License 1.0**  
*Learn from it — don’t teach from it.*
