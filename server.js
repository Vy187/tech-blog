const express = require(`express`);
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require(`./config/connection`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require(`./controllers/`))

app.listen(PORT, () => { 
    console.log(`App listing at http://localhost:${PORT}`);
    sequelize.sync({ force: false });
})