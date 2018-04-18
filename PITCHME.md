## CSS in Components,
Removing side effects and taming the beast

---

## Whats wrong with CSS?

---
### While trying to fix a “small” layout issue have you ever...


@ul

- Spent over an hour trying to figure what was causing the issue?
- Fix it to find out you broke something else?
- Known what was wrong and how to fix it but it required refactoring a buch of code that seemed unrelated (bad PRs)?
- Do something dirty like write an inline style, extra class name or add `!important` to the rule?

@ulend

---

### Does this look familiar?
```css
.homepage .footer #linkList a.listitem {
  width: 50% !important
}
```

---

### Its not your fault
These are symptoms of a big problem

---

### Why is my style being overwritten?

---

### The cascade
Last word wins...

...Sometimes |

---

### The Great Specificity War!
__image here__

---

> Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

(MDN Specificity)[https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity]
---

The following list of selector types increases by specificity:
@ol
- Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).
- Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
- ID selectors (e.g., #example).
@olend
--- 

### Side Effects
A single selector can effect the whole application and the only thing stoping it is disipline

---