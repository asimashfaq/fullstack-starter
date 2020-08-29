/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'dotenv/config';
import 'reflect-metadata';

import exitHook from 'async-exit-hook';

import { AppDispatcher } from './dispatcher';
import { createEverLogger } from './helpers/Log';

const log = createEverLogger({ name: 'uncaught' });

const dispatcher = new AppDispatcher();

dispatcher
  .dispatch()
  .then(() => log.info('Everything up running'))
  .catch((e) => {
    log.error(e.message, e.stack);
    process.exit(1);
  });

exitHook((callback) => {
  void dispatcher.shutdown().then(() => {
    log.info('Graceful shutdown the server');
    callback();
  });
});
process.on('uncaughtException', (err) => {
  try {
    log.error(err, 'Caught exception: ' + err);
  } catch (logWritingErr) {
    try {
      console.error("Can't write to log!!!!!!");
      console.error(logWritingErr);
    } catch (consoleWritingError) {}
  }

  console.error(err);
});

process.on('unhandledRejection', (err) => {
  try {
    log.error(err, 'Uncaught rejection: ' + err);
  } catch (logWritingErr) {
    try {
      console.error("Can't write to log!!!!!!");
      console.error(logWritingErr);
    } catch (consoleWritingError) {}
  }

  console.error(err);
});
