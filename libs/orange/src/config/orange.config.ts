import { OrangeConfig } from './interfaces';

export const orangeConfig = (): OrangeConfig => ({
  apiUrl: process.env.ORANGE_API_URL,
});
