module.exports = {
  facebookAuth: {
    clientID: "346791592740931",
    clientSecret: "your-client-secret-here",
    callbackURL: "http://localhost:4000/api/auth/facebook/callback",
    profileURL:
      "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email"
  },

  googleAuth: {
    clientID: "271494574513-nfj5m6abg9j9uhi8dr5lb9kt5crksbo3.apps.googleusercontent.com",
    clientSecret: "s43ZQsEI_VFXq6UfOu53uS5R",
    callbackURL: "http://localhost:4000/auth/google/callback"
  }
};
