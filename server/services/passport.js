const passport = require('passport');
const {Strategy: GoogleStrategy} = require('passport-google-oauth20');
const keys = require('../config/keys');

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken);
        console.log('refreshToken: ', refreshToken);
        console.log('profile: ', profile);
    })
);
