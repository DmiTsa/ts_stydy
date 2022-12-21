import { IncomingMessage, ServerResponse } from 'http';
import users from '../data/users';

const getController = (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case `/api/users`:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(users);
      break;
    default:
      res.statusCode = 404;
      res.write(`Error 404: Path: ${req.url} is not found`);
      res.end();
      break;
  }
};
export default getController;
