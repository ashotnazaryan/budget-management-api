import { ProfileDocument, ProfileInput } from '../models';

export const mapProfile = (profile: ProfileDocument, userId: string): ProfileInput => {
  return {
    userId,
    id: profile.get('_id'),
    streetAddress: profile.streetAddress,
    streetAddressLine: profile.streetAddressLine,
    city: profile.city,
    region: profile.region,
    zipCode: profile.zipCode,
    countryCode: profile.countryCode,
    taxId: profile.taxId,
    accountNumber: profile.accountNumber
  };
};
