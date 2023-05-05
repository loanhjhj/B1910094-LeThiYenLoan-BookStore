const bookController = require("../controllers/book.controller");

const router = require("express").Router();


router.route("/create-book").post(bookController.addABook);
    
router.route("/").get(bookController.getAllBooks);


router.route("/update-book/:id").put(bookController.updateBook)

router.route("/edit-book/:id").put(bookrController.editBook)

router.route("/delete-book/:id").delete(bookController.deleteBook);
   
router.route("/:id").get(bookController.getABook);


module.exports = router;