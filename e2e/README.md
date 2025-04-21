# AstroCRM Test Automation

This repository contains automated test for the **AstroCRM** platform. The tests are written using **Playwright** and cover various functionalities such as login, chat interaction, and script group creation.

## Project Setup

### Prerequisites

Before running the tests, ensure that you have the following installed:

- **Node.js v20.18.1** (required version)
- **npm v6.14.18** (required version)

1. **Clone the repository**:

Clone the project to your local machine:
git clone https://github.com/Broksus/astrocrm-test-automation.git
```bash
cd astrocrm-test-automation
```
and after 
```bash
cd e2e
```

#### 2. **Install Node.js and npm**

If you don't have **Node.js** and **npm** installed or need to update them, you can do so with **nvm** (Node Version Manager):

1. **Install `nvm` (if you don't have it)**:
   - On macOS or Linux:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     ```
     (Follow the instructions to complete the installation)

   - On Windows, follow the instructions here: https://github.com/coreybutler/nvm-windows

3. **Install Node.js v20.18.1**:
```bash
nvm install 20.18.1
```

Use the installed version:
```bash
nvm use 20.18.1
```

Verify the versions:
node -v   # Should show v20.18.1
npm -v    # Should show 6.14.18

4. **Install dependencies**:
```bash
npm install @playwright/test --save-dev
```

5. **Running the Tests**:
To run the tests in headless mode (without opening the browser window), use the following command:
```bash
npx playwright test
```

Run tests in UI mode:
```bash
npx playwright test --ui
```