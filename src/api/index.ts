import axios, {AxiosResponse} from 'axios';

import {IPost, IUser} from '../types';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetchPosts = (
  start: number,
  end: number,
): Promise<AxiosResponse<IPost[]>> => {
  return api.get(`/posts?_start=${start}&_end=${end}`);
};

const fetchUser = (userId: number): Promise<AxiosResponse<IUser>> => {
  return api.get(`/users/${userId}`);
};

export default {fetchPosts, fetchUser};
