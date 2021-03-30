const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
   suite("POST to api/translate/", function(){
     test("Valid text and valid locale field", function(done){
         chai
        .request(server)
        .post("/api/translate")
        .send({text: "Mr. Smith carbonized blood sausage at 2:30 and 3:40", locale: "american-to-british" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "translation");
          assert.equal(res.body.translation, "<span class=\"highlight\">Mr</span> Smith <span class=\"highlight\">carbonised</span> <span class=\"highlight\">black pudding</span> at <span class=\"highlight\">2.30</span> and <span class=\"highlight\">3.40</span>");
          done();
        })
     });
     test("Valid text and invalid locale field", function(done){
       chai
        .request(server)
        .post("/api/translate")
        .send({text: "Mr. Smith carbonized blood sausage at 2:30 and 3:40", locale: "french-to-british" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.equal(res.body.error,'Invalid value for locale field');
          done();
     });
     });
     test("Missing text", function(done){
      chai
        .request(server)
        .post("/api/translate")
        .send( {locale: "american-to-british" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.equal(res.body.error,'Required field(s) missing');
          done();
     });
      });
     test("Missing locale field", function(done){
       chai
        .request(server)
        .post("/api/translate")
        .send({ text: "Mr. Smith carbonized blood sausage at 2:30 and 3:40" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.equal(res.body.error,'Required field(s) missing');
          done();
     });
      });
     test("Empty text", function(done){
      chai
        .request(server)
        .post("/api/translate")
        .send( {text: "", locale: "american-to-british" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.equal(res.body.error,'No text to translate');
          done();
     });
      });
     test("Text that needs not translation", function(done){
       chai
        .request(server)
        .post("/api/translate")
        .send( {text: "Hi there, good morning!", locale: "british-to-american" })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.property(res.body, "translation");
          assert.equal(res.body.translation,"Everything looks good to me!");
          done();
     });
   });
    });
});
