const validUrl = url => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

export default validUrl;
