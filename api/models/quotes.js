var mongoose = require( 'mongoose' );


var QuotesSchema = new mongoose.Schema({
    author:{
		type:String,
		required: true
    },
    category:{
		type:String,
		required: true
	},
    quotedesc:{
		type:String,
		required: true
	}
});

mongoose.model('Quotes', QuotesSchema, 'Quotes');
