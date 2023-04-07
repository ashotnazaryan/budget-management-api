import { Credentials, OAuth2Client } from 'google-auth-library';
import { CONFIG } from '../core/configs';

export const getGoogleAccessToken = async (refreshToken: string): Promise<Credentials> => {
  const googleClient = new OAuth2Client(CONFIG.googleClientID, CONFIG.googleClientSecret);

  googleClient.setCredentials({ refresh_token: refreshToken });

  try {
    const { credentials } = await googleClient.refreshAccessToken();

    googleClient.setCredentials(credentials);

    return credentials;

  } catch (error) {
    throw error;
  }
};
