const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(option, async (payload, done) => {
      const user = await User.findById(payload.userId).select("email id");

      try {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.error(error);
      }
    })
  );
};
