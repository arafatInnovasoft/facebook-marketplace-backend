# Chrome Extension with Backend - Installation Guide

## Backend Installation (Laravel)

### Step 1: Extract the Zip File
Unzip the `chrome_extension_with_backend.zip` file to access the backend and Chrome extension files.

### Step 2: Configure the Database
1. Create a new MySQL database.
2. Open the `.env` file located inside the `facebook-marketplace-backend` folder.
3. Update the database configurations:
   
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=YOUR_DB_NAME
   DB_USERNAME=USERNAME
   DB_PASSWORD=PASSWORD
   

### Step 3: Install Dependencies
Open a terminal inside the `facebook-marketplace-backend` folder and run:
  composer install

### Step 4: Run Migrations and Seed Data
Run the following commands to set up the database:
  php artisan migrate
  php artisan db:seed --class=ProductSeeder


### Step 5: Start the Backend Server
To start the backend server, run:
  php artisan serve

The backend will now be accessible.

---

## Chrome Extension Installation

### Step 1: Configure Facebook Marketplace Integration
1. Open the `fb_marketplace_cx` folder.
2. Edit the `popup.js` file.
3. Update the following values with your Facebook Page ID and Access Token:
   const pageId = "YOUR_FACEBOOK_PAGE_ID";
   const accessToken = "YOUR_FACEBOOK_PAGE_ACCESS_TOKEN";
   

### Step 2: Load the Chrome Extension
1. Open Google Chrome and navigate to: chrome://extensions/
2. Enable **Developer mode** (toggle in the top right corner).
3. Click **Load unpacked**.
4. Select the `fb_marketplace_cx` folder.

### Step 3: Test the Extension
1. Click on the extension icon in Chrome.
2. Open the popup and verify the functionality.

