export default `
# Summary

Components are reusable, composable, predictable and easy to distribute. With front end libraries and frameworks like React, Vue, Elm and Angular 2 they are becoming the standard practice for building UIs today.

Related to this, is a revised interest in functional programing which is proving to be great at avoiding the issues that come with large distributed systems, ie: “The Web”. Composable pure functions and immutable data structures are deterministic and easy to test or reason about. Best of all, they scale really well.
 
CSS has also been embracing the component mentality. Most approaches today avoid the cascade and aim to break things up into smaller, scoped, reusable bits. Just like in functional programing: “Composition over Inheritance”

However most approaches use a stylesheet on the global space. They require large amounts of discipline and maintenance to work. While they can mirror the components they style, they are only coupled through an implied structure superficially. They can’t easily be shipped with the component and must be maintained in parallel. 

We will question conventions and look at ways we can explicitly bind our styles to the component so they ship together. Apply functional constraints over discipline and as a bonus we can leverage our programing language to manage it all.`
