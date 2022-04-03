---
title: 'NC News - Reddit Clone - Front-End'
shortTitle: 'Front-End Reddit'
description: 'Developed a Reddit clone front-end with React.'
image: images/redditfront.png
github: https://github.com/benwestondigital/nc-news
livelink: https://reddit-clone-project.netlify.app/
date: '2022-03-31'
tags:
    - react
    - frontend
---

This Front-End project is Reddit-clone built using React.js. The website retrieves information from an external server via a custom API created in an earlier Back-End project. You can find the links at the bottom of this readme. The styling is creating using vanilla css, and incorporates a Loading spinner from React Spinkit.

## Technology

- React
- React Router

This project uses the most commonly used web-framework React, and the highly popular React Router tool. These technologies were chosen as they are massively popular and used by huge companies all across the world such as Netflix, Microsoft, Twitter and more.

## Key Features

- Uses React Hooks such as useState, useEffect

- Data fetching using the axios package

## Problems I faced

I ran into issues with a memory leak in my project, caused by the fetch request being unable to render the data if the user left the page before the fetch was completed. To fix this, I had to implement an unsubscribe return function in the useEffect fetch. This fixed the issue by cancelling the request whenever a user left the page.

From this I learnt a lot about React that I wouldn’t have otherwise. I learnt how to fix memory leaks, using cancel tokens to cancel a fetch request on the user leaving a page. I have a deeper understanding of data fetching through dealing with this issue.

What I would improve: split hooks out into custom hooks to separate concerns and tidy files

To handle state in this app I used useState to deal with x,y,z when they were fetched from the backend API.
Loading state, error state
I used axios to make the requests as it is more user friendly than fetch
For the user login feature, the global state is handled using react useContext
Managed the form state for comment input with useState

For styling, the app uses vanilla css

## What I learnt

## What I would improve
