const API_KEY = '24210737-3b0bc435d65d70e1c06573fda';

function fetchImages(page, queryName) {
  return fetch(
    `https://pixabay.com/api/?q=${queryName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }
      return Promise.reject(new Error(`Oh no... We cant find ${queryName}`));
    })
    .then(res => {
      return res.hits;
    });
}

const api = { fetchImages };

export default api;
