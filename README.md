# SAC Website

Welcome to the SAC Website repository! This project consists of both frontend and backend codebases for your Student Association Committee website.

## Frontend

The frontend of the SAC website is built using React and styled with Tailwind CSS. It provides a user-friendly interface for students to interact with various features and information related to the Student Association Committee.

### Frontend Project Structure

```
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── vite.svg
├── App.css
├── App.jsx
│ ├── Adminbar.jsx
│ ├── Adminregister.jsx
│ ├── Dashbord.jsx
│ ├── Eventedit.jsx
│ ├── Eventspage.jsx
│ ├── Gallerypage.jsx
│ ├── Memberedit.jsx
│ ├── Memberspage.jsx
│ ├── Newspage.jsx
│ ├── Newswedit.jsx
│ ├── AdminLogin.jsx
│ ├── Appbar.jsx
│ ├── Eventcard.jsx
│ ├── Footer.jsx
│ ├── Gallery.jsx
│ ├── Landing.jsx
│ ├── Membercard.jsx
│ ├── News.jsx
│ ├── UserEvents.jsx
│ └── UserNews.jsx
├── react.svg
├── index.css
├── main.jsx
├── tailwind.config.js
└── vite.config.js
```
## Backend

The backend of the SAC website is built with MongoDB and Node.js. It provides the necessary APIs and functionalities to manage various aspects of the website, such as authentication, database operations, and CRUD operations for events, gallery, members, and news.

### Backend Project Structure

```
├── index.js
├── package-lock.json
├── package.json
├── auth.js
├── db.js
├── midleware.js
├── admin.js
├── events.js
├── gallery.js
├── members.js
└── news.js

```

## Getting Started

1. Clone this repository.
2. Navigate to the frontend directory and install frontend dependencies using `npm install`.
3. Start the frontend development server using `npm run dev`.
4. Navigate to the backend directory and install backend dependencies using `npm install`.
5. Start the backend server using `node index.js`.
6. You're ready to start working on your SAC website!

## Additional Information

- Feel free to explore and modify the frontend and backend code to suit your requirements.
- Make sure to configure MongoDB connection details in `db.js` for the backend.
- For authentication, you can customize the logic in `auth.js`.
- Update the API endpoints and database operations as needed in respective files (`events.js`, `gallery.js`, `members.js`, `news.js`).

