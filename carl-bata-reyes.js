
    var correctSound = new Audio("omg_right.m4a"); 
var wrongSound = new Audio("wrong.m4a"); 

var quiz = {

  data: [
    {
      q : "Who was the former mayor of cabanatuan city that was named after Sci-High?",
      o : [
        "Honorato C. Perez, Sr.",
        "Myca Elizabeth R. Vergara",
        "Sergio Ocampo",
        "Cesar C. Violago"
      ],
      a : 0 
    },
    {
      q : "Who is the current principal of Sci High??",
      o : [
        "Dr. Leonora de Jesus",
        "Sir Jeric Calleja",
        "Helen D. Wycoco",
        "Sir Alberto Rufino Santos"
      ],
      a : 3
    },
    {
      q : "Who is the beloved school supplies seller next to the grade 7 building?",
      o : [
        "Mang Tomas",
        "Mang Anghang",
        "Mang Clay",
        "Mang Rey"
      ],
      a : 3
    },
    {
      q : " When was Honorato C. Perez, Sr. Memorial Science highschool founded?",
      o : [
        "April 19, 1985",
        "April 20, 1985",
        "April 21, 1985",
        "April 22, 1985"
      ],
      a : 0
    },
    {
      q : "How many students are in Honorato C. Perez, Sr. Memorial Science highschool currently?",
      o : [
        "1416",
        "1415",
        "1414",
        "1413"
      ],
      a : 0
    },
    {
      q : "How many teachers are composed in the faculty?",
      o : [
        "64",
        "63",
        "62",
        "61"
      ],
      a : 3
    },
    {
      q : "What was the original name of Sci-high before it got renamed into Honorato C. Perez, Sr. Memorial Science High School by virtue of Sangguniang Panlungsod Ordinance No. 96-002, s. 1996 dated February 2, 1996?",
      o : [
        "Cabanatuan City High School",
        "Cabanatuan City National Science High School",
        "Science High School of Cabanatuan",
        "Cabanatuan City Science High School"
      ],
      a : 3
    },
    {
      q : "Who founded Honorato C. Perez, Sr. Memorial Science High School?",
      o : [
        "Dr. Ester C. Baylon",
        "Honorato C. Perez",
        "JULIUS CESAR VERGARA",
        "Atty. Angelo Perez"
      ],
      a : 0
    },
    {
      q : "Where is Honorato C. Perez, Sr. Memorial Science High School located?",
      o : [
        "Sumacab Este",
        "Mabini Extension",
        "Aduas Norte",
        "Bangad"
      ],
      a : 1
    },
    {
      q : "Who is the best ICT teacher in Honorato C. Perez, Sr. Memorial Science High School and debatably the best ICT teacher in the whole world?",
      o : [
        "Jeric Calleja",
        "Jerik Calleja",
        "Jerick Calleja",
        "Jeric Calleje"
      ],
      a : 0
    }
  ],
	

  hWrap: null, 
  hQn: null, 
  hAns: null,


  now: 0, 
  score: 0, 


  init: () => {
   
    quiz.hWrap = document.getElementById("yung choices");

   
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

   
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

   
    quiz.draw();
  },

  
  draw: () => {
   
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

  
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => quiz.select(label));
      quiz.hAns.appendChild(label);
    }
  },

 
  select: (option) => {
 
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }


    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
		alert("Your right");
		correctSound.play();
    } else {
      option.classList.add("wrong");
		alert("Your wrong");
			wrongSound.play();
    }

   
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `May tama kang ${quiz.score}/${quiz.data.length}.
Scilinian ka ba talaga?`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

 
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }



};

window.addEventListener("load", quiz.init);