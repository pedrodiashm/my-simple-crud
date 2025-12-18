const mongoose = require('mongoose');

// schema (model) da base de dados User

const UserSchema = new mongoose.Schema({
    UserId:{
        type:Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref: "Posts",
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Likes', LikeSchema);