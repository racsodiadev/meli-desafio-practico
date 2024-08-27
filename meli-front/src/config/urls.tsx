import enviroments from './enviroment';

const URLS = {
  bff: {
    base: () => {
      return `${enviroments.BFF.BASE_URL}/`;
    },
    items: () => {
      return `${enviroments.BFF.BASE_URL}/api/v1/items/`;
    },
    item: () => {
      return `${enviroments.BFF.BASE_URL}/api/v1/item/`;
    },

  },
};

export default URLS;