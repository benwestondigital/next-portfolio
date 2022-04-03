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

- Uses the React Hooks useState, useEffect, useContext and useParams

State changes in the app are handled using useState, and data fetching is done using useEffect.

- Controlled Components

Inputs are controlled with React and passed as props to children. For example, comment input is handled via state and updated based on user input. This allows React to be the single source of truth.

Managed the form state for comment input with useState.

- Data fetching with axios

Asynchronous fetching using the async/await syntax as it is a cleaner style and avoids lengthy promise chains.

- Components and state planned using wireframe and component tree

- User profile switching using React Context

User state needs to be shared between multiple components, therefore I have handled it using Context. On the profile page users can see the number of articles and comments they have posted, and their karma.

Delete buttons for comments conditionally renders based on the logged in user profile.

- Page Routing

React Router is used to create different page routes using client side routing. The useParams hook returns dynamic parameters from the current URL that are then used to fetch the correct data for the page.

- Responsive Design

The app was built with a mobile first design, and scales depending on screen size.

- Effect cleanup using a Cancel Token

Unused API requests are cancelled to prevent memory leaks.

- Optimistic Rendering

User votes are rendered before the back end request is made, this improves UX by giving the user immediate feedback on their action. Error handling is in place to revert the change if the server request is unsuccessful.

## Problems I faced

Can't perform state update on an unmounted component

I ran into issues with a memory leak in my project, caused by the fetch request being unable to render the data if the user left the page before the fetch was completed. To fix this, I had to implement an unsubscribe return function in the useEffect fetch. This fixed the issue by cancelling the request whenever a user left the page.

From this I learnt a lot about React that I wouldn’t have otherwise. I learnt how to fix memory leaks, using cancel tokens to cancel a fetch request on the user leaving a page. I have a deeper understanding of data fetching through dealing with this issue.

To handle state in this app I used useState to deal with x,y,z when they were fetched from the backend API.
Loading state, error state

For styling, the app uses vanilla css

## What I learnt

## What I would improve

My next steps on this project would be to create custom hooks to separate concerns and extract the logic into a separate file. I would add increased functionality e.g. the ability to post new articles and potentially use a CSS framework like Chakra UI to improve the styling of the app. Pagination would also improve the app.
