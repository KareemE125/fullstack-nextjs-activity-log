# Next.js Project
This repository contains a Fullstack Next.js Activity Log project that utilizes ▲ Next.js 14.2.4, TypeScript, SWR, TailwindCSS, Prisma, Railway Postgres.

## Visit Here 👉 https://fullstack-nextjs-activity-log.vercel.app/

## Features
- **Next.js 14**: The latest version of Next.js, offering enhanced performance and new features.
- **SWR**: React hook for data fetching to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Prisma**: Modern database toolkit and ORM for TypeScript and Node.js.
- **Railway Postgres**: Managed PostgreSQL database provided by Railway.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **App Directory**: Organized structure for managing components and pages.
- etc...

## Description
    Events contain information relevant to actions taken by users in the application. 
    For example, when a user logs in, we use the system to create a new login_succeeded event.
    We can add information about the actor, action, target, date, etc.

    We can list, filter and search the acvtivty logs and go live for live view of ongoing logs, as well can create some :)

## Screenshot
  ![screencapture-localhost-3000-activity-2024-06-27-18_09_09](https://github.com/KareemE125/fullstack-nextjs-activity-log/assets/61433385/ba799d11-8539-4be5-b4f0-bf4675d7b72b)


## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js (v14.x or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KareemE125/fullstack-nextjs-activity-log.git
   cd fullstack-nextjs-activity-log
   
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install

3. Environment Variables
    1. Create a `.env` file in the root directory and add the following environment variables:
    2. Simply go to: `https://railway.app`, then create new postgres project
    3. Finally add this line in the `.evn` file:
      ```bash
      DATABASE_URL=postgresql://username:password@hostname:port/database
      # Replace username, password, hostname, port, and database with your Railway PostgreSQL credentials.
  
4. Database Setup
    1. Push the Prisma schema to the database:
        ```bash
        npx prisma db push
        
    2. Generate Prisma client:
        ```bash
        npx prisma generate
5. Running the Development Server
    1. Start the development server:
        ```bash
        npm run dev
        # or
        yarn dev
    2. Open http://localhost:3000 with your browser to see the result.


## Contact
For any inquiries or support, please contact kareemezzat.125@example.com.
    

________________________________________________________________________________________________________________________________________________________________

# Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
