const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require(`./config/config`);

app.listen(PORT, () => { 
    console.log(`App listing at http://localhost:${PORT}`);
    sequelize.sync({ force: false});
    })