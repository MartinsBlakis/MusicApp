// api/quote.js

var Quote = require('../models/quote');

module.exports.getAllQuotes = function(req, res) {
    Quote.find(function(err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({quotes: quotes});
    });
};

module.exports.addQuote = function(req,res) {
    var quote = new Quote(req.body.quote);
    quote.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.json({quote: quote});
    });
};
 /*
This is a little more complicated. Once again we'll use module exports
 to create addQuote and getAllQuotes. getAllQuotes uses the Quote object
  which is the mongoose schema we created earlier. We have a lot of different
   queries available to us. This will find all the quotes and then display
    the response in json. addQuote will save the quote to the MongoDB database.
 */
