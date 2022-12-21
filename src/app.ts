import { createServer, IncomingMessage, ServerResponse } from 'http';
import getController from './controllers/getController';

const port = 4000;

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    switch (request.method) {
      case 'GET':
        getController(request, response);
        break;
      default:
        response.statusCode = 500;
        response.write(
          `Error 500: request type ${request.method} is not supported`
        );
        response.end();
        break;
    }
    //  getController(request, response);
    //  postController(request, response);
    //  putController(request, response);
    //  deleteController(request, response);
    //  if (request.url === `/api/users`) {
    //    response.statusCode = 200;
    //    response.setHeader('Content-Type', 'application/json');
    //    response.end(data);
    //  } else {
    //    response.write('error!');
    //    response.end();
    //  }
  }
);

server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

//functions
// const postController = (a, b) => {};
// const putController = (a, b) => {};
// const deleteController = (a, b) => {};
