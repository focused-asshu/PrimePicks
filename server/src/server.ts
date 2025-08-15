import { connectDB } from './config/db.js';
import app from './app.js';
import { config } from './config/env.js';

connectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`Server http://localhost:${config.PORT}`);
    });
  })
  .catch((e) => {
    console.error('DB connection error', e);
    process.exit(1);
  });
