---
title: 'WhereTo - Climate Travel App'
metaTitle: 'WhereTo - Climate Travel App'
metaDesc: 'Miss the weather in your favourite holiday destination? Let WhereTo help you decide on your next vacation spot. Uses Svelte / Svelte Kit.'
socialImage: images/whereto.png
date: '2022-03-31'
tags:
    - svelte
    - sveltekit
    - mongodb
    - typescript
---

WhereTo is a travel app that suggests locations with weather similar to your input destination. This was the final project for the Northcoders bootcamp, and was built as a team using agile methodology. It uses a non-relational database to store climate and city data, and external APIs to fetch coordinates, photos and weather data.

A few years ago I saw a fantastic map on Reddit that showed locations that had similar climates. At the time I was working selling wine, and found it so interesting that places like the Hunter Valley in Sydney, Australia had the same climate as Buenos Aires, Argentina. For bootcamp project pitches I immediately thought of this and knew this was a great idea that we could create.

## Hurdles

Using a meta-framework like SvelteKit offered a lot of new possibilities compared to Create React App projects like I had previously made. I found Svelte to be great and intuitive to use, but due to the lack of documentation, and my first time using a meta-framework, I had to re-write some features as I figured out better ways to approach the problem. Originally, I had made fetch requests in the file. Then, I found out about API endpoints, and moved the fetch calls into there. Finally, I learnt about page endpoints and this was the best solution for fetching data. This was a great learning experience and helped me understand how to structure a project like this in the future.

Creating the home page, in order to take the user input and turn it into coordinates I had to use the Google Autocomplete API to get a full address, and use the place id from this to call the Google Places API, fetching the coordinates needed to query the MongoDB database and grab the cities with a similar climate. Google Maps has two APIs for different purposes – one for client, and one for server side. I spent an evening getting one to work, only for me to realize I had implemented the wrong one and needed the server side API. This really helped me to learn to read the documentation and understand what I need before I start writing code.

We used TypeScript on this project because it is highly rated by so many developers. TypeScript can be overwhelming at first, causing a lot of errors (but importantly, before production!). To be able to use it properly I had to spend some extra time in completing the Codecademy TypeScript course to understand how to utilize TypeScript correctly, especially with interfaces and object typing. This was a massive help to me and I will definitely use TypeScript moving forward.

When stitching the final product together, we had some problems linking all the pages together. This was our first project as a group, so merging the branches together had a learning curve to overcome. It definitely improved my Git skills.

## Technology: Svelte, Svelte Kit, MongoDB, TypeScript

## Tech Stack and Explanation

We wanted to use technology that was highly rated by developers, so we built it with Svelte, SvelteKit, MongoDB, and written with TypeScript.
It was a steep learning curve to take on all this new technology and learn it in a short timeframe, but while undertaking the project we came to love tech, and really enjoyed building using Svelte.

- Key Features: utilizes non-relational database and external APIs
- What I learnt: it was a process to go from fetch in file → api endpoints → page endpoints and load function
- What I would improve: