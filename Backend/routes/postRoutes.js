const express = require("express");
const { addPost,getAllPosts, updatePost } = require("../controllers/postControllers");
const isAuth = require("../middleware/isAuth");
const { verifyPost, validator } = require("../middleware/validator");
const router = express.Router();

router.post("/", isAuth, verifyPost, validator, addPost);
router.get("/", getAllPosts);
router.put('/:id',updatePost)
module.exports = router;