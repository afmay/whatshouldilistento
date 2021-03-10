const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new SpotifyStrategy({
  clientID: "b9b1bc33ef1746b0b394e0333f15f036",
  clientSecret: "6ce5f59631a74f33b993968f4184fae7",
  callbackURL: "https://whatdoilistento.com"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));