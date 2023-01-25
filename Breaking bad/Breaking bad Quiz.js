window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,

        allQuestions = {
          'Wie is de main character?' : ['Walter white', 'Jesse pinkman', 'Gus fring', 0],
          
          'Waar kookten ze hun drugs eerst? ' : ['Rv', 'Huis' , 'Lab', 0],
          
          'wat voor drugs maakte ze?' : ['Wiet', 'Crystal meth', 'Cocaine', 1],

          'waarom begon the main character met het maken van drugs? ' : ['Hij ging dood en wilde zijn famillie geld achterlaten ', 'Hij werd depressief', 'Hij was te arm om te kunnen overleven ', 0],

          'Wat voor problem had jesse pinkman?' : ['Alcohol problemen ', 'Seks problemen ', 'Hij was een junkie ',  2],

          'Hoe ging jesse pinkman zijn vriendin dood?' : ['Gestikt door haar kots in haar slaap ', 'Door het cartel ', 'Vermoord door jesse ',  0],

          'Wie is Gus fring? ' : ['Een kip restaurant eigenaar ', 'Allebei', 'Walter whites koper ',  1],

          'Door wie ging mike dood?' : ['Walter white ', 'Gus fring ', 'De mexican cartel ',  0],

          'waarom was jesse opgesloten door todd en zijn neven? ' : ['Om hem te zien lijden ', 'Uit een onbetaalde achterstand ', 'Om meth voor hun te maken ',  2],

          'Hoe ging the main character dood?' : ['Door jesse te redden van todd ', 'Door neergeschoten door de politie ', 'Door kanker ',  0],

          

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