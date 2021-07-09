const moogoose = require("mongoose");
const PostSchema = new moogoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: false,
		},
        username:{
            type: String,
			required: true,
        },
        catagories:{
            type:Array,
            required: false
        }
	},
	{ timestamps: true }
);

module.exports = moogoose.model("Post", PostSchema);
