module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd646b0a3516a2eecaeafdb42fbe2434d'),
  },
});
