---
title: 'The begginer guide Next.js'
pubDate: 2024-03-02
author: 'Bartosz Sobina'
image: 'image1.png'
tags: ['tech', 'javascript', 'next.js']
slug: begginer-guide-to-next-js
---


# A Beginner's Guide to Next.js


## **1. Introduction to Next.js**
<hr/>

Next.js is a powerful React framework that simplifies the process of building server-rendered applications. It provides a comprehensive solution for building modern web applications, offering features like server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). In this guide, we'll explore the fundamentals of Next.js and how to get started with your first project.

## **2. Getting Started**
<hr/>

Before diving into the world of Next.js development, you'll need to set up your development environment and create your first Next.js project. This section will guide you through the initial steps to get up and running.

- **Setting Up Your Development Environment:**
  Before you begin coding with Next.js, ensure you have Node.js installed on your machine. Node.js will allow you to run JavaScript code outside of a web browser. You can download and install Node.js from the official website.

- **Creating Your First Next.js Project:**
  Once Node.js is installed, you can use npm or yarn to create a new Next.js project. Open your terminal and run the following commands:

  ```bash

    npx create-next-app my-next-app


  ```

  This command will bootstrap a new Next.js project named "my-next-app" in a directory of the same name. After the project is created, navigate into the project directory:

  ```bash

    cd my-next-app


  ```

  You're now ready to start building your Next.js application!

Next.js provides a straightforward setup process, allowing you to focus on developing your application rather than configuring your environment. With your project created, you're ready to explore the features and capabilities of Next.js. Let's move on to understanding pages and routing.

## **3. Pages and File Based Routing**
<hr/>

In Next.js, folders are the building blocks of your application, each representing a unique URL route. This section will delve into the concept of folders based routing in Next.js.

- **Understanding the File System Routing:**
  One of the key features of Next.js is its folders system-based routing system. This means that the folder structure of your pages directory directly corresponds to the URL structure of your application. For example:

  ```

    .  
    └── app/
        ├── page.tsx          # This represent / 
        ├── account/        
        │   ├── friends/
        │   │   └── page.tsx  # This represent /account/friends
        │   └── settings/
        │       └── page.tsx  # This represent /account/settings
        └── profile/
            └── [profileId]/
                └── page.tsx


  ```

  With this structure, creating new pages and routes is as simple as adding new page file to the directory. Next.js handles the routing automatically based on the folders names and structure.

- **Creating Dynamic Routes:**
  Next.js allows you to create dynamic routes by using bracket notation in your folder names. For example, if you have a page that needs to handle dynamic content, such as individual profile page, you can create a folder with square brackets to represent dynamic segments in the URL and page.tsx inside that folder:

  ```

    └── profile/
        └── [profileId]/
            └── page.tsx


  ```

  Inside this file, you can access the dynamic segment (`profileId` in this case) through the `props` of the page.tsx component.

  ```javascript

    // profile/[profileId]/page.tsx

    import { useRouter } from 'next/router';

    function ProfilePage({ params }) {
        const { profileId } = params;
        return <h1>Profile id: {profileId}</h1>;
    }

    export default ProfilePage;


  ```

This allows you to create dynamic, SEO-friendly URLs without the need for complex routing configurations.


## **4. API Routes:**
<hr/>

Next.js provides a convenient way to create API endpoints within your application through API routes. API routes allow you to handle incoming requests and send responses directly from your Next.js application, enabling server-side logic and data processing.

- **Creating API Endpoints with Next.js:**
  - API routes are defined as JavaScript files inside the `app/api` directory of your Next.js project.
  - Each file in the `api` directory represents a separate API endpoint, with the filename determining the endpoint URL.
  - You can define various HTTP methods such as GET, POST, PUT, DELETE, etc., within each API route file to handle different types of requests.</br>
  - **Example**:
    ```javascript

        // app/api/hello.js
        export default function handler(req, res) {
            res.status(200).json({ message: 'Hello, Next.js API!' });
        }


    ```



### - **Handling Requests and Responses:**
  - In each API route file, you define a default export function (usually named `handler`) that takes two parameters: `req` (the incoming request object) and `res` (the response object).
  - Inside the `handler` function, you can access request data, such as query parameters or request body, and perform necessary operations.
  - Finally, you use the `res` object to send the response back to the client, typically with a status code and optional JSON data.

- **Example Use Cases:**
  - API routes can be used for various purposes, including:
    - Fetching data from external APIs and returning it to the client.

    ```javascript

        // app/api/data-fetching.ts
        import { NextApiRequest, NextApiResponse } from 'next';

        export default async function handler(req: NextApiRequest, res: NextApiResponse) {
            try {
                // Fetch data from an external API
                const response = await fetch('https://api.example.com/data');
                const data = await response.json();

                // Return data to the client
                res.status(200).json(data);
            } catch (error) {
                // Handle errors
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }


    ```

    - Handling form submissions and processing data on the server.
    - Implementing authentication and authorization logic.
    - Performing database operations and CRUD (Create, Read, Update, Delete) actions.


Oczywiście, oto przykładowy fragment artykułu, który demonstruje wykorzystanie Server Actions w aplikacji Next.js 14:

---

## **5. Handling Form Submissions with Server Actions**

Let's consider a scenario where we need to handle form submissions in a Next.js 14 application using Server Actions. We'll create a simple form for adding new users, and upon submission, we'll process the form data on the server.

First, let's define our Server Action for creating a new user:

```jsx

    // app/actions.ts
    'use server'

    export async function createUser(formData: FormData) {
        try {
            // Process form data to create a new user
            const newUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            // Other fields...
            };

            // Perform database operations to store the new user
            // Example: await database.insert(newUser);

            // Return success message
            return { message: 'User created successfully' };
        } catch (error) {
            // Handle errors
            return { error: 'Failed to create user' };
        }
    }


```

Next, let's create a form component in our application:

```jsx

    // app/components/UserForm.tsx
    import { createUser } from '@/app/actions';

    export function UserForm() {
        return (
            <form onSubmit={createUser}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <button type="submit">Submit</button>
            </form>
        );
    }


```

In this example, when the form is submitted, the `createUser` Server Action is run asynchronously. Upon successful creation of the user, the server returns a success message which is logged to the console. If an error occurs during the process, it's caught and logged as well.

Finally, we can use this `UserForm` component wherever we need to render the form in our application:

```jsx

    // app/pages/HomePage.tsx
    import { UserForm } from '@/app/components/UserForm';

    export default function HomePage() {
        return (
            <div>
                <h1>Welcome to our application</h1>
                <UserForm />
            </div>
        );
    }


```

