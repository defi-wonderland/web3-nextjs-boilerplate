import { Constants } from '~/types';

const constants: Constants = {
  // Put your project constants here
  RPC_URL_TESTING: 'http://127.0.0.1:8545',
};

export const getConstants = (): Constants => {
  return constants;
};
