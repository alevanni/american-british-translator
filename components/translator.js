const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js')

class Translator {
    
  britishIdioms(string){ //from american to english
      const idioms = Object.keys(americanOnly);
    
    var translation = string;
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>"
    for (var i =0; i<idioms.length; i++){ //american idioms
      let letters = /^[a-zA-Z]$/
      let regex1 = new RegExp(idioms[i] , "gi");
      let regex3 = new RegExp(idioms[i] , "i");
      let array1 = [...translation.matchAll(regex1)];
      for ( var j=0; j<array1.length; j++){
          let index = array1[j]["index"];
          console.log(array1[j] + " "+ letters.test(translation[index-1]))
          
          if (!letters.test(translation[index-1]) && !letters.test(translation[index + idioms[i].length ])){
            console.log("posso tradurre")
            translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + americanOnly[idioms[i]] + highlight2);
          }
      }
    }
  return translation;
  }
  britishSpelling(string){ //from american to english
    const spelling = Object.keys(americanToBritishSpelling);
    var translation = string;
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>"
    for (var i =0; i<spelling.length; i++){ //american idioms
      let letters = /^[a-zA-Z]$/
      let regex1 = new RegExp(spelling[i] , "gi");
      let regex3 = new RegExp(spelling[i] , "i");
      let array1 = [...string.matchAll(regex1)];
      for ( var j=0; j<array1.length; j++){
          let index = array1[j]["index"];
          console.log(array1[j] + " "+ letters.test(translation[index-1]))
          if (!letters.test(string[index-1]) && !letters.test(string[index + spelling[i].length ])){
             translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + americanToBritishSpelling[spelling[i]] + highlight2);
           }
      }
   }
   return translation;
 }
  

  britishTitle(string){
    const titles = Object.values(americanToBritishTitles);
    var translation = string;
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>"
    for (var i =0; i<titles.length; i++){ //american idioms
      let letters = /^[a-zA-Z]$/
      let regex1 = new RegExp( titles[i]+ "\\.", "gi");
      let regex3 = new RegExp(titles[i]+ "\\." , "gi");
      let array1 = [...string.matchAll(regex1)];
      for ( var j=0; j<array1.length; j++){
          let index = array1[j]["index"];
          console.log(array1[j] + " "+ letters.test(translation[index-1]))
            if (!letters.test(string[index-1]) && !letters.test(string[index + titles[i].length ])){
               translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + titles[i].replace(/^\w/, (c) => c.toUpperCase()) + highlight2);
              }
      }
   }
    return translation;
 }

britishTime(string){
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>";
    var translation = string;
    var i;
    let regex = new RegExp(/\d{1,2}:\d\d/g)
     if (regex.test(translation) ){
       console.log("found")
       let found = translation.match(regex); 
       for (i = 0; i<found.length;i++){
         found[i] = found[i].replace(/:/, ".")
         translation = translation.replace(/\d{1,2}:\d\d/, "<span class=\"highlight\">"+ found[i] +"</span>")
         }
     }
    return translation;
  }


  americanToBritish(string){
    var translation = this.britishIdioms(string);
    translation = this.britishSpelling(translation);
    translation = this.britishTitle(translation);
    translation = this.britishTime(translation);
    if (translation != string){
       return translation;
    }
    else return "Everything looks good to me!"
  }
  britishToAmerican(string){
    var translation = this.americanSpelling(string);
    translation = this.americanIdioms(translation);
    translation = this.americanTitles(translation);
    translation = this.americanTime(translation);
    if (translation != string){
       return translation;
    }
    else return "Everything looks good to me!"
  }

  americanSpelling(string){
     var translation = string;
     var highlight1 = "<span class=\"highlight\">";
     var highlight2 = "</span>";
     var britishSpelling = Object.values(americanToBritishSpelling);
     var americanSpelling = Object.keys(americanToBritishSpelling); 
     for (var i =0; i<britishSpelling.length; i++){ //american idioms
      let letters = /^[a-zA-Z]$/
      let regex1 = new RegExp(britishSpelling[i] , "gi");
      let regex3 = new RegExp(britishSpelling[i] , "i");
      let array1 = [...string.matchAll(regex1)];
      for ( var j=0; j<array1.length; j++){
          let index = array1[j]["index"];
          if (!letters.test(string[index-1]) && !letters.test(string[index + britishSpelling[i].length ])){
             console.log("posso tradurre")
             translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + americanSpelling[i] + highlight2);
            }
      }
   }
    return translation;
  }

  americanIdioms(string){
     var translation = string;
     var highlight1 = "<span class=\"highlight\">";
     var highlight2 = "</span>";
     var britishIdioms = Object.keys(britishOnly);
     var americanIdioms = Object.values(britishOnly); 
     for (var i =0; i<britishIdioms.length; i++){ //american idioms
     let letters = /^[a-zA-Z]$/
     let regex1 = new RegExp(britishIdioms[i] , "gi");
     let regex3 = new RegExp(britishIdioms[i] , "i");
     let array1 = [...string.matchAll(regex1)];
     for ( var j=0; j<array1.length; j++){
          let index = array1[j]["index"];
          console.log(array1[j] + " "+ letters.test(string[index-1]) + " " + letters.test(string[index + britishIdioms[i].length ]))
          
          if (!letters.test(string[index-1]) && !letters.test(string[index + britishIdioms[i].length ])){
            console.log("posso tradurre")
            translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + americanIdioms[i] + highlight2);
           }
      }
   }
  
  return translation;
  }

   americanTitles(string){
    const americanTitles = Object.keys(americanToBritishTitles);
    const britishTitles = Object.values(americanToBritishTitles);
    var translation = string;
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>"
    var i;
    for (var i =0; i<britishTitles.length; i++){ //american idioms
    let letters = /^[a-zA-Z]$/
    let regex1 = new RegExp( britishTitles[i], "gi");
    let regex3 = new RegExp(britishTitles[i] , "gi");
    let array1 = [...string.matchAll(regex1)];
    for ( var j=0; j<array1.length; j++){
        let index = array1[j]["index"];
          if (!letters.test(string[index-1]) && !letters.test(string[index + britishTitles[i].length ])){
             translation = translation.slice(0, index) + translation.slice(index).replace(regex3, highlight1 + americanTitles[i].replace(/^\w/, (c) => c.toUpperCase()) + highlight2);
           }
      }
   }
    return translation;
  } 

  americanTime(string){
    var highlight1 = "<span class=\"highlight\">";
    var highlight2 = "</span>";
    var translation = string;
    var i;
    let regex = new RegExp(/\d{1,2}\.\d\d/g)
     if (regex.test(translation) ){
       console.log("found")
       let found = translation.match(regex); 
       for (i = 0; i<found.length;i++){
         found[i] = found[i].replace(/\./, ":")
         translation = translation.replace(/\d{1,2}\.\d\d/, "<span class=\"highlight\">"+ found[i] +"</span>")
         }
       }
    return translation;
  }

}

module.exports = Translator;