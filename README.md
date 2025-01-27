# Node.js Server Hang with Delayed Response

This repository demonstrates a subtle bug in a Node.js HTTP server where a delayed response can cause the server to hang if the `Content-Type` header is not set.

## Bug Description

The `server.js` file contains a simple HTTP server that simulates a 5-second delay before sending a JSON response.  If you run this code without the `Content-Type` header, the client will often hang indefinitely waiting for the response.  Adding the `Content-Type` header resolves the issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory: `cd node-hang`
3. Run the server: `node server.js`
4. Send a request to `http://localhost:3000` using a tool like `curl` or a browser.  Observe the behavior with and without the `Content-Type` header in `server.js`.

## Solution

The `serverSolution.js` file demonstrates the solution.  Setting the `Content-Type` header before sending the response allows Node.js to properly handle the delayed response, preventing the hang.

## Additional Notes

This bug highlights the importance of setting appropriate headers, especially `Content-Type`, when working with HTTP responses in Node.js.  Failure to do so can lead to unexpected behavior and performance issues.