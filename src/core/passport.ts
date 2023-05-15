import passport from 'passport';
import { Strategy as GoogleStrategy, Profile as GoogleProfile } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy, Profile as FacebookProfile } from 'passport-facebook';
import { PassportUser, User, UserInput } from '../models';
import { FACEBOOK_STRATEGY_OPTIONS, GOOGLE_STRATEGY_OPTIONS } from './configs';

const getUser = (profile: GoogleProfile | FacebookProfile): Omit<UserInput, 'id'> => {
  const fullName = profile.displayName;
  const avatar = profile.photos?.length ? profile.photos[0].value : undefined;

  return {
    userId: profile.id,
    fullName,
    avatar
  };
};

const setUser = async (
  accessToken: string,
  refreshToken: string,
  profile: GoogleProfile | FacebookProfile,
  done: (error: any, user?: any, info?: any) => void
): Promise<void> => {
  const user = await User.findOne({ userId: profile.id });
  const mappedUser = getUser(profile);

  if (!user) {
    const newUser = await User.create(mappedUser);

    const newUserWithToken = {
      id: newUser.id,
      userId: profile.id,
      accessToken,
      refreshToken,
    };

    if (newUser) {
      done(null, newUserWithToken);
    }
  } else {
    await User.findOneAndUpdate({ userId: user.userId }, {
      fullName: user.fullName,
      userId: user.userId
    });

    const userWithToken = {
      id: user.id,
      userId: user.userId,
      accessToken,
      refreshToken
    };

    done(null, userWithToken);
  }
};

passport.use(new GoogleStrategy({
  ...GOOGLE_STRATEGY_OPTIONS
}, async (accessToken, refreshToken, profile, done) => {
  await setUser(accessToken, refreshToken, profile, done);
}));

passport.use(new FacebookStrategy({
  ...FACEBOOK_STRATEGY_OPTIONS
}, async (accessToken, refreshToken, profile, done) => {
  await setUser(accessToken, refreshToken, profile, done);
}));

passport.serializeUser((user: PassportUser, done) => {
  done(null, { id: user.id, userId: user.userId, accessToken: user.accessToken, refreshToken: user.refreshToken });
});

passport.deserializeUser<PassportUser>((user, done) => {
  const userWithToken = {
    id: user.id,
    userId: user.userId,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken
  };

  done(null, userWithToken);
});
