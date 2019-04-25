const router = require("express").Router();

router.get('/users/', (req, res, next) => {
    res.send("testing users")
});

// router.get('/users/:id', (req, res, next) => {
//     res.send('testing specific user with params')
// });

// router.post('/users', (req, res, next) => {
//     res.send('users post')
// });

// router.put('/users/:id', (req, res, next) => {
//     res.send('test put users id')
// });

// router.delete('/users/:id', (req, res, next) => {
//     res.send('delete user test')
// });


module.exports = router;
