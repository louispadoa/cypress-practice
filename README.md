# Cypress Practice

## Introduction
This repository contains the starter files for the 'Cypress Practice' exercise.

As part of this exercise we will use Cypress to write a series of functional tests. More specifically, we will be testing the features and functionality of the card matching game that we built as part of the 'Introduction to Debugging' class.

This exercise will build on the concepts and techniques that we've explored in this course, as well as some of the material that you have covered in the other WDDM courses.

## Learning Objectives
- To learn more about testing in general, and functional testing in particular.
- To explore Cypress, a powerful functional and end-to-end testing tool for browser-based applications.

## Prerequisites
To complete today's exercise you should have an understanding of the following:
- JavaScript fundamentals, including variables, functions, conditional statements, errors, and events.
- Testing fundamentals, including a basic understanding of unit, functional, and end-to-end testing.

You must also have Node installed on your local system. See the resources section below for download information.

## Goals
At a minimum, your submission should include the following:
- Passing implementations of the tests defined in the 'game.spec.js' file. This includes the 'basic functionality', 'countdown', and 'endgame' tests.

## Stretch Goals
If you are interested in going above-and-beyond the minimum requirements of the assignment, try implementing one or more of the stretch goals outlined below:

- Update the game to support a 'restart' feature. Update the functional tests to ensure that the user is able to successfully restart the game.
- Update the game to shuffle the cards whenever the user makes an incorrect selection. Update the functional test to confirm that this feature works as expected.
- Update the game to display an error message if the user takes longer than a predetermined amount of time to match all of the cards. Update the functional tests to confirm that this feature works as expected.
- Update the game to shuffle the cards before the game begins. Update the functional tests to confirm that this feature works as expected

## Before You Begin
- Fork this repository to your personal GitHub account.

## Instructions

### Installing the Project Dependencies
This project depends on Cypress, which in turn has its own dependencies. To install the project's dependencies, run the following command from the root of your repository: `npm install`.

Please note that Cypress is a _very_ large dependency, meaning that it can take several minutes to install.

### Serving the Game
To access (and test) the game, run the following command from the root of your repository: `npm run start`.

This will create a web server that exposes the game files at the following URL: http://localhost:8080. The server occupies the terminal process, and must remain active in order to access the game files.

### Running the Tests
You can run the functional tests in either of the following ways:

- `npm run test`
- `npm run cypress`
- `npm run cypress:open`

The first two options will run Cypress in 'headless' mode, meaning that the output of the tests will displayed in your terminal program.

The final option runs Cypress in interactive mode, which allows you to view the tests as they are being executed.

## Approach
This exercise focuses primarily on functional testing, but each of the stretch goals requires an update to the implementation code as well.

As usual, you are free to approach this exercise however you see fit. If you would like some additional help, feel free to use the following approach:

- Started by reviewing the instructions above.
- Run the server and interact with the game. How is it similar to and different from the game from the 'Introduction to Debugging' class?
- Review the tests defined in `game.spec.js`. Make sure you understand what each test case is describing, and how you would manually test these features.
- Starting with the first test, create a series of comments that describe your approach (don't worry about the technical details just yet). What are the user behaviours that you will have to simulate as part of this test?
- When you are comfortable with your approach, start to translate your notes into a Cypress-specific implementation. Make sure to run the tests often, as they will provide you with valuable feedback.
- Commit frequently (for example: each time you successfully implement a new test case). Having a Git history made up of many small commits makes it easy to step backwards in cases where something goes wrong.

## Resources

### Node
- Download: https://nodejs.org/en/

### Cypress
- Cypress homepage: https://www.cypress.io/
- Cypress documentation: https://docs.cypress.io/guides/overview/why-cypress
- Cypress (Introduction): https://docs.cypress.io/guides/core-concepts/introduction-to-cypress
- Cypress (Interacting with Elements): https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability
