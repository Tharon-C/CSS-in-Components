## CSS in Components,
Removing side effects and taming the beast

---

## Whats wrong with CSS?

---
### While trying to fix a “small” layout issue have you ever...


@ul

- Spent over an hour trying to figure what was causing the issue?
- Fixed it to find out you broke something else?
- Known what was wrong and how to fix it but it required refactoring a buch of code that seemed unrelated (bad PRs)?
- Done something dirty like write an inline style, extra class name or add `!important` to the rule?

@ulend

---

### Does this look familiar?
```css
.homepage .footer #linkList a.listitem {
  width: 50% !important;
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

```css
.widget: {
    width: 20px;
}
.widget: {
    width: 10px;
}
/* I win! */
.widget: {
    width: 30px
} 
```
---

...sometimes

---

### The Great Specificity War!
__image here__

---

> Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
---

### The following list of selector types increases by specificity:
@ol
- Type selectors (e.g., h1) and pseudo-elements (e.g., ::before).
- Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
- ID selectors (e.g., #example).
@olend

---

### So... who wins?
 
```css
.homepage .footer #linkList a.listitem {
  background: #EFEFEF !important;
}

div.homepage .footer a.listitem::hover {
  background: #F4F4F4 !important;
}
```

Specificity Calculator: https://specificity.keegan.st/

--- 

### Side Effects
A single selector can effect the whole application and the only thing stoping it is disipline

---

### But there are really smart people making amazing applications. How do they avoid these problems?

---

## Methodologies and Tools!

---

### BEM / SUITCSS, ACSS, SMCSS, ECSS

---

... commmon between all (components)...

---

### What is a component?

---

### Why components?

---

```

html/
- shopping-cart-template.html
- callouts-template.html
- products-template.html

js/
- shopping-cart-template.js
- callouts-template.js
- products-template.js

css/
- shopping-cart-template.css
- callouts-template.css
- products-template.css

```

---

```

shopping-cart-template/
- shopping-cart.html
- shopping-cart.css
- shopping-cart.js

callouts-template/
- callouts.html
- callouts.js
- callouts.css

products-template/
- products.html
- products.js
- products.css

```

---

### Why do we need better?

---

### Implicit coupling
Parallel maintenance and a superficial relationship that requires disapline
---

### Side Effects

---

### Already joind concerns between markup and styles
This is good, the separation is between data, state, and presentation.

---

### CSS in Components

---

### What does it solve?

---

### Options

---

### CSS in JS

---

Do we go into JSS or wrap it up here?

---

### JSS

---

### JSS Examples 

---

### How to handle common use cases

---

### where to go from here?

---

