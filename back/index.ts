import { config } from '@config/config';

import { startServer } from '@services/server';

startServer(config.APP.PORT as number);
