const authorController = require("../controllers/author.controller");

const router = require("express").Router();


router.route("/create-author").post(authorController.addAuthor);
    
router.route("/").get(authorController.getAllAuthors);


router.route("/update-author/:id").put(authorController.updateAuthor)

router.route("/edit-author/:id").put(authorController.editAuthor)


router.route("/delete-author/:id").delete(authorController.deleteAuthor);
   
router.route("/:id").get(authorController.getAnAuthor);
    
module.exports = router;