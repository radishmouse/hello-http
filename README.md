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

- So that your node program is reachable at a port

## What is `nodemon`?

- It automatically reloads your node code so you don't need to stop and restart every time you save

## How do I write an `npm` script?

- You add to the `"scripts"` section of the `package.json`

## How do I send a file back in a Response?

- Use `fs.readFile()`
- Inside your callback to `fs.readFile()`, pass the contents of the file to `res.end()`

## How do I set the status code?

- Use `res.writeHead()` and pass it two arguments:
- 1. A status code number
- 2. An object with key/value pairs that specify HTTP headers
    - e.g., `{ "Content-Type": "text/html" }`

## What are some common status codes?

- https://http.cat/
- 200 means OK
- 404 means file not found
- 500 means server code error

## What do I use for the headers?

- Primarily so that the client knows what kind of data you're sending:
    - 'text/html'
    - 'text/css'
    - 'application/json'