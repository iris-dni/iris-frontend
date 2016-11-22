import devServer from '../../dev-server';

const isProduction = process.env.NODE_ENV === 'production';

export default isProduction ? '/dist' : devServer.publicPath;
