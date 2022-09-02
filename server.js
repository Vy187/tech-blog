const express = require(`express`);
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require(`./config/config`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);

app.use(require(`./controllers/`))

app.listen(PORT, () => { 
    console.log(`App listing at http://localhost:${PORT}`);
    sequelize.sync({ force: false});
    })