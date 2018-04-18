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

### Side Effects
A single selector can effect the whole application and the only thing stoping it is disipline

---

### Why is my style being overwritten?

---

### The cascade
Last word wins...
@
...Somtimes
@end

---

### The Great Specificity War!
__image here__

---

### Specificity is one of the ways the cascade decides who wins

--- 