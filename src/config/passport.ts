import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User, UserInput } from '../models';
import { CONFIG } from './settings';

passport.use(new GoogleStrategy({
  callbackURL: '/api/auth/google/callback',
  scope: ['profile'],
  clientID: CONFIG.clientID,
  clientSecret: CONFIG.clientSecret,
}, async (accessToken, refreshToken, { id }, done) => {
  const user = await User.findOne({ userId: id });

  if (!user) {
    const newUser = await User.create({
      userId: id
    });

    const newUserWithToken = {
      id: newUser.id,
      userId: id,
      accessToken
    };

    if (newUser) {
      done(null, newUserWithToken);
    }
  } else {
    const userWithToken = {
      id: user.id,
      userId: user.userId,
      accessToken
    };

    done(null, userWithToken);
  }
}));

// TODO: fix any type
passport.serializeUser((user: any, done) => {
  done(null, { id: user.id, userId: user.userId, accessToken: user.accessToken });
});

passport.deserializeUser<UserInput>((user, done) => {
  const userWithToken = {
    id: user.id,
    userId: user.userId,
    accessToken: user.accessToken
  };

  done(null, userWithToken);
});
