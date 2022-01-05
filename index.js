
const { PORT } = require("./src/config/global");

const { getConnection } = require('./src/dao/db/connection');
const app = require('./server');

getConnection().then((message)=> {
    console.log(message);
    app.listen(PORT, () => {
        console.log(`Este servidor está corriendo en el puerto: ${PORT}`);
    });
}).catch(console.log);

