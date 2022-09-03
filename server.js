const path = require(`path`);
const express = require(`express`);
const session = require("express-session");
const exphbs = require(`express-handlebars`);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require(`./config/connection`);
const SequelizeStore = require(`connect-session-sequelize`)(session.Store);

const hbs = exphbs.create();

app.engine(`handlebars`, hbs.engine);
app.set(`view engine`, `handlebars`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, `public`)));

app.use(require(`./controllers/`))

app.listen(PORT, () => { 
    console.log(`App listing at http://localhost:${PORT}`);
    sequelize.sync({ force: false });
})