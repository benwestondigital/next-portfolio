---
title: 'Back-End Reddit - NC News'
metaTitle: 'Back-End Reddit'
metaDesc: 'The back-end functionality for my Reddit clone built using Express / PostgreSQL.'
socialImage: images/redditback.png
date: '2022-03-31'
tags:
    - postgresql
    - express
    - node
---

- Technology: Express, Node.js, PostgreSQL
- Key Features: Thoroughly tested with Jest and Supertest, CI/CD, seeding
- What I learnt:
- Problems I faced: I was having trouble with one of my tests failing. The test logic looked good and the behaviour was inconsistent, sometimes it would pass and other times it would fail.

Unit testing, endpoint testing

I had two testing files set up – an app file for the endpoints, and a utils file for utility functions e.g. ones that would transform data before seeding. I eventually figured out that in one of my utility functions I needed a connection to the database, but I hadn’t set it up in that file. This led to inconsistent behaviour, where if I ran both test files at the same time it would work (due to the connection in the app file) and separately the utils file would fail.

From this I learnt to be careful with how I separate test functions into files, and checking which data they might need to access to run.

What I would improve: add more functionality e.g. voting on comments, post article, delete article

This is a REST API