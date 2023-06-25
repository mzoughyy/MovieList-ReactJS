import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=ba6e285b';
const movie1 ={
    Title: 'Italian Spiderman', 
    Year: '2007', 
    imdbID: 'tt2705436', 
    Type: 'movie', 
    Poster: 'N/A'
}
const App = () => {
    const [movies,setMovies]=useState([]);
    const [SearchTerm, setSearchTerm]= useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);

    }


    useEffect(() => {
        searchMovies('spiderman');
    
    },[]);
    return (
        <div className='app'>
            <h1>Movie Island</h1>
            <div className='search'>
                <input
                placeholder='Search for movies'
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt='Search'
                onClick={() => searchMovies(SearchTerm) }
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ) )}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No Movies Found!</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;