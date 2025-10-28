# Moon Shop

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Core concepts

- Responsiveness (scales optimally to different screen sizes)
- Uses Next.js defaults as possible, including grid with Tailwind basic style definitions. (Note problems with dynamic colours, margins on flex items and breakpoints not working with flex item alignment)
- Testing of [Shadcn's UI library](https://ui.shadcn.com) as "open code" (as opposed to UI components from npm packages)
- SVG icons with [Lucide](https://lucide.dev)
- Dark mode support

## Todo

Initial work focused on API consumption and frontend responsive layout. More work is needed to properly enable product search and sorting according to the Next.js patterns, especially to play nice with the asynchronous components in the application. The product and category listings are easy, but showing the counts in the headings are a challenge in the current implementation.

## Screenshots

Home page on desktop

![Screenshot 1](/public/screenshot_home.png?raw=true "Screenshot of home page on desktop")

Home page on mobile

![Screenshot 2](/public/screenshot_mobile_home.png?raw=true "Screenshot of home page on mobile")

Product card on mobile

![Screenshot 3](/public/screenshot_mobile_product.png?raw=true "Screenshot of product on mobile")

