
## Technologies Used

NetflixGPT is built using a combination of modern web technologies and services:

React: NetflixGPT is primarily built using React, a popular JavaScript library for building user interfaces.

Tailwind CSS: We have used Tailwind CSS for efficient and responsive styling, ensuring a seamless user experience across devices.

Redux Toolkit: Redux Toolkit helps manage the application's state, making it easier to handle complex data flows and state changes.

Firebase: Firebase is used for user authentication, ensuring secure access to personalized recommendations and conversation history.

OpenAI GPT-3: The heart of NetflixGPT is powered by OpenAI's GPT-3, which enables natural language understanding and conversation generation.


# Netflix
- Create react app
- setUp for Tailwind css
- Routing
- Header
- LoginForm
     - Validation
- useRef Hook     
- Firebase setup
     - Deploying our app to production 
- Create Singup user 
- Implemented Sign In user API
- Created Redux store with userSlice  
- update profiles
- BugFix: If the user is signout redirect /browser to Login page and vice-versa 
- Unsubscibed to the onAuthSatechange callback
- Add hardcoded values to the constant file
- Made an API call from TMDB
- custom Hooks
- created movieSlice
- updated the store
- Embedded the youtube video and added somme tailwind css to Maincontainer
- Secoundary container
     - MovieList - (popularList)      
        - MovieCard*N
     - MovieList - NowPlaying
     - MovieList - Trending
     - MovieList - upcoming movies
- Custom Hooks  
- GPT search feature   
- ADDED MULti-Language feature



# Features
- Login/ Sign up
   - Sign in / Sign up Form
   - redirect to Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
         - Tailer in background
         - Title and discription
         - MovieSuggestions
              - Movie List * N;
 - NetflixGpt
      - Search bar
      - Movie suggestions             