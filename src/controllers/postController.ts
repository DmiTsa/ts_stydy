//POST 'API/users' используется для создания записи о новом пользователе и сохранения ее в базе данных.
//Сервер должен ответить кодом состояния 201 и вновь созданной записью.
//Сервер должен ответить кодом состояния 400 и соответствующим сообщением, если тело запроса не содержит обязательных полей.
import { IncomingMessage, ServerResponse } from 'http';
import users from '../data/users';

const postController = (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case `/api/users`:
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        //добавить try(await валидатор и условие) catch -
        console.log('prinato ' + body);
      });
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end('new record');
      break;
    default:
      res.statusCode = 404;
      res.write(`Error 404: Path: ${req.url} is not found`);
      res.end();
      break;
  }
};

export default postController;

//functions
function userValidator() {
  return;
}
