import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          alt={result.title || result.name}
          style={{ maxWidth: "100%", height: "250px" }}
        />
        <div className="p-2">
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p>
            {result.media_type && `${result.media_type} • `}{" "}
            {result.release_date || result.first_air_date} •{" "}
            <span className="text-amber-500">
              {result.vote_average.toFixed(2)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
