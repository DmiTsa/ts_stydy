//POST 'API/users' используется для создания записи о новом пользователе и сохранения ее в базе данных.
//Сервер должен ответить кодом состояния 201 и вновь созданной записью.
//Сервер должен ответить кодом состояния 400 и соответствующим сообщением, если тело запроса не содержит обязательных полей.
import { IncomingMessage, ServerResponse } from 'http';
import users from '../data/users';
import User from '../interfaces/User';
// type User = {
//   id?: string;
//   username?: string;
//   age?: number;
//   hobbies?: string[];
// };

const postController = (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case `/api/users`:
      let body: User;
      req.on('data', (chunk: User) => {
        body = chunk;
      });
      req.on('end', () => {
        console.log(userValidator(body));

        if (true) {
          users.push(body);
          res.statusCode = 201;
          res.setHeader('Content-Type', 'application/json');
          res.end(body);
        } else {
          res.statusCode = 400;
          res.end('Invalid parameter(s)');
        }
      });
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
function userValidator(body: User): boolean {
  return body.username && body.age && body.hobbies ? true : false;
}
