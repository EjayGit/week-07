# Week 7 Assignment

## Requirements

    🎯 Create a client using React.
    Completed
    🎯 Use Express to create your server, using both GET and POST endpoints.
    Completed
    🎯 Build a React form for users to create posts.
    Completed
    🎯 Create multiple pages using React Router.
    Completed
    🎯 Design a database schema, and seed the database with some realistic data.
    Completed
    🎯 Use SQL to retrieve posts from the database in your Express server.
    Completed
    🎯 Display all posts using .map().
    Completed - got a misleading error saying f.map is not a function, where the issue was a name variation between client and server when calling the /readblogs route.
    🎯 Use an interval and useEffect() to poll your database.
    Completed


## Stretch Tasks

    🏹 Create dynamic pages using react-router.
    Not tried - time
    🏹 Use react-router to create a dedicated route for the categories
        For example, /posts/:categoryName.
    Not tried - time
    🏹 Allow users to delete posts.
    Completed
    🏹 Add ‘like’ functionality on posts.
    Completed - I found this challengeing to manoeuvring the id value around the stack at first. I had also previously found a way to initialise the data value to 0 in the database. I could not find a way to do this using React, but found that the database was able to do this itself, which solved the problem.
    🏹 Create additional SQL queries to show filtered posts.
    Not tried - time

## Reflection


- Requesting feedback about a specific part of your submission.

I would like to know how to initialise the like score to 0 using code, rather than the database. Is it just the same as in js as before and I haven't extracted that information well enough?

- What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

I used the help of previou assignments, and for some debugging towards the end, I used ChatGPT. This is how I found the name differentiation between /readblogs and /readBLogs.

- What errors or bugs did you encounter while completing your assignment? How did you solve them?

As previous answer.

- What went really well and what could have gone better?

I think the functionality went well. I am very pleased that it works / functions correctly. I think the css could be better, but I feel this is the case for all my assignments. I think that the use of tailwindcss could be better, but then I did attempt to use it and it failed to produce the same results that normal css did, when using a tailwind converter. It was taking long enough to convert the css to tailwind, let alone debug tailwind as well.