## Overview

Your objective is to create a React application that fetches posts from the posts API and displays them on the screen. For each post, you should also fetch user details from the User API to display the user's name along with the post title.

Also, you have to implement a search functionality to find any post(s).

## Types

```
Posts API Response
id: number
title: string
user_id: number
```

```
Users API Response
id: number
name: string
avatar: string
```

## Testing

Write appropriate unit tests to ensure the functionality and correctness of your React components and data fetching logic. This projects includes React Testing Library, Vitest and MSW. (But feel free to use any other tools if you like)

## Getting Started

Clone this repository.

Install dependencies using `npm install`

Start the development server using `npm run server`

Start the UI using `npm run dev`

---

API Documentation:

To get all users
http://localhost:3001/users

To get single user
http://localhost:3001/users/1

To get multiple users by Id
http://localhost:3001/users?id=1&id=2

To search posts by string
http://localhost:3001/posts?title_like=<string>
