const app = require('./server/app.js');
const { PORT } = require('config.js');

app.listen(port, () => console.log(`***Server running on port ${port}***`));