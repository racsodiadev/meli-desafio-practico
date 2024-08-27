import enviroments from './enviroment';

const URLS = {
  bff: {
    base: () => {
      return `${enviroments.BFF.BASE_URL}`;
    },
    items: () => {
      return `/api/${enviroments.BFF.API_VERSION}/items`;
    },
    item: () => {
      return `/api/${enviroments.BFF.API_VERSION}/item`;
    },

  },
};

export default URLS;