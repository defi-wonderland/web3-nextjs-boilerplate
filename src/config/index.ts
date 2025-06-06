import { Config } from '~/types';
import { getConstants } from './constants';
import { getEnv } from './env';
import { getCustomThemes } from './themes';

export const getConfig = (): Config => ({
  env: getEnv(),
  constants: getConstants(),
  customThemes: getCustomThemes(),
});
