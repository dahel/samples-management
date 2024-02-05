This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> [!NOTE]  
> This application demo is available [here](https://samples-management.vercel.app/)

## Running application locally

### System requirements:
 - nodejs version `v20.10.0`

> [!IMPORTANT]  
> This application uses mongodb (just for storing created test samples). In case you want to run this application locally you need to define additional environemnt variable in `.env.local `file (in the root of the project). I've sent you the one line content that has to be appended to that file, simply paste it to `.env.local`:
>```
>REST_API_URL=http://127.0.0.1:3000/api
>[here paste the value from the email]
>```


After cloning the respository, install dependencies:
```bash
npm install
# or
yarn install
```
and to run it locally:

```bash
npm run dev
# or
yarn dev
```

can also run production build locally:


```bash
npm run build
npm run start
# or
yarn build
yarn start
```
to run unit tests:


```bash
npm run test
# or
yarn test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some additional assumptions

I've made a couple of additional assumptions based on the task requirements:
 - Every patient can be located in one of four districts (two in Poznan, two in Warsaw) - `src/database/patientsLocations.js`
 - Every patient can be hired in one of two companies (Company A, Company B) - `src/database/patientsCompanies.js`
 - There are two predefined vision defects than can be assigned to every patient (Myopia and Astigmatism) - `src/database/visionDefects.js`
 - There are two laboratories (based in Poznań) that store the test samples, each of them contains two rooms, every room per available district - `src/database/laboratories.js`
 - There are three age ranges that every patient will be assigned to (0-12, 13-17, 18-120)
- There is limited number of Sample Locations (racks) that stores samples (test tubes). There are 48 Sample Locations that represent combinations of: patient's age, patient's disctrict, patient's company and patient's vision defect

The goal of the system is to provide a way to create test sample and to automatically assign it to one of the Sample Storages.

## Functionality overview
  Three pages:
   - **Add Sample** - form for creating test sample
   - **Sample Search** - provides a way to get the information about the Sample Storage the test sample is located
   - **Sample Storages** - list of all Sample Storages with storage conditions overview and amount of assigned samples

## A word on technology stack
 - Next.js (with typescript) - as I wanted to mimic the real life scenario of the system and Next.js provides a way for creating REST api, and it's a cool tool in general
 - Tailwind for styling - simply like it
 - [DaisyUI](https://daisyui.com/) - just wanted to check it
 - mongodb - that's just to store test samples, I found it a bit hard to keep in the memory with Next.js. And again - Real Life Scenario 👀
 - @testing-library - for unit tests, kind of a standard currently

 ## Project overview
  - REST API implemented with Next.js's API Routes
  - database abstraction with some hardcoded entities (`src/database/**`)
  - Unit tests - just a tad of it, covering the Sample Form logic
  - eslint + prettier for code quality

 ## What would be nice to have
  - creating samples in a batch
  - error handling (ErrorBoundaries, api errors)
  - pagination of Samples Storages list
  - more unit tests for sure + some coverage
  - e2e tests would be nice
  - a bit of code quality checks with git hooks
  - ...and more
