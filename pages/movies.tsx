import { NextPage } from "next";
import clientPromise from "../lib/mongodb";

interface Data {
  _id: string;
  hola: string;
}
export default function Top({ movies }: { movies: Data[] }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h2>{movie.hola}</h2>
            <h2>{movie._id}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/test");
  const posts = await res.json();

  return {
    props: {
      movies: posts,
    },
  };
}
