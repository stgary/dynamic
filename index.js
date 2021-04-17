const app = require('./server/app.js');
const { PORT } = require('config.js');

app.listen(PORT, () => console.log(`***Server running on port ${PORT}***`));