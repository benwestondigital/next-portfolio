---
title: 'Front-End Reddit - NC News'
metaTitle: 'Front-End Reddit'
metaDesc: 'Developed a Reddit clone front-end with React.'
socialImage: images/redditfront.png
date: '2022-03-31'
tags:
    - react
    - frontend
---

- Technology: React & React Router
- Key Features:
- What I learnt:
- Problems I faced: I ran into issues with a memory leak in my project, caused by the fetch request being unable to render the data if the user left the page before the fetch was completed. To fix this, I had to implement an unsubscribe return function in the useEffect fetch. This fixed the issue by cancelling the request whenever a user left the page.

From this I learnt a lot about React that I wouldn’t have otherwise. I learnt how to fix memory leaks, using cancel tokens to cancel a fetch request on the user leaving a page. I have a deeper understanding of data fetching through dealing with this issue.

What I would improve: split hooks out into custom hooks to separate concerns and tidy files

To handle state in this app I used useState to deal with x,y,z when they were fetched from the backend API.
Loading state, error state
I used axios to make the requests as it is more user friendly than fetch
For the user login feature, the global state is handled using react useContext
Managed the form state for comment input with useState

For styling, the app uses vanilla css