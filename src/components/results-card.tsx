export type SearchResult = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type MovieCardProps = {
  result: SearchResult;
};

export const MovieCard = ({ result }: MovieCardProps) => {
  return <div>Movie Card</div>;
};
