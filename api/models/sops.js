var mongoose = require( 'mongoose' );


var SopSchema = new mongoose.Schema({
	category:{
		type:String,
		required: true
	},
	subcategory:{
		type:String,
		required: true
	},
	description:{
		type:String,
		required: true
	}
});

mongoose.model('Sop', SopSchema, 'Sop');
