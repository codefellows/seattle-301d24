# Notes for Today

HTTP -> HyperText Transfer Protocol

The web request-response cycle

1. You send a request for a page/data at some website.
2. The server that hosts the website parses your request and looks for the data that you're asking for.
  2a. It may or may not need to access its own database to get the data you need. If it does, then that's also a part of the cycle.
3. Once the server finds what you were looking for, it puts together an HTTP response containing your data as well as information about the data transfer.
4. Your browser will wait until a response is received (or until its Timeout limit is reached). If a good response is sent back, then your browser loads the page/data.

Types of HTTP Requests:
- GET: asking for a resource from some remote (or local) server. e.g. searching for something on google.
- POST: adding new data to some remote (or local) server (as long as you have the proper credentials). e.g. signing up for a website using your email and password
- PUT: updating existing data on some server. e.g. updating my profile picture on facebook
- DELETE: delete existing data from some server. e.g. deleting a blog post
- HEAD
- OPTIONS

Types of HTTP Responses:
- 100-level: asking for info about the site
- 200-level: your request was just fine. it worked the way it was supposed to. have some juice.
- 300-level: a redirect of some kind. Either the thing you were looking for was temporarily moved, or permanently moved, or something else, but you're still able to complete the request. It's just that the thing you were looking for isn't where you expected it to be.
- 400-level: you sent a bad request of some kind, or you don't have access, or you screwed up in some other way.
- 500-level: the server is screwed up in some way. Maybe the database is bad, or the proxy server isn't running, the actual app died for some reason.

The data you get back is a part of the response body.

## JSON - JavaScript Object Notation

API - Application - Programming Interface

AJAX - Asynchronous JavaScript and XML

AJAX allows us to send HTTP requests from the front-end for data that we might need. jQuery includes a ton of AJAX functionality and its why I love it.

- `$.ajax(url)` - sends an AJAX request to some URL; you have to provide the method and data
- `$.get(url)` - send explicitly a "GET" request
- `$.post(url)` - send explicitly a "POST" request
- `$.getJSON(url)` - send a request specifically for JSON in your response.

AJAX requests are also known as XML HTTP requests. In the docs, this is abbreviated as either "xhr" or "jqxhr"

If you have data coming back from a request and you try to assign that data to a variable that is relatively global to the callback function that processes the request, the value of that global variable (when run in sequence) will always be "undefined" (or whatever the value was before the AJAX request.). EXAMPLE:

```javascript
let foo = 'bar';

$.get('/some/other/url/with/data', function(response){
  foo = 'flerg';
})

console.log(foo) // returns 'bar'
```
