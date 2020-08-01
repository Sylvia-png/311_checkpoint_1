const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
router.get("/users", usersController.list);

router.get("/users/:usersId", usersController.show);

router.post("/users", usersController.create);

router.put('/users/:usersId', usersController.updateUser);

router.delete('/users/:usersId', usersController.deleteUser);

module.exports = router;
