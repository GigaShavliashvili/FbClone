
import http from 'http';
import app from "./app"
import config  from 'config'
import log from './utils/logger';

const PORT = config.get<string>('port')

const server = http.createServer(app);

server.listen(PORT, async () => {
console.info("server listening on port " + PORT)
});

process.on('unhandledRejection', (err: Error) => {
    log.error(err,`Error ${err.message}`);
    server.close(() => process.exit(1));
  });
  