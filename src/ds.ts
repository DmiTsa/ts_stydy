//functions
type User = {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
};

function userValidator(body: User) {
  body.id = 'ss';
  return body;
}

const User1 = { username: 'pasha', age: 29, hobbies: ['jhobby'] };
const res = userValidator(User1);
console.log(res);

//function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{

// import { v4 as uuidv4 } from 'uuid';
// import { validate as uuidValidate } from 'uuid';

// const obj = {
//   id: uuidv4(),
//   name: 'str',
// };

// const obj2 = {
//   id: uuidv4(),
//   name: 'str2',
// };

// const obj3 = {
//   id: 'de77038f-80e2-4113-bda7-9e5ec37e385',
//   name: 'str2',
// };

// console.log(`validate OK: ${uuidValidate(obj3.id)}`);
