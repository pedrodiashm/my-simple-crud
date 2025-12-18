const mongoose = require('mongoose');

// schema (model) da base de dados User

const PostSchema = new mongoose.Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    Content: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Posts', PostSchema);