const Post = require("../models/Post");

exports.addPost = async (req, res) => {
    const { text,jobType,designation,experience,gender,offeredSalary,qualification,localisation } = req.body;
    try {
        const post = new Post({
            text,
            jobType,
            designation,
            experience,
            gender,
            offeredSalary,
            qualification,
            localisation,
            userId: req.user.id,
        });
        await post.save();
        res.status(201).json({ msg: "post created", post });
    } catch (error) {
        res.status(500).send({ msg: "server error" });
    }
};
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("userId", [
            "username",
            "imageUrl",
        ]);
        res.status(200).json({ msg: "all posts", posts });
    } catch (error) {
        res.status(500).send({ msg: "server error" });
        console.log(error)
    }
};