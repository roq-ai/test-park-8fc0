import axios from 'axios';
import queryString from 'query-string';
import { NavBarInterface, NavBarGetQueryInterface } from 'interfaces/nav-bar';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNavBars = async (query?: NavBarGetQueryInterface): Promise<PaginatedInterface<NavBarInterface>> => {
  const response = await axios.get('/api/nav-bars', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNavBar = async (navBar: NavBarInterface) => {
  const response = await axios.post('/api/nav-bars', navBar);
  return response.data;
};

export const updateNavBarById = async (id: string, navBar: NavBarInterface) => {
  const response = await axios.put(`/api/nav-bars/${id}`, navBar);
  return response.data;
};

export const getNavBarById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/nav-bars/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNavBarById = async (id: string) => {
  const response = await axios.delete(`/api/nav-bars/${id}`);
  return response.data;
};
