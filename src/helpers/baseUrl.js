export default () => {
  if (!process.env.BASE_URL) {
    throw new Error('Please define a BASE_URL in .env');
  }

  return process.env.BASE_URL;
};
