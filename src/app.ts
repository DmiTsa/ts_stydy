import { createServer, IncomingMessage, ServerResponse } from 'http';
import getController from './controllers/getController';
import postController from './controllers/postController';

const port = 4000;
// console.log(createServer, IncomingMessage, ServerResponse);

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    switch (request.method) {
      case 'GET':
        getController(request, response);
        break;
      case 'POST':
        postController(request, response);
        break;
      default:
        response.statusCode = 500;
        response.write(
          `Error 500: request type ${request.method} is not supported`
        );
        response.end();
        break;
    }
  }
);

server.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
