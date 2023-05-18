import axios from 'axios';
import BASE_URL from '../constants/base_url';

async function getImages() {
  const URL = `${BASE_URL}/companies`;
  const response = await axios.get(URL);

  return response;
}

export default getImages;
