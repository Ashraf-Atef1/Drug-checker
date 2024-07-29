require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = require('./app');
const mongooseConnect = require('./services/mongo');
const server = http.createServer(app);
server.listen(PORT, async () => {
  await mongooseConnect();
  console.log('Server is running ' + PORT);
});

