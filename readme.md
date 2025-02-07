# TaskFlow

TaskFlow is a task management application built with Node.js and Express, using Sequelize ORM to interact with a PostgreSQL database (Supabase). It provides features to manage tasks, set deadlines, and track progress.

## Prerequisites

* Node.js (version 14 or higher)
* PostgreSQL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahil-raj/TaskFlow.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TaskFlow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up your PostgreSQL database and configure the database URL in `.env` file taking refrence to .env.local.

5. Build the server
    ```bash
    npm run build
    ```

6. Run the server:
   ```bash
   npm run start
   ```

The application will be running at http://localhost:3000.

## Endpoints

![Endpoints](https://zmxnqkbujmjwilcmqawb.supabase.co/storage/v1/object/public/testmybuc//Screenshot%202025-02-07%20at%206.33.04%20AM.png)


## License

This project is licensed under the MIT License.

## API can be slow initially sometimes as its is deployed on render
