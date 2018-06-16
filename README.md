# Testing React with Jest and Enzyme

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This simple application has been created as an exercise on my way to learn and master testing in JavaScript and TDD development.
The testing libraries that have been chosen are Jest (developed at Facebook) and Enzyme (developed at Airbnb). At the moment (March 2018) they are the most popular ones among the React Comunity.
The application has been built using `create-react-app`, which takes care of setting up the development environment and ships with Jest as default testing library.
The different commits should either be separate features or subsequent steps in my learning process and in its review, afterwards. They would help me follow my thought process as I updated my code.

## Getting Started

To install this application you can (fork and) download it and then run the command `npm install` from your console.
To launch it, after the installation has successfully complete, launch it with the command `npm start`.
To test is, run the command `npm test` in a separate command prompt window.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Jest](https://facebook.github.io/jest/) - A complete and easy to set-up JavaScript testing solution
- [Enzyme](http://airbnb.io/enzyme/) - A JavaScript Testing utility for React

## Author

- **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

The examples on this application have been taken or inspired by the courses I followed to learn testing in JavaScript, all of them mentioned in the [Acknowledgments](#acknowledgments) section. I highly recommend them, to build your knowledge on the subject step by step.
The tests to mock a call to an external API are taken from the course [Testing React with Jest and Enzyme](https://javascriptplayground.com/testing-react-enzyme-jest/). The article [But really, what is a JavaScript mock?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d) by Kent C. Dodds helped me simplify the mock test even further by using a `mock` directory.
Instead of using the built-in React Router v4 library, I re-wrote the custom version built by Tyler McGinnis in his course (reference in [Acknowledgments](#acknowledgments)) below. By writing it piece by piece and studying the tests written by the guys who created the official version, it will be shed some light on its inner workings.

## Notes on the Installation process

If you want to install everything from scratch, there are some steps that at the time of this writing need to be taken, as something seems not to be working properly when installing Enzyme.
For the installation process using `create-react-app`, I followed the official React and Enzyme documentation, that are summarized in this article: [An introduction to testing React components with Enzyme 3](https://javascriptplayground.com/introduction-to-react-tests-enzyme/).
After the installation, though, some modules were deleted. I was faced with one error when trying to run the tests afterwards:

1.  `Error: Cannot find module 'jest-cli'`.

After reinstalling the 'jest-cli' module, another one showed up:

2.  `TypeError: environment.setup is not a function`.

The solution suggested on [this issue](https://github.com/facebook/jest/issues/5119) by Dan Abramov (Gaeron) solved the problem.
Here is what he wrote: "If you have both `react-scripts` and `jest` in your `package.json`, delete `jest` from it. Then delete `package-lock.json`, `yarn.lock` and `node_modules`. Then run `npm install` (or `yarn` if you use it)."

By just cloning the application and running `npm install` on your terminal, none of the above errors should show up.

## Notes on Jest, Flow and `create-react-app`.

Jest, like many other JavaScipt libraries, is not written with Flow types. That causes Flow to output error messages about files that contain untyped code. To solve this issue Flow supports the concept of a "library definition" that needs to be grabbed from the `flow-typed` repository. The solution chosen for this project is the CLI which can was installed as an npm module. 
We then need to install the library definitions for the third-party libraries we use and that are not annotated, as listed in the `flow-typed` repository. 

IMPORTANT: `flow-typed`, when installed, looks in the `devDependencies` property for the third-party libraries in use in the project. As this project was built using `create-react-app`, it was necessary to list Jest in the `devDependencies` property in the `package.json` file, as it's not inserted there by default. See also [this](https://github.com/facebook/create-react-app/issues/453) issue. 

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Frontend Masters - Testing JavaScript Applications (feat. React and Redux) by Kent C. Dodds](https://frontendmasters.com/courses/testing-javascript/)
- [Egghead - Testing JavaScript with Jest, by Kent C. Dodds](https://egghead.io/playlists/testing-javascript-with-jest-a36c4074)
- [JavaScript Playground - Testing React with Jest and Enzyme](https://javascriptplayground.com/testing-react-enzyme-jest/)
- [Medium - But really, what is a JavaScript mock?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d)
- [Google Developers - Async Functions: Making Promises Friendly](https://developers.google.com/web/fundamentals/primers/async-functions)
- [Tyler McGinnis - Build your own React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
- [React Training GitHub - testing the Route Component](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/__tests__/Route-test.js)
- [Stackoverflow - Updating address bar with new URL without hash or reloading the page](https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page)
- [MDN Web Docs - Manipulating the browser history](<https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method>)
- [39Digits - Configure Prettier and ESLint in Visual Studio Code](https://www.39digits.com/configure-prettier-and-eslint-in-visual-studio-code/)
- [39Digits - Automatically format your JavaScript commits using Prettier and Husky](https://www.39digits.com/automatically-format-your-javascript-commits-using-prettier-and-husky/)
- [Luca Pette - Using Flow and Jest](http://lucapette.me/using-flow-and-jest)