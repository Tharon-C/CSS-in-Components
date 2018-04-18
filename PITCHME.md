## CSS in Components,
Removing side effects and taming the beast

---

## Whats wrong with CSS?

---
### While trying to fix a “small” layout issue have you ever..


@ul

- Spent over an hour trying to figure what was causing the issue?
- Fix it to find out you broke something else?
- Know what is wrong and how to fix it but it requires refactoring a buch of code that seems unrelated?
- Do something dirty like write an inline style, extra class name or add `!important` to the rule?

@ulend

---

### Does this look familiar?
```css
.homepage .footer #linkList a.listitem {
  width: 50% !important
}
```