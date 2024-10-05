# Playwright Automation README

Welcome to the Playwright Automation project! This repository contains automated tests for web applications using Playwright. Follow the instructions below to set up your environment and run the tests.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

## Environment Variables

To run the tests that require authentication, you need to create a `.env` file in the root directory of the project with the following content:

```plaintext
EMAIL=your-email@example.com
PASSWORD=your-password
```

Make sure to replace `your-email@example.com` and `your-password` with your actual email and password.

## Running Tests

### UI Mode

To run the tests in UI mode, execute the following command:

```bash
npx playwright test --ui
```

This will launch the Playwright Test Runner in UI mode, allowing you to visualize the tests as they run.

## Running Tests Headlessly




If you prefer to run the tests in headless mode (without a browser UI), simply use:

```bash
npx playwright test
```


Reported bug for manual TEST :
https://docs.google.com/spreadsheets/d/1uPHd3303TG0iz7EyR6uNC0RVGOOFmEfbkSexBCDEHh8/edit?usp=sharing  
