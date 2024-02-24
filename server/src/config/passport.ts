import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from '../utils/secrets';

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/redirect',
		},
		(accessToken, refreshToken, profile, done) => {
			//get profile details and save to db
		}
	)
);
