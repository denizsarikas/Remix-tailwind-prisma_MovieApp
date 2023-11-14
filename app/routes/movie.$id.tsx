import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjI1OTA1ZWE5NTQ1MjI4ZTZiOGNmNDJkYjg2Y2YwMiIsInN1YiI6IjY1NTJhN2E5ZDRmZTA0MDBmZTA0YTZhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNSk2C-EFwS-8Q5nM5OFFBmYpcCbWf8unwMYm6dzabw",
      },
    }
  );
  return json(await url.json());
}

export default function MovieId() {
  const data = useLoaderData();

  console.log("film detayı -> ", data);

  return (
    <div className="min-h-screen p-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt={data.title}
        className="h-[40vh] object-cover w-full rounded-lg"
      />
      <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>
      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium">
          <h2>
            <span className="underline">Homepage:</span>{" "}
            <Link to={data.homepage} target="_blank">
              Filmin ana sayfasına gitmek için tıkla
            </Link>
          </h2>

          <h2>
            <span className="underline">Original Language:</span>
            {data.original_language}
          </h2>

          <p>
            <span className="underline">Overview:</span>
            {data.overview}
          </p>
          <p>
            <span className="underline">Release Date:</span>
            {data.release_date}
          </p>
        </div>
        <div className="w-1/2">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
