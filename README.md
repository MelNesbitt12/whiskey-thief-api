# Whiskey Thief API

Whiskey Thief is a single page application designed to allow users to store, view, and update information about their favorite whiskeys. A "whiskey thief" is a tool that master distillers use to extract small portions of whiskey from aging barrels for sampling. This application serves as a whiskey thief of sorts, allowing users to "sample" information about whiskeys they've tried. This application works with a backend API - see deployed site link under "Important Links".

I came up with this idea after spending the last year collecting over 50 bottles of whiskey with my husband. We are somewhat obsessed. I thought it would be fun and useful to have a way of storing information about the bottles we own, as well as basic information about what stood out to me about each whiskey (I've tried a lot, and can't remember them all!).

## Important Links

* [Whiskey Thief Client Repo] https://github.com/MelNesbitt12/whiskey-thief-client
* [Deployed Whiskey Thief API] https://rocky-fjord-04258.herokuapp.com/
* [Deployed Whiskey Thief Client Application] https://melnesbitt12.github.io/whiskey-thief-client/

## Planning Story

I began the planning process for my API by creating an ERD to represent users and their resources. Each user can have many resources (whiskeys), so my ERD depicted a one-to-many relationship. The ERD linked below shows a subdocument of comments added to the whiskey schema, but I did not end up including a comments subdocument.

First I tested all user authentication requests with curl scripts. From there, I moved on to building my whiskey schema and including all relevant key-value pairs (name, type, country and price). I then wrote and tested curl scripts for CRUDing my resource. After testing these curl scripts in my terminal, I moved on to creating routes for each request: create, update, index and delete.

CRUDing my resource was a more challenging part of working on the back end. It took trial and error, looking at documentation/searing online, and referring back to previous class notes to better understand how to write each route function so it could successfully handle a request from the client. I asked a lot of questions of my instructors during this process.

As I worked on the back end, I used our development environment to test out authentication and CRUD. After initially deploying my API to Heroku, I tested out authentication and CRUD with curl scripts using my API url instead of the development URL.

### User Stories

* As a user, I need to be able to sign in, create an account, sign out, and change my password.
* As a user, I need to be able to add new whiskeys to my whiskey shelf.
* As a user, I need to be able to update information about my whiskeys, including adding comments specific to each whiskey.
* As a user, I need to be able to see a list of all whiskeys that I've tried.
* As a user, I need to be able to delete whiskeys from my account.

### Technologies Used

My Whiskey Thief API was built with:
  * MongoDB
  * Mongoose
  * Express
  * Nodejs

### Unsolved Problems

I have written a route to allow a user to select to view just one whiskey, as long as the user is able to provide the whiskey id. I have not connected this capability to my client application yet and would like to do so in the next version of my project.

In the next version of my project, I would like to give users the ability to add reviews and ratings to their whiskeys.

## Images

### API End Points

Verb	 URI Pattern
POST	  /sign-up
POST	  /sign-in
DELETE	/sign-out
PATCH	  /change-password
GET	    /whiskeys
POST	  /whiskeys
PATCH	  /whiskeys/:id
DELETE  /whiskeys/:id

#### Wireframe:
[Whiskey Thief Client Wirefame] https://imgur.com/a/VJGwNSA

---

#### ERD:
![Whiskey Thief API ERD] https://imgur.com/a/gq0rUye
