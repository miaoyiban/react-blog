const moogoose = require("mongoose");
const CategorySchema = new moogoose.Schema(
	{
		name:{
            type:String,
            required:true,
        }
	},
	{ timestamps: true }
);

module.exports = moogoose.model("Category", CategorySchema);
