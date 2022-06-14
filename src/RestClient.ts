import axios from 'axios';

const RestClient = axios.create({
  baseURL: "https://palm-tasks-api.herokuapp.com"
});

export default RestClient;
