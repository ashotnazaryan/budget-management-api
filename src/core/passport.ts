import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User, UserInput } from '../models';
import { GOOGLE_STRATEGY_OPTIONS } from './configs';

passport.use(new GoogleStrategy({
  ...GOOGLE_STRATEGY_OPTIONS
}, async (accessToken, refreshToken, { id, name }, done) => {
  const fullName = `${name?.givenName || ''} ${name?.familyName || ''}`;
  const user = await User.findOne({ userId: id });

  if (!user) {
    const newUser = await User.create({
      fullName,
      userId: id,
    });

    const newUserWithToken = {
      id: newUser.id,
      userId: id,
      accessToken,
      refreshToken
    };

    if (newUser) {
      done(null, newUserWithToken);
    }
  } else {
    const userWithToken = {
      id: user.id,
      userId: user.userId,
      accessToken,
      refreshToken
    };

    done(null, userWithToken);
  }
}));

// TODO: fix any type
passport.serializeUser((user: any, done) => {
  done(null, { id: user.id, userId: user.userId, accessToken: user.accessToken, refreshToken: user.refreshToken });
});

passport.deserializeUser<UserInput>((user, done) => {
  const userWithToken = {
    id: user.id,
    userId: user.userId,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken
  };

  done(null, userWithToken);
});
