const router = require("express").Router();

router.use("/", require("./mainRouter"));
//router.use("/products", require("./productsRouter"));
//router.use("/users", require("./usersRouter"));

module.exports = router;