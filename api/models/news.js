var mongoose = require( 'mongoose' );

var newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  intger: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

mongoose.model('News', newsSchema, 'news');
