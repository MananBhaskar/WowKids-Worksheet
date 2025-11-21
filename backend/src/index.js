require('dotenv').config({ path: './.env' });
const { app } = require('./app');
const ConnectDB = require('./database/db.connection');

const PORT = process.env.PORT || 4000;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start:', err);
    process.exit(1);
  });
