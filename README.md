
# WebDevTnT Shared Starter

Shared assets at the repo root. Each lesson lives in `chapters/<lesson-name>/` and only includes lesson-specific HTML/CSS/JS/images.

```
styles/
  reset.css
  brand.css
  layout.css
scripts/
  ui.js
images/
  (shared images here)
chapters/
  _template/
    index.html
    styles/
      chapter.css
    scripts/
      chapter.js
```

## Notes
- Mobile-first. Shared header, footer (sticky), and layout.
- Tabs and accordion are dependency-free and accessible (ARIA for tabs, native `<details>` for accordion).
- Use the `_template` folder as your starting point for new lessons.
