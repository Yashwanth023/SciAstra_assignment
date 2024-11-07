# SciAstra Blog and Course Platform

This project is a dynamic blog and course platform designed for SciAstra, providing a responsive user interface, a blog management system, and a course purchase flow with secure payment integration. This README details the setup, features, and technologies used to ensure a smooth user experience for both users and administrators.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)

## Project Overview

The SciAstra platform offers a blog management system for administrators and a dynamic homepage displaying real-time discounted courses for users. Additionally, the platform provides a secure course purchase flow, including a dummy payment page and multi-option payment gateway integration.

## Features

- **Responsive Frontend**: Built with HTML, CSS, and JavaScript for a smooth user experience on all devices.
- **Dynamic Homepage**: Displays real-time discounted courses to enhance visibility and engagement.
- **Blog Management**: Allows admins to upload, manage, and schedule blog posts for future publication.
- **Course Purchase Flow**: Enables users to browse and select courses with a flow that includes a dummy payment page.
- **Backend Integration**: Real-time updates between frontend and backend using MySQL for database management.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (or preferred backend framework)
- **Database**: MySQL
- **Payment Integration**: Dummy payment page and payment options (credit card, debit card)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Yashwanth023/SciAstra_assignment/.git
   cd sciAstra-platform
   ```

2. **Install Dependencies**:
  ```bash
   npm install
  ```

 ** Set Up Environment Variables: Create a .env file **
```bash
 DB_HOST=localhost
 DB_USER=root
 DB_PASSWORD=yourpassword
 DB_NAME=sciAstra
```

 ** Run the Server: **

  ```bash
    npm start
  ```
