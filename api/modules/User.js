const moogoose = require("mongoose")


const UserSchema = new moogoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
        required:true,

	},profile:{
		type: String,
        default:"",
    },
},{timestamps:true});

module.exports = moogoose.model("User",UserSchema)
