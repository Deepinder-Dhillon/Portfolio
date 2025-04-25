
# Personal Portfolio

[![Live](https://img.shields.io/badge/LIVE-DeepinderDhillon.com-2ea44f?style=for-the-badge)](https://deepinderdhillon.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/Deepinder-Dhillon/Portfolio) [![Node Version](https://img.shields.io/badge/Node-19%2B-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)


This portfolio showcases my work as a software developer, highlighting a collection of full-stack projects, mobile apps, and open source contributions. Built with performance and accessibility in mind, the site emphasizes responsive design, smooth animations, and clean navigation.

<br>

<p align="center">
  <img src="https://github.com/user-attachments/assets/b5dab7f0-ceff-4b3b-92f5-20a738e8e093" width="50%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/51564054-75f5-44b4-91a8-39ffcb6e791a" width="50%" />
</p>




## Features

-   Responsive design that works across all devices
-   Dark/Light mode toggle based on user preferences
-   Project showcase with detailed descriptions
-   Integrated contact form with email notifications
-   Optimized for fast loading and performance

## Technology Stack


![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white) 

![Remix](https://img.shields.io/badge/Remix-000000?style=for-the-badge&logo=remix&logoColor=white)  
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white) ![AWS SES](https://img.shields.io/badge/AWS_SES-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  




## Setup

**Clone the repo**
    ```
    git clone
    ```
    
 **Install dependencies**
    ```
    npm install
    ```
    
Create a `.dev.vars` file in the root directory with the following content:
    
    ENVIRONMENT=development
    EMAIL=you@website.com
    FROM_EMAIL=portfolio-site@website.com  
    AWS_ACCESS_KEY_ID=your_access_key
    AWS_SECRET_ACCESS_KEY=your_secret_key
    SESSION_SECRET=your_session_secret
 
**Start the development server**
    ```
    npm run dev
    ```
    

## Deployment

To deploy this project on Cloudflare:

- Connect your GitHub repository to Cloudflare Pages
- Set the build command: `npm run build`
- Set the build output directory: `build/client`
- Add the following environment variables in Cloudflare Pages settings:
    
    ```
    ENVIRONMENT=production
    EMAIL=you@website.com
    FROM_EMAIL=portfolio-site@website.com
    AWS_ACCESS_KEY_ID=your_access_key
    AWS_SECRET_ACCESS_KEY=your_secret_key  
    SESSION_SECRET=your_session_secret
    ```
    
    Replace the placeholder values with your actual production credentials.

## License 
MIT
<br>
Feel free to look around and let me know if you have any questions.
<br>
I'm always open to ideas and collaboration opportunities!
