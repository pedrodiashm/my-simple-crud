const mongoose = require('mongoose');

// schema (model) da base de dados User

const CommentSchema = new mongoose.Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Posts",
        required: true
    },
    content: {type: String, required: true},

    parentId:  {
        type: Schema.Types.ObjectId,
        ref: "Comments",
        required: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Comments', CommentSchema);