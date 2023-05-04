const bookController = require("../controllers/book.controller");

const router = require("express").Router();

router.route("/")
    .post(bookController.addABook)
    .get(bookController.getAllBooks);

router.route("/:id")
    .get(bookController.getABook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router;