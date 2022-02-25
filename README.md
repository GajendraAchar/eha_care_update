This is an electronic medical record application [EHA CARE](https://ehacare.eha.ng/) built using [Nextjs](https://nextjs.org/) framework
test
## Getting Started

Pre-requisite
- [NodeJs](https://nodejs.org/en/download/) >= 16

## Steps to get project running locally

- Clone the project repository ``` git clone https://github.com/eHealthAfrica/eha_care.git ```
- Cd into frontend and install all packages --> ```cd frontend && npm install```
- After installation is complete, run ```npm run dev```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Steps to deploy project using Docker

- Clone the project repository ``` git clone https://github.com/eHealthAfrica/eha_care.git ```
- Run the command to build and deploy the application ``` docker-compose up -d ```
- Once the container is up and running,  Open [http://localhost:3000](http://localhost:3000) with your browser to access the application.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## End-To-End Tests
### Start Cypress

```shell
npm run cy:open
```

### Run e2e tests

```shell
npm run test:e2e
```

### Start server and e2e tests

```shell
npm run test:e2e-ci
```

## Run Stylelint
```shell
npx stylelint "**/*.scss"
```

## Code Coverage
```shell
npm run test:coverage
```
