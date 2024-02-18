
---

# MoneyMoves: Financial Services Information Platform

MoneyMoves is a web-based platform designed to provide users with detailed information on various financial products offered by Canadian banks. From chequing and savings accounts to credit cards and investment services, MoneyMoves aims to help users make informed decisions by offering a comprehensive overview of the best banking products available.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Backend Documentation](#backend-documentation)


## Project Overview

MoneyMoves offers a user-friendly interface to explore and compare financial products across various categories:

- Chequing Accounts
- Savings Accounts
- Credit Cards
- Personal Loans
- Mortgages
- Investment Services
- Financial Planning
- Insurance Products
- Online and Mobile Banking

## Features

- **Comprehensive Product Listings**: Detailed information on financial products from leading Canadian banks.
- **Comparison Tools**: Easily compare features and benefits across different banks.
- **Real-Time Updates**: Up-to-date information to reflect the latest offerings and rates.
- **User Reviews and Ratings**: Insight from actual customers to help guide your choices.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Data Storage**: JSON files for simplicity and ease of setup


---

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your system. This project requires Node.js version 12 or later. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).

### Installation

To set up the backend server for MoneyMoves, follow these steps:

1. **Clone the Repository**

   Start by cloning the project repository to your local machine. Use the following command in your terminal or command prompt, replacing `<repository-url>` with the actual URL of the project repository:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Backend Directory**

   Change your directory to the `Backend` folder within the cloned project directory:

   ```bash
   cd MoneyMoves/Backend
   ```

3. **Install Dependencies**

   Inside the `Backend` directory, install the required Node.js packages by running:

   ```bash
   npm install
   ```

   This command reads the `package.json` file and installs the necessary dependencies for the backend server.

## Running the Application

### Backend

To start the backend server, execute the following command within the `Backend` directory:

```bash
node app.js
```

Upon successfully starting, you should see a message indicating that the server is running, typically:

```plaintext
Server running on http://localhost:3000
```

You can now interact with the backend through the specified port (e.g., 3000) on your local machine.

### Frontend

To view the frontend, simply open the `index.html` file located in the `Frontend` directory with any web browser. There's no need for `npm install` or any other setup for the frontend part of the project.

## Backend Documentation

For detailed instructions on setting up and running the backend, including the available endpoints and how to interact with them, refer to the dedicated [Backend Documentation](#backend-documentation) section.

---

This adjusted guide focuses on setting up the backend, specifying that the frontend doesn't require npm installations, making it clearer for users on how to get started with both parts of the project.

---

