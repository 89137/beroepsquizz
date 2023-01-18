window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,

        allQuestions = {
          'Welk van deze spelers is de nummer een?' : ['Mrekk', 'Chocomint', 'FlyingTuna', 0],
          
          'Welk van deze mappen is het meest gespeeld?' : ['Harumachi Clover', 'Black clover' , 'No title', 2],
          
          'Wat is de huiskleur van osu?' : ['Roze', 'Blauw', 'Rood', 0],

          'Welke van deze mappen heeft de hoogste star rating?' : ['Flashbacklog', 'Acid rain', 'The Solace of oblivion', 2],

          'Wat bepaald de hoeveelheid pp van een map?' : ['Snelheid van de map', 'Algehele moeilijkheid', 'Groote van de osu cirkels',  1],

          'Hoeveel gamemodes zitten er in osu?' : ['2', '4', '6',  1],

          'Wat is de average star rating van een osu speler? ' : ['7 ster', '3 ster', '5 ster',  2],

          'Wat is de moeilijkste medal om te krijgen in osu?' : ['Unfanthomable', 'Chosen', '40,000,000 keys',  0],

          'Welk van deze letters heeft het meeste value in score? ' : ['C', 'S', 'A',  1],

          'Door wie worden de osu maps gemaakt?' : ['Gemeenschap', 'Maker van osu', 'Bedrijven',  0],

          

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
          questionArea.innerHTML = 'Done';
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