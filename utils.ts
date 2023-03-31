// AW you always need this utils file.

const utils = {
  // get one param from current url
  getUrlParam(key: string) {
    const urlObj = new URL(window.location.href);
    return urlObj.searchParams.get(key);
  },
  // validate email
  isValidEmail(email: string) {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(email);
  },
  // validate password, the password can contain letters, numbers, and underscores, and the length is 6-16
  isValidPassword(password: string) {
    const reg = /^\w{6,16}$/;
    return reg.test(password);
  },
};

export default utils;
