import axios from 'axios';
import queryString from 'query-string';
import { ParkingInterface, ParkingGetQueryInterface } from 'interfaces/parking';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getParkings = async (query?: ParkingGetQueryInterface): Promise<PaginatedInterface<ParkingInterface>> => {
  const response = await axios.get('/api/parkings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createParking = async (parking: ParkingInterface) => {
  const response = await axios.post('/api/parkings', parking);
  return response.data;
};

export const updateParkingById = async (id: string, parking: ParkingInterface) => {
  const response = await axios.put(`/api/parkings/${id}`, parking);
  return response.data;
};

export const getParkingById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/parkings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteParkingById = async (id: string) => {
  const response = await axios.delete(`/api/parkings/${id}`);
  return response.data;
};
