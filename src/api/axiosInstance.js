import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const getCars = async page => {
  const axiosSearchParams = {
    params: {
      page: page,
      limit: '8',
    },
  };
  const { data } = await api.get('/cars', axiosSearchParams);

  return data;
};

export const getCarsById = async id => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};
