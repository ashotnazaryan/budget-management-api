import { Credentials, OAuth2Client } from 'google-auth-library';
import { CONFIG } from '../core/configs';

export const getGoogleAccessToken = async (refreshToken: string): Promise<Credentials> => {
  const oauth2Client = new OAuth2Client(CONFIG.googleClientID, CONFIG.googleClientSecret);

  oauth2Client.setCredentials({ refresh_token: refreshToken });

  try {
    const { credentials } = await oauth2Client.refreshAccessToken();

    oauth2Client.setCredentials(credentials);

    return credentials;

  } catch (error) {
    throw error;
  }
};
