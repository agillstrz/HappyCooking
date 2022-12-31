import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRefreshToken() {
    return Cookies.get("rt");
  },
  getUserId() {
    if (Cookies.get("sub")) return Cookies.get("sub");
    return null;
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("rt");
    Cookies.remove("sub");
    navigate("/");
  },
  storeUserInfoToCookie(data) {
    if (!data.stsTokenManager.accessToken || !data.stsTokenManager.refreshToken)
      return null;
    const { accessToken, refreshToken } = data.stsTokenManager;
    const accessExpires = new Date(accessToken.expirationTime);
    const refreshExpires = new Date(refreshToken.isExpired);
    Cookies.set("token", accessToken, { expires: accessExpires });
    Cookies.set("rt", refreshToken, { expires: refreshExpires });

    return data;
  },
};

export default Auth;
