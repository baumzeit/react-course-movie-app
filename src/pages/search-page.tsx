import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const apiString = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=Nobody`;

export type SearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const SearchPage = () => {
  const { search = '' } = useParams();

  const [searchTerm, setSearchTerm] = useState(search);

  const { data: results, isLoading } = useQuery<SearchResult[]>({
    queryKey: ['search', searchTerm],
    queryFn: async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      return data.Search;
    },
  });

  return (
    <div>
      <input
        placeholder="Search Movie / TV Show"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="border rounded px-2 -mx-2 py-2 mb-3 w-full"
      ></input>
      <ul>
        {isLoading && 'Data is loading...'}
        {results?.map((d) => (
          <li key={d.imdbID}>{d.Title}</li>
        ))}
      </ul>
    </div>
  );
};

// Fetch data using useEffect and fetch

// const [results, setResults] = useState<SearchResult[]>([]);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   const searchMovies = async () => {
//     setLoading(true);
//     const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`);
//     const data = await response.json();
//     setLoading(false);
//     setResults(data.Search);
//   };
//   searchMovies();
// }, [searchTerm]);
