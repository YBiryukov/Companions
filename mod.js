async function handleRequest(request) {
  const pathname = new URL(request.url);

  if (pathname.startsWith("/style.css")) {
    const style = new URL("style.css", import.meta.url);
    return fetch(style);
  };

  return new Response(
    `<html>
      <head>
        <title>Companions</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Welcome to Companions!</h1>
        <h4>Main Menu</h4>
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
