import enviroments from './enviroment';

const URLS = {
  meli: {
    base: () => {
      return enviroments.MELI.BASE_URL;
    },
    items: () => {
        return `${enviroments.MELI.BASE_URL}/items/`;
    },
    categories:()=>{
        return `${enviroments.MELI.BASE_URL}/categories/`;
    },

    mla: {
      categories: () => {
        return `${enviroments.MELI.BASE_URL}/sites/MLA/categories/`;
      },
      search: () => {
        return `${enviroments.MELI.BASE_URL}/sites/MLA/search/`;
      },
    },
  },
};

export default URLS;
