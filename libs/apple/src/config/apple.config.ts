import { AppleConfig } from './interfaces';

export const appleConfig = (): AppleConfig => ({
  apiUrl: process.env.APPLE_API_URL,
});
