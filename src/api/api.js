import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: 'Bearer Hrr5-Kb5FEPmrb74V4mD-AyChtsKL8-a7_i0dSPQRoc',
  },
});

const alertError = () =>
  alert('Лимит запросов исчерпан. Ожидайте окончания часа');

export const Auth = () => instance.get('/me').then((response) => response.data);

export const imagesAPI = {
  likeImage: (imageId) => {
    return instance
      .post(`/photos/${imageId}/like`)
      .then((response) => response)
      .catch(() => alertError());
  },

  unlikeImage: (imageId) => {
    return instance
      .delete(`/photos/${imageId}/like`)
      .then((response) => response)
      .catch(() => alertError());
  },

  getImages: (currentPage) => {
    return instance
      .get(`photos`, {
        params: {
          page: currentPage,
          per_page: 6,
        },
      })
      .then((response) => response.data)
      .catch(() => alertError());
  },
};
