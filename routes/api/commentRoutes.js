const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

// /api/comments/all
// get all comments from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Comment.find({ author: req.user.id }, (err, comments) => {
        res.json(comments);
    });
});

// /api/comments/new
// add new comment, update the user to have comment id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newComment = new db.Comment({
        author: req.user._id,
        comment: req.body.comment
    });

    newComment.save((err, newComment) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(req.user.id, { $push: { comments: newComment._id } }, (err, user) => {
            if (err) throw err;
            res.send(newComment, user);
        });
    });
});

// /api/comments/remove
// removed comment based on id, updates user
router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Comment.findByIdAndDelete(req.body.id, (err, comment) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(comment._id, { $pull: { 'comments': comment._id } }, { new: true }, (err, user) => {
            if (err) throw err;
            res.send(user);
        });
    });
});

// /api/comments/update
// update a comment based on id
router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Comment.findByIdAndUpdate(req.body.id, { comment: req.body.comment }, { new: true }, (err, comment) => {
        if (err) throw err;
        res.json(comment);
    });
});

module.exports = router;