import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';  // Adjust the import path accordingly

function Moviedetail() {
  const movies = useContext(MovieContext);  // Access the movies context
  const { id } = useParams();  // Get the movie ID from the URL
  return (
    <div>

    </div>
  )
}

export default Moviedetail