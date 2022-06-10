import { Task } from '../Task';
import RestClient from '../../RestClient';

export default {
  getAll: (): Promise<Task[]> => {
    return new Promise((resolve) => {
      RestClient.get('/tasks').then((response) => {
        resolve(response.data);
      });
    });
  },
};
