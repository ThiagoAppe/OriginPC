import axios from 'axios';

const fetchGeneral = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error al realizar el fetch en ${url}:`, error);
    throw error;
  }
};

export default fetchGeneral;
