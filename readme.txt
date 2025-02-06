# Facebook Marketplace Backend - Installation Guide

## Clone the Repository
To set up the backend, clone the repository using the following command:

git clone https://github.com/arafatInnovasoft/facebook-marketplace-backend.git


## Backend Installation Instructions
Go to folder  from terminal using this command 
  
  cd facebook-marketplace-backend 
  
And run the following commands in the terminal:

  composer install
  cp .env.example .env
  php artisan key:generate


### Configure Database
Create a database and update the `.env` file in the `facebook-marketplace-backend` folder with your database details:

  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=YOUR_DB_NAME
  DB_USERNAME=USERNAME
  DB_PASSWORD=PASSWORD


### Run Migrations and Seeders
Execute the following commands to set up the database:

  php artisan migrate
  php artisan db:seed --class=ProductSeeder


### Start the Backend Server
Run the backend server using:

  php artisan serve


---

## Chrome Extension Setup

### Configure Facebook Credentials
Before installing the Chrome extension, update the following file with your Facebook Page ID and Facebook Page Access Token:

  facebook-marketplace-backend\fb_marketplace_cx\popup.js


### Install Chrome Extension
Follow these steps:
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** in the top right corner.
3. Click **Load unpacked** and select the `fb_marketplace_cx` folder inside `facebook-marketplace-backend`.
4. Click the extension icon to open the popup and test its functionality.
