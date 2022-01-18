(function (window) {
 
    
    var names = ["Yaakov", "John", "Jean", "Michael", "James", "Robert", "David", "Richard", "Daniel", "Mark"];
    

    for (var i in names) {
    
     
      var firstLetter = ((names[i]).charAt(0)).toLowerCase();
    
     
      if (firstLetter == 'j') {
         window.byeSpeaker.speak(names[i]);
      } else {
         window.helloSpeaker.speak(names[i]);
      }
    }
    })(window);
