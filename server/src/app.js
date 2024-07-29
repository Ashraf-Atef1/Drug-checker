const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const ORIGIN = process.env.ORIGIN || '*';
const api = require('./versions/v1/api');
const path = require('path');
const cspOptions = {
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: ["'self'", "data:", "https://i.ibb.co", "https://www.ashrafatef.tech", "https://ashrafatef.tech"],
    scriptSrc: ["'self'", "https://www.ashrafatef.tech", "https://ashrafatef.tech"],
    frameSrc: ["'self'", "https://www.youtube.com"],
    connectSrc: ["'self'", "https://i.ibb.co/9sz6Q1T/932.jpg"],
    workerSrc: ["'self'", "blob:"]
  },
};

app.use(helmet());
app.use(helmet.contentSecurityPolicy(cspOptions));
app.use(morgan('combined'));
app.use(cors({
  origin: ORIGIN
}));
app.use(express.json());
app.use('/api/v1', api);
app.use(express.static(path.join(__dirname, "..", "public")));
app.get('/*', (req, res)=>{
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
