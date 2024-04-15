const http = require('http');
const {
  mainRouteController,
  gameRouteController,
  voteRoureController,
  defaultRouteController
} = require('./controllers')

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case '/':
      mainRouteController(res, "/index.html", ".html");
      break;
    case '/game':
      gameRouteController(res);
      break;
    case '/vote':
      voteRoureController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(3005);