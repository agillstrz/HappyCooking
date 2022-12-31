import Cookies from "js-cookie";

const Admin = {
  isAdmin() {
    if (Cookies.get("admin")) return true;
    return null;
  },

  getAdmin() {
    if (Cookies.get("sub")) return Cookies.get("sub");
    return null;
  },
  StoreAdmin(data) {
    if (!data.stsTokenManager.accessToken || !data.stsTokenManager.refreshToken)
      return null;
    const { accessToken } = data.stsTokenManager;
    const accessExpires = new Date(accessToken.expirationTime);
    Cookies.set("admin", accessToken, { expires: accessExpires });

    return data;
  },
};

export default Admin;
