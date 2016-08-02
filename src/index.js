import server from 'server';

server.start(() => {
  console.log(`==> ✅  ${process.env.NODE_ENV || 'development'} server is listening`);
  console.log('==> 🌎  Go to ' + server.info.uri.toLowerCase());
});

