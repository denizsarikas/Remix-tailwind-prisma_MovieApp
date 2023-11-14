import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout({children}: {children: ReactNode}) {
  return (
    <>
      <nav className="px-10 pt-5">
        {/* burası intentçok iyiymiş.  */}
        {/* render da olabiliyor ama abartı bir özellik  */}
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          Movie<span className="text-teal-500">DB</span>
        </Link>
        <main>{children}</main>
      </nav>
    </>
  );
}
