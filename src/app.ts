import test from './test';
import { createServer } from 'http';
{
  const st: string = 'hello hello!';
  const ar: number = 4000;
  console.log(st + ' ' + ar + test());
}
console.log(createServer);
