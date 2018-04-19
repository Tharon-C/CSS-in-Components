## CSS in Components,
Removing side effects and taming the beast

---

## Whats wrong with CSS?

---

### Have you ever set out to solve what seemed to be a small layoout tweek and...

---

- Spent over an hour trying to figure what was causing the issue?
@ul
- Fixed it, only to find out you broke something else?
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

We know that side effects will ruin our day. They make applications brittle and hard to test.

---

We understand that *constraints* are better than *disipline*.

---

### These things we know to be bad are literally the core features of CSS

---   

### Ok, but why is my style being overwritten?

---

### The cascade
Last word wins...

```css
.widget {
    width: 20px;
}
.widget {
    width: 10px;
}
/* I win! */
.widget {
    width: 30px
} 
```
---

...sometimes
---?image=assets/war.jpg
<div style="background: rgba(0,0,0,.6); padding: 20px;">
    <h3> The Great Specificity War!</h3>
</div>

---

### And Such as in War
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

But there are really smart people making amazing applications. How do they avoid these problems?

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

### com·po·nent
#### /kəmˈpōnənt/
**noun**
1. a part or element of a larger whole, especially a part of a machine or vehicle.

*synonyms:*	part, piece, bit, element, constituent, ingredient, building block

---

An independent piece of software with a clear boundary that is accessible through an API

---

![Image of a toggle component](assets/toggle-component.png)

---

```jsx
<Toggle
    label="Simple"
/>
<Toggle
    label="Toggled by default"
    defaultToggled={true}
/>
<Toggle
    label="Disabled"
    disabled={true}
    onChange={ doSomthing }
/>
```
---

Larger Components can be built out of smaller ones
![Complex component](assets/media-card.png)

---

### Why components?

---

This is a common folder structure you will find in a project that uses something like BEM, ACSS, ECSS etc...

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

