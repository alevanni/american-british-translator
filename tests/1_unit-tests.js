const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();
var highlight = new RegExp("</{0,1}span(\\sclass=\\\"highlight\\\"|)>", "g");

suite('Unit Tests', () => {
   suite("Translate American to British", function(){
     test("Mangoes are my favorite fruit.", function(done){
       let string = "Mangoes are my favorite fruit.";
       let translation = "Mangoes are my favourite fruit."
       // "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       
       done();
     })
     
     test("I ate yogurt for breakfast.", function(done){
       let string = "I ate yogurt for breakfast.";
       let translation = "I ate yoghurt for breakfast."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

     test("We had a party at my friend's condo.", function(done){
       let string = "We had a party at my friend's condo.";
       let translation = "We had a party at my friend's flat."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })
     test("Can you toss this in the trashcan for me?", function(done){
       let string = "Can you toss this in the trashcan for me?";
       let translation = "Can you toss this in the bin for me?"
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

     test("The parking lot was full.", function(done){
       let string = "The parking lot was full.";
       let translation = "The car park was full."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })
test("Like a high tech Rube Goldberg machine.", function(done){
       let string = "Like a high tech Rube Goldberg machine.";
       let translation = "Like a high tech Heath Robinson device."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })
  test("To play hooky means to skip class or work.", function(done){
       let string = "To play hooky means to skip class or work.";
       let translation = "To bunk off means to skip class or work."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

     test("No Mr. Bond, I expect you to die.", function(done){
       let string = "No Mr. Bond, I expect you to die.";
       let translation = "No Mr Bond, I expect you to die."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

     test("Dr. Grosh will see you now.", function(done){
       let string = "Dr. Grosh will see you now.";
       let translation = "Dr Grosh will see you now."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

     test("Lunch is at 12:15 today.", function(done){
       let string = "Lunch is at 12:15 today.";
       let translation = "Lunch is at 12.15 today."
       assert.equal(translator.americanToBritish(string).replace(highlight, ""), translation )
       done();
     })

   })
  suite("Translate British to American", function(){
    test("We watched the footie match for a while.", function(done){
       let string = "We watched the footie match for a while.";
       let translation = "We watched the soccer match for a while."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
  test("Paracetamol takes up to an hour to work.", function(done){
       let string = "Paracetamol takes up to an hour to work.";
       let translation = "Tylenol takes up to an hour to work."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })

   test("First, caramelise the onions.", function(done){
       let string = "First, caramelise the onions.";
       let translation = "First, caramelize the onions."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
   test("I spent the bank holiday at the funfair.", function(done){
       let string = "I spent the bank holiday at the funfair.";
       let translation = "I spent the public holiday at the carnival."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
    test("I had a bicky then went to the chippy.", function(done){
       let string = "I had a bicky then went to the chippy.";
       let translation = "I had a cookie then went to the fish-and-chip shop."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
     test("I've just got bits and bobs in my bum bag.", function(done){
       let string = "I've just got bits and bobs in my bum bag.";
       let translation = "I've just got odds and ends in my fanny pack."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })

     test("The car boot sale at Boxted Airfield was called off.", function(done){
       let string = "The car boot sale at Boxted Airfield was called off.";
       let translation = "The swap meet at Boxted Airfield was called off."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })

     test("Have you met Mrs Kalyani?", function(done){
       let string = "Have you met Mrs Kalyani?";
       let translation = "Have you met Mrs. Kalyani?"
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
     test("Prof Joyner of King's College, London.", function(done){
       let string = "Prof Joyner of King's College, London.";
       let translation = "Prof. Joyner of King's College, London."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })

      test("Tea time is usually around 4 or 4.30.", function(done){
       let string = "Tea time is usually around 4 or 4.30.";
       let translation = "Tea time is usually around 4 or 4:30."
       assert.equal(translator.britishToAmerican(string).replace(highlight, ""), translation )
       done();
     })
    
     
  })

   suite("Highlight", function(){
    test("Mangoes are my favorite fruit.", function(done){
       let string = "Mangoes are my favorite fruit.";
       let translation = "Mangoes are my <span class=\"highlight\">favourite</span> fruit."
       assert.equal(translator.americanToBritish(string), translation )
       done();
     })
     test("I ate yogurt for breakfast.", function(done){
       let string = "I ate yogurt for breakfast.";
       let translation = "I ate <span class=\"highlight\">yoghurt</span> for breakfast."
       assert.equal(translator.americanToBritish(string), translation )
       done();
     })
     test("We watched the footie match for a while.", function(done){
       let string = "We watched the footie match for a while.";
       let translation = "We watched the <span class=\"highlight\">soccer</span> match for a while."
       assert.equal(translator.britishToAmerican(string), translation )
       done();
     })
     test("Paracetamol takes up to an hour to work.", function(done){
       let string = "Paracetamol takes up to an hour to work.";
       let translation = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."
       assert.equal(translator.britishToAmerican(string), translation )
       done();
     })
   })
});
