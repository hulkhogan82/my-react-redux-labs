# Dinner-and-a-movie

These are the labs for the React, Redux, and React Native classes. 

* [Overview](#Overview)
* [Setup Requirements](#Setup-Requirements)
* [How to run](#how-to-run)
* [Instructor Notes](#instructor-notes)

## Overview
We're creating a web app that could be used for a movie theater that also serves food and drinks. The customer is able to pick a movie they want to see, select a showtime, and reserve seats in the theater on a seat map.

You've been provided a Node server using Express to serve data from a mongoDB database through a RESTful API. The server can be found under the "server" folder. Its README.md file has more info about that API.

In the labs, you'll create the client portion from scratch.

## Setup requirements
1. Node and npm
1. bash
1. mongo

## How to run
```bash
cd server
npm run dev
```
This will run the client AND the server. Both are in watch mode so that if you make any changes to the source, it restarts.

## Instructor notes
Instructors, this section is for you! 

### How the projects relate
This site supports three courses:
* a five-day React with Redux, 
* a three-day React (without Redux),
* a four-day React Native