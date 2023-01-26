window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,

        allQuestions = {
          'Wie is de main character van turbo?' : ['Smoove move', 'Turbo', 'Chet', 1],
          
          'Wat is turbo zijn kracht? ' : ['Speed', 'Superkracht' , 'Hoog springen', 0],
          
          'Waar leefde turbo eerst?' : ['Plantage', 'Tomaten tuin', 'Boerderij', 1],

          'Wat doet hij voor werk? ' : ['Tomaten plukken', 'Tomaten shouwen', 'Racen', 2],

          'Wanneer kwam turbo uit?' : ['2013', '2012', '2015',  0],

          'Heeft turbo een broer' : ['Ja', 'Nee', 'Niet genoemd',  0],

          'Welke kleur is turbo zijn kracht? ' : ['Blauw', 'Rood', 'Geel',  0],

          'Hoe oud is turbo ?' : ['12', '9', 'Niet genoemd',  2],

          'Waar slaapt hij? ' : ['Tankstation', 'Taco place', 'Spacestation',  1],

          'Won hij de grote race?' : ['ja', 'nee', 'gelijkspel',  0],

          

        };
        
    function loadQuestion(curr) {

    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {

    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {

      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done <br> <button onclick="secondFunction()">Click to go back to home</button>' ;
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {

    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    

    loadQuestion(current);
    loadAnswers(current);
    
  };

  function secondFunction () {
    window.location.href = "../homepage/homepage.html";

}

