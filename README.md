# Next.js Country Dashboard

This is a Next.js application built with TypeScript that fetches country data from a REST API and displays it in an interactive dashboard.

## Live 
https://country-data-dashboard.vercel.app/

## Features

- Fetch country data from [Rest Countries API](https://restcountries.com/v3.1/all)
- Responsive grid layout displaying country cards with flags, names, capitals, populations, and regions
- Detailed view for each country with additional information like currencies, languages, and time zones
- Search functionality to find countries by name or capital
- Filter countries by region
- Sort countries by population (ascending and descending)
- Lazy loading for country cards
- Dark mode toggle with persistent user preference
- Server-side rendering (SSR) for initial page load
- Context API for global state management
- Unit and integration tests using React Testing Library
- e2e testing through Playwright.

## Requirements

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd country-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## API Integration

The application fetches country data from the following endpoint:
```
https://restcountries.com/v3.1/all
```

## TypeScript Interfaces

A TypeScript interface has been created to define the structure of the country data object for better type safety throughout the application.

## Testing

- Unit tests for utility functions can be found in the `/tests` directory.
- Component tests are implemented using React Testing Library.
- At least one integration test for the main page is included.

## Performance Optimization

- Lazy loading for country cards enhances performance as the user scrolls.
- Next.js Image component is used for optimized image loading.
- Memoization techniques are implemented to prevent unnecessary re-renders.

---

Enjoy exploring the country dashboard! If you have any questions, feel free to reach out.
