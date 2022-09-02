const router = require(`express`).Router();
const { User } = require(`../../models`);

router.post(`/`, async (req, res) => {
    try {
        const newUser = await User.create({ username: req.body.username, password: req.body.password });
        req.session.save(() => { 
            req.session.userId = newUser.id; 
            req.session.username = newUser.username; 
            req.session.loggedIn = true;
            
            res.json(newUser);
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post(`/login`, async (req, res) => {
    try {
        const userData = await User.findOne({ where: {username: req.body.username } });
        const validPassword = userData.checkPassword(req.body.password);

        if (!userData  || !validPassword) {
            return res.status(400).json({ message: `No user account found` });
        }

        req.session.save(() => {
            res.session.userId = userData.id;
            res.session.username = userData.username;
            res.session.loggedIn = true;

            res.json({ userData, message: `You are now logged in` });
        })
    } catch (err) {
        res.status(400).json({ message: `No user account found` });
    }
})

module.exports = router;