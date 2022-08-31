# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I practiced](#what-i-practiced)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The `input` filed is a url with or without `http(s)://www.`

### Screenshot

![](./screenshots/mobile-ShortUrl.png)
![](./screenshots/mobile-menu-ShortUrl.png)
![](./screenshots/Desktop-ShortUrl.png)


### Links

- Live Site URL: [https://shorturl-ivnrice.vercel.app/](https://shorturl-ivnrice.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- Semantic HTML5 markup
- Flexbox for components
- Mobile-first workflow
- Kanban Methodology

### What I practiced

- Mobile-first workflow.

- throtle function in Buttons: I had to deal with useState(), so i had to make use of useMemo() in order to preserve the closure across re-renders
- Solution
```js
    const memoThrotleClickURLHandler = useMemo(() => {
        const handleShortenUrlClick = async event => {
            ...
        }
        return throtle(handleShortenUrlClick, 1500)
    }, [])
```

```html
<form onSubmit={memoThrotleClickURLHandler}>
```

- Ellipsis: If the url is too long, it overflows its container.

- Solution:
```css
    p {
      ...
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
```


### Useful resources

- [Stale Closure](https://dmitripavlutin.com/react-hooks-stale-closures/) - This helped me understan what a stale closure is and gave me an idea of how to solve it with an external throtle function

## Author

- 3D Art work - [Ivanrice_](https://www.instagram.com/ivanrice_/)
- Frontend Mentor - [@Ivanricee](https://www.frontendmentor.io/profile/Ivanricee)
- Twitter - [@ivanrice_](https://twitter.com/ivanrice_)