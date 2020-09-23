const convertTime = time => {
  const defaultValue = 'Not specified';
  const format = 'minutes';
  if (typeof time !== 'string') return defaultValue;

  const t = time.match(/\d+/);
  return t ? `${t} ${format}` : defaultValue;
};

export default convertTime;
