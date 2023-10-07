const http = require('http')
const port = process.env.PORT ||9999;
const app=require('./server');

const server=http.createServer(app);


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 