import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User, PassportUser } from '../models';
import { GOOGLE_STRATEGY_OPTIONS } from './configs';

passport.use(new GoogleStrategy({
  ...GOOGLE_STRATEGY_OPTIONS
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOne({ userId: profile.id });
  const avatar = profile.photos?.length ? profile.photos[0].value : null;

  if (!user) {
    const newUser = await User.create({
      avatar,
      fullName: profile.displayName,
      userId: profile.id
    });

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
      $set: {
        avatar,
        fullName: user.fullName,
        userId: user.userId
      }
    });

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

passport.deserializeUser<PassportUser>((user, done) => {
  const userWithToken = {
    id: user.id,
    userId: user.userId,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken
  };

  done(null, userWithToken);
});
