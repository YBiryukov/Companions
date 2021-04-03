import { mainMenuStyle } from "./styles.js";
import { mainMenu, startGame } from "./pages.js";


async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  let style;
  let body;

  if (pathname.startsWith("/startGame")) {
    style = "";
    body = startGame;
  } else {
    style = mainMenuStyle;
    body = mainMenu;
  };

  return new Response(
    `<html>
      <head>
        <title>Companions</title>
        <style>
          ${ style }
        </style>
      </head>
      <body>
        ${ body }
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
