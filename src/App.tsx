import Navbar from "./components/Navbar";
import ApiDataItems from "./components/ApiDataItems";
import "./styles/App.css";
import { upcoming_movies, top_rated_movies } from "./modules/ApiEndpoints";

function App() {
  return (
    <>
      <Navbar />
      <ApiDataItems
        sectionHeader="UPCOMING MOVIES"
        apiEndpoint={upcoming_movies}
        numberOfRecords={4}
      />
      <ApiDataItems
        sectionHeader="TOP-RATED MOVIES"
        apiEndpoint={top_rated_movies}
        numberOfRecords={12}
      />
    </>
  );
}

export default App;

/* 
// trending_movies
adult: false
backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg"
genre_ids: (3) [18, 27, 878]
id: 933260
media_type: "movie"
original_language: "en"
original_title: "The Substance"
overview: "Have you ever dreamt of a better version of yourself? You, only better in every way. You should try this new product, it's called The Substance. IT CHANGED MY LIFE."
popularity: 2126.642
poster_path: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg"
release_date: "2024-09-07"
title: "The Substance"
video: false
vote_average: 7.3
vote_count: 1472

// trending_tv_shows
adult: false
backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg"
first_air_date: "2008-01-20"
genre_ids: (2) [18, 80]
id: 1396
media_type: "tv"
name: "Breaking Bad"
origin_country: ['US']
original_language: "en"
original_name: "Breaking Bad"
overview: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime."
popularity: 529.009
poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
vote_average: 8.915
vote_count: 14425
*/
