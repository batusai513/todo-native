import { get } from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export function getTodos() {
  return get(URL);
}
