## CSS in Components,
Removing side effects and taming the beast

---

## Whats wrong with CSS?

---

### While trying to fix a “small” layout issue have you ever...

---

- Spent over an hour trying to figure what was causing the issue?
@ul
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
These are symptoms of some big problems

---

### As programers we know to avoid global variables

---

We know side effects will ruin your day and make application brittle and hard to test.

---

We understand that *constraints* are better than *disipline*.

--- 

### Ok, but why is my style being overwritten?

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

### Such as in War
We all lose

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

```css
* {
    display: none;
}
```

---

### But there are really smart people making amazing applications. How do they avoid these problems?

---

## Methodologies and Tools!

---

### BEM / SUITCSS, ACSS, SMCSS, ECSS

---

All of these methodologies use namespacing and single selectors to avoid the issues with the cascade and specificity.
```html
<style>
    .widgitScope {
        ...
    }
</style>
<div class="widgetScope">
    ...
</div>
```
---


### What is a component?

---

### Why components?

---

### This is a common folder structure in an application following these methodologies
You can see that there is an implied relationship here defining the parts that make our component.

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

### Many like ECSS takes this to the next logical step
This makes code deletion less scary and further represents these files as a component.

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
This is just a superficial relationship that requires disipline and parallel maintanance. Still have global variabls so scoping only happens through naming conventions.  
---

### Side Effects

---

### Already joind concerns between markup and styles
This is good, a better separation in a modern application is between data, state, and presentation.

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

### Thank You!

---

