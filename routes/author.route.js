const authorController = require("../controllers/author.controller");

const router = require("express").Router();

//router author
router.route("/")
    .post(authorController.addAuthor)
    .get(authorController.getAllAuthors);

router.route("/:id")
    .get(authorController.getAnAuthor)
    .put(authorController.updateAuthor)
    .delete(authorController.deleteAuthor);

module.exports = router;