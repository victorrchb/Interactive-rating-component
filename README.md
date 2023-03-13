# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

I started figuring out how to use label and input, how to make a radio button functionnal.

```html
<input type="radio" name="rating" class="input" id="input-1">
<label for="input-1" class="nb" id="one">1</label>
<input type="radio" name="rating" class="input" id="input-2">
<label for="input-2" class="nb" id="two">2</label>
<input type="radio" name="rating" class="input" id="input-3">
<label for="input-3" class="nb" id="three">3</label>
<input type="radio" name="rating" class="input" id="input-4">
<label for="input-4" class="nb" id="four">4</label>
<input type="radio" name="rating" class="input" id="input-5">
<label for="input-5" class="nb" id="five">5</label>
```

I also learned how to style a radio button, by styling the label associated to it with the attribute for.

```css
.numbers label {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 50px;
    border-radius: 25px;

    background-color: #343f4b;
    color: hsl(217, 12%, 63%);
}
```

And i started doing my very first js interaction, I learned the theorical part at school 
and now i could put it into work, so im proud of how easy i figured it out.

```js
nbOne.addEventListener('click', ()=> {
    submit.addEventListener('click', ()=> {
        if (rating.style.display == 'flex') {
            rating.style.display = 'none'
            thank.style.display = 'flex'
            selection.innerHTML = '&nbsp; 1 &nbsp;'
        } else {
            rating.style.display = 'flex'
        }
    })
})
```

### Continued development

I'm gonna keep using js interaction since i think they are more or less intuitive and I want to improve
in web interaction in general, in order to be able to use it anytime.

### Useful resources

- [Useful ressource 1](https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css) - This helped me to put a css styled onclick effect on my radio buttons, 
because the buttons weren't showing any checked state on the page.

## Author

- Frontend Mentor - [@Obamasixgaming](https://www.frontendmentor.io/profile/Obamasixgaming)
- Github - [Obamasixgaming](https://github.com/Obamasixgaming)