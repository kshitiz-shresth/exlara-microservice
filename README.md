# Microservices Project Documentation

This repository contains two folders: `api-express-service` for the Express.js API and `auth-laravel-service` for the Laravel Auth API.

## Laravel Auth API Setup

### 1. Install Dependencies

Navigate to the `auth-laravel-service` directory and install dependencies using Composer:

```bash
cd auth-laravel-service
composer install
```

### 2. Setup Database

Configure your `.env` file with database credentials and run migrations to create the necessary tables:

```bash
php artisan migrate
```

### 3. Install Passport

Install Laravel Passport for API authentication:

```bash
php artisan passport:install
```

### 4. Start the Server

Run the Laravel development server:

```bash
php artisan serve
```

## Express.js API Setup

### 1. Install Dependencies

Navigate to the `api-express-service` directory and install dependencies using npm:

```bash
cd api-express-service
npm install
```

### 2. Start the Server

Run the Express.js development server:

```bash
npm start
```

## Registering and Logging in

### Register a User

Send a POST request to the `/api/register` endpoint of the Laravel Auth API with the following payload:

```json
{
   "name": "Your Name",
   "email": "your@email.com",
   "password": "yourpassword"
}
```

### Login

Send a POST request to the `/api/login` endpoint of the Laravel Auth API with the following payload:

```json
{
   "email": "your@email.com",
   "password": "yourpassword"
}
```

Here is a postman documentation: https://documenter.getpostman.com/view/11519355/2sA35HXM6F
[I suggest to use email as in postman to get expected marksheets and grade]

## Checking User's Marksheet and Pass/Fail Status from Express.js API

### Check User's Marksheet

Send a GET request to the `/api/get-marksheets` endpoint of the Express.js API. Make sure to include the appropriate authentication headers received after logging in.

### Check Pass/Fail Status

Send a GET request to the `/api/check-pass-fail` endpoint of the Express.js API. Make sure to include the appropriate authentication headers received after logging in.
