# Code-Challenge4

This is the code Challenge

Goals

1. Make 4 routes: "/" , "/about-us" , "/contact" and "/protected"
2. Each route should render a string with the name of the page, i.e: "/about-us" -> About Us.
3. Make one middleware for all the routes, that middleware should console.log the message "I'm a middleware" on every request to any route.
4. Make a middleware that won't allow me to go to "/protected", if I try to go to "/protected" I should be redirected back to "/"

Conditions

1. Use only ONE file: index.js
2. There should be TWO middlewares. One is the "console" middleware and the other one is the "protected" middleware.
3. There should be FOUR routes.
