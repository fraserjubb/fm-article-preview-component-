# FM - Article Preview Component Solution - Fraser Jubb

This is a solution to [this challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## 📖 Table of contents

- [Overview](#overview)
  - [Project Screenshot](#project-screenshot)
  - [Project Links](#project-links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Noteworthy Updates Since Initial Submission](#noteworthy-updates-since-initial-submission)
- [Connect With Me](#connect-with-me)

## Overview

### Project Screenshot

![Screenshot of solution](/assets/images/solution-fraser.png)

### Project Links

- Solution URL: [Click Here](url)
- Live Site URL: [Click Here](url)
- Frontend Mentor Profile: [@fraserjubb](https://www.frontendmentor.io/profile/fraserjubb)

## My Process

### Built With

- HTML
- CSS
- Desktop-first workflow

### What I Learned

In this particular project:

1. This was my first time working on a JavaScript project that was not part of a video course where I follow tutorials. It felt good.

2. I greatly improved my understanding of `stopPropagation()` and how it prevents the event from moving up the DOM tree to parent elements and triggering their event listeners. Particularly useful for pop-up menus (in this case it was the simple share menu).

3. I knew there must be an easier way than checking IF "the event was not the menu itself" and IF "it did not already contain the class I wanted"... So I used AI to assist for the first time, asking ChatGPT to create a basic box and "Add a function so that if anywhere else on the page is clicked, the box will always disappear" and then went into a deep dive on `stopPropagation()`. I was then able to apply this to my own code (this project). So this:

```js
function hideShare() {
  shareMenu.classList.add("hidden");
  if (e.target !== shareMenu) {
    if (!btn.classList.contains("hidden")) shareMenu.classList.add("hidden");
  }
}
```

BECAME THIS >>>

```js
function hideShare() {
  shareMenu.classList.add("hidden");
}

function preventBubble(e) {
  e.stopPropagation();
}
```

3. Using `left`, `right` and `center` is better than using exact pixels for object-position (in many cases).

```css
.card__image {
  object-fit: cover;
  /* object-position: 0.1px; */
  object-position: left;
}
```

### Continued Development

After submitting this project, I wish to develop the following:

1. In this project I tried to match comment headings in CSS with comment headings in my html. This was to make it easier to quickly figure out the location for relevant sections of code. Unsure if this practice will work for larger projects, but something I wanted to make a note of so that I can try it again going forward in future projects.

2. As noted earlier, this was my first time using AI (ChatGPT) to assist when I was troubleshooting my code. I was careful to 1) Not include any actual code from my project and 2) Treat it similarly to MDN documentation where I try and breakdown the problem and understand it so I can then apply it to the code myself. I do not intend to have ChatGPT to write my code at any point (other than very basic boilerplates) or to read my own code as this could lead to problems - both in the code itself and it's origin.

### Useful Resources

- Nothing of note used for this project.

## Noteworthy Updates Since Initial Submission

1. No major updates since submitted.

## Connect With Me

<a href="https://github.com/fraserjubb"><img height="30px" align="left" alt="GitHub" style="padding-right:10px" title="Github" src="https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/fraser-jubb"><img height="30px" align="left" alt="LinkedIn" style="padding-right:10px" title="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=plastic&logo=linkedin&logoColor=white"/></a>
<a href="https://www.instagram.com/thejubbzone/"><img height="30px" align="left" alt="Instagram" style="padding-right:10px" title="Instagram" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=plastic&logo=Instagram&logoColor=white"/></a>
<a href="https://x.com/fraserjubb"><img height="30px" align="left" alt="X" style="padding-right:10px" title="X" src="https://img.shields.io/badge/X-%23000000.svg?style=plastic&logo=X&logoColor=white"/></a>
<a href="https://www.youtube.com/@thejubbzone2374"><img height="30px" align="left" alt="YouTube" style="padding-right:10px" title="YouTube" src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=plastic&logo=YouTube&logoColor=white"/></a>
<a href="mailto:fraserjubb.dev@gmail.com"><img height="30px" align="left" alt="Gmail" style="padding-right:10px" title="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=plastic&logo=gmail&logoColor=white"/></a>
