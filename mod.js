async function getStartGame() {
  const startGame = new URL("startGame.html", import.meta.url);
  return fetch(startGame);
};

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  // if (pathname.startsWith("/startGame.html")) {
  //   const startGame = new URL("startGame.html", import.meta.url);
  //   return fetch(startGame);
  // };

  if (pathname.startsWith("/styles/style.css")) {
    const style = new URL("styles/style.css", import.meta.url);
    return fetch(style);
  };

  return new Response(
    `<html>
      <head>
        <title>Companions</title>
        <link rel="stylesheet" href="styles/style.css" />
      </head>
      <body>
        <h1 class="companionsTitle">Welcome to Companions!</h1>
        <h4>Main Menu</h4>
        ${getStartGame()}
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
