'use strict';

const Translator = require('../components/translator.js');


module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translation;
      console.log(req.body.text);
      if ( req.body.text == "" ) {
        res.send( {  error: 'No text to translate'})
      }
      else if (!req.body.hasOwnProperty("locale") || !req.body.hasOwnProperty("text")){
        res.send( { error: 'Required field(s) missing' })
      }
      
      else if (req.body.locale == "american-to-british"){
         translation = translator.americanToBritish(req.body.text);
        
        
        res.send({text: req.body.text,translation: translation})
      }
      else if (req.body.locale == "british-to-american"){
         translation = translator.britishToAmerican(req.body.text);
         console.log("translation: " + translation)
         res.send({text: req.body.text, translation: translation})
      }
      else {
        res.send({ error: 'Invalid value for locale field' })
      }
      //console.log(res.body.translation)
    });
};
