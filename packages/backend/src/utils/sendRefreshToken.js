function sendRefreshToken(res, token) {
    res.cookie('refresh_token', token, {
      httpOnly: true,
      sameSite: true,
        //path: '/api/v1/auth',
        path: '/',
    });
  }
  
  module.exports = { sendRefreshToken };