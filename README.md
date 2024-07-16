# Netflix-GPT

- Create React App
- Configured TailwindCSS
- Routing of App
- Header
- Login form
- SignIn and SignUp form
- Form Validation
- useRef Hooks uses
- Firebase Setup
- Deploying our app to production
- Create Sign Up user Account in Firebase
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- Fetch from TMDB Movies
- BugFix: Sign up user displayName and Profile picture update
- BugFix: if the user is not logged in Redirect / Browse to Login Page and vice-versa
- Unsubscribed to onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API && Create an app && get access token
- Get Data from TMDB now playing movies list API
- Custom Hook now Playing Movies
- Create movieSlice
- Update store with movies Data
- Planning for MainContainer && Secondary Container
- Fetch data for tailer video
- Update store with Trailer Video Data
- Embedded the Youtube Video and make it autoplay and mute
- Tailwind Classes to make MainContainer look awsome
- Build Secondary Component
- Build Movie List
- Build Movies Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind css
- usePopularMovies custom hooks
- useTopRatedMovies && useUpcomingMovies custom hooks
- GPT Search feature
- Create GPT Search Bar
- Multi-Lang feature in our App
- create .env to secure the API key


# Tailwind setup

- npm install -D tailwindcss npx tailwindcss init

- tailwind.config.js file: /** @type {import('tailwindcss').Config} / module.exports = { content: ["./src/**/.{html,js}"], theme: { extend: {}, }, plugins: [], }

- App.css File: @tailwind base; @tailwind components; @tailwind utilities;


# Namaste-Netflix-GPT :

Below Implemented point

- React Router
- Build Header
- Login form
- Signin and SignUp form
- form validations
- useRef Hooks with validation
- Firebase Setup
- Deploying app in firebase for production
- Create SignUp user account in firebase
- Create SignUp User in firebase
- Implemented singin user API
- Created a redux store with user slice
- Implemented sign out
- Update profile

# BugFixes :

- Sign Up User DisplayName and profile picture Update
- if user not login Redirect user to login page and vice versa
- Unsubscribed to the onAuthStateChanged callback
- All hardcoded values add in constant file.

# Lets building our application : 

- Fetch APi from TMDB Movie
- Geta data from TMDB now playing movies list API
- craete movieSlice and put inside moview data
- Creating a custome hooks for extract the code this ia good way
- Update store with movies data

# Plannig to Bulding the Browse page : 

- Frist design Structue of the browse page mainContainer - Videobackground - VideoTitle SecondaryContainer - Movielist * n - cards * n

    - Fetch data for traile videos
    - Create custome hook for traile video
    - Update store with trailer video data
    - Embedded the youtube video and make it autoplay and mute
    - tailwind css added for main container look awesome
    - Build the secondary Componnet
    - Show the movie lists
    - Build Movie card
    - Movie image CDN URL build api
    - made the browse page amazing with tailwind css
    - Suggestion movie with sliderleftt-right vice-versa
    - Get GPT Searchbar
    - **Multilanguage features in our app [Bonus Part]
    - Create Openai api key
    - npm install --save openai

  
# Deployment setup firebase :

Create project with firebase and hosting also : https://console.firebase.google.com/u/0/project/namastenetflixgpt/overview

  - install firebase : 'npm i firebase'
  - install firebase CLI : 'npm i -g firebase-tools'
  - firebase login : 'firebase login'
  - Initialize firebase : 'firebase init' then select hosting
  - 'npm run build' fro build folder
  - Deploy command : 'firebase deploy'



# Features

- Login/Sign Up

  - Sign In / Sign Up Form
  - Redirect to Browser Page

- Browser (After Authentication)

  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N

- NetflixGPT
  - Search bar
  - Movie Suggestions
