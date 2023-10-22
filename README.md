https://linkedin-clone-358df.web.app/


# LinkedIn Clone

This is a LinkedIn clone built using React, Redux, Firebase, and Material UI.

## Setup

1. Install Node.js and npm if you haven't already. You can download them from [here](https://nodejs.org/en/download/).
2. Clone the repository to your local machine.
3. Navigate to the project directory and install the required npm packages:
```bash
npm install
```
4. Set up Firebase:
   - Go to the [Firebase website](https://firebase.google.com/) and sign up if you haven't already.
   - Create a new project.
   - Enable the Firestore Database and Authentication in the Firebase console.
   - Add a new web app to your Firebase project and copy the Firebase config object.

5. Create a `.env` file in your project root and add your Firebase config object:
```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Usage

1. Run the application:
```bash
npm start
```
2. Open your web browser and navigate to `http://localhost:3000` to see the application running.

