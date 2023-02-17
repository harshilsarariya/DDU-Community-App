const express = require('express');
const router = express.Router();

const passport = require("passport");
const cookieSession = require("cookie-session");
require("../helpers/passport-google-auth");

const google_auth = require("../../controllers/google-auth-cntrl");

//1.)
router.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));

//2.)
router.use(passport.initialize());
router.use(passport.session());

// 3. auth
router.route('/').get(
    passport.authenticate(
        'google',
        { scope: ['email', 'profile'] }
    )
);

//.4 auth callback - redirect link
router.route('/callback').get(
    passport.authenticate('google', {
        successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
    }));

//.5 success
router.get('/callback/success', google_auth.google_success_auth);

//.6 failure
router.get('/callback/failure', google_auth.google_fail_auth);



module.exports = router;