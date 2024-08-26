import enviroments from './enviroment';

const URLS = {
  meli: {
    base: () => {
      return enviroments.MELI.BASE_URL;
    },
    items: () => {
      return `${enviroments.MELI.BASE_URL}/items/`;
    },
    categories: () => {
      return `${enviroments.MELI.BASE_URL}/categories/`;
    },

    mla: {
      categories: () => {
        return `${enviroments.MELI.BASE_URL}/sites/MLA/categories/`;
      },
      search: () => {
        return `${enviroments.MELI.BASE_URL}/sites/MLA/search/`;
      },
      itemSearch: {
        id: () => {
          return `${enviroments.MELI.BASE_URL}/items/`;
        },
        description: (id: string) => {
          return `${enviroments.MELI.BASE_URL}/items/${id}/description`;
        }
      },
    },
  },
};

export default URLS;
