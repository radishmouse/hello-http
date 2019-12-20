# Intro to HTTP

## How is a computer like an office building?

- Each computer has a "phone number" (IP Address)
- On a single computer, a program can have an "extension" (Port number)

### What's a port?

- it's totally made up
- it's an artificial numbering scheme that the operating system can provide to a program
- The port numbers 1-65535 are valid
- The port numbers 1-1024 are reserved for the system

### How does that work?

- If it's not taken and it's not reserved for the system, your program can have it!

## How do I use the `http` module?

- First, we `require()` and bind to a variable.
- Then we call its `createServer()` method

## What does `http.createServer()` do?

- It returns an object that can speak HTTP and can listen at a port

## What am I passing to `http.createServer()`?

- It's a callback!

## What is `req`?

- The customary name for the 1st argument in your callback
- It represents everything about the browser Request
- Node created it for you! (hooray!)

## What is `res`?

- The customary name for the 2nd argument in your callback
- It is an almost-ready-to-send Response
- Node created it for you! (thanks!)

## What does `res.end()` do?

- It fills the response with some text
- It sends the response back to the client
- It closes the connection.

## Why do I have to `.listen()`?

## What is `nodemon`?

## How do I write an `npm` script?