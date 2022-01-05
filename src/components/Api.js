const API_KEY = '24210737-3b0bc435d65d70e1c06573fda';

async function fetchImages(page, querry) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${querry}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  const data = await response.json();
  return data.hits;
}

export default fetchImages;
