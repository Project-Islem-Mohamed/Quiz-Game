//main function to check user answers(Geographic Questions " 1")//
function check() {
  var question1 = document.getElementById("quiz").Q1.value;
  var question2 = document.getElementById("quiz").Q2.value;
  var question3 = document.getElementById("quiz").Q3.value;
  var counter = 0;

  if (question1 === "Vienne") {
    counter++;
  }
  else {  document.getElementById("msg4").innerHTML = "the correct answer is : Vienne";}

  if (question2 === "Dublin") {
    counter++;
  }
  else {  document.getElementById("msg5").innerHTML = "the correct answer is : Dublin";}

  if (question3 === "Katmandou") {
    counter++;
  }
  else {  document.getElementById("msg6").innerHTML = "the correct answer is : Katmandou";}


  var messages = ["Good job", "Not bad", "You really need to do better"];
  var range;

  if (counter < 1) {
    range = 2;
  }

  if (counter > 0 && counter < 3) {
    range = 1;
  }

  if (counter > 2) {
    range = 0;
    document.getElementById("m").innerHTML = "you can test yourself in next level";
     document.getElementById("buttonlevel2").className = 'show'; 
  }

  document.getElementById("after_click").style.visibility = "visible";

  document.getElementById("msg").innerHTML = messages[range];
  document.getElementById("correct_answers").innerHTML =
    "you got " + counter + " correct.";
}

//reflesh page function//

function myFunction() {
  location.reload();
}


//////////////////////sports Questions /////////////
function check_2() {
  var question1 = document.getElementById("quiz2").k1.value;
  var question2 = document.getElementById("quiz2").k2.value;
  var question3 = document.getElementById("quiz2").k3.value;
  var counter = 0;

  if (question1 === "Soccer") {
    counter++;
  }
  else {  document.getElementById("msg7").innerHTML = "the correct answer is : Vienne";}

  if (question2 === "Swimming") {
    counter++;
  }
  else {  document.getElementById("msg8").innerHTML = "the correct answer is : Vienne";}

  if (question3 === "Italy") {
    counter++;
  }
  else {  document.getElementById("msg9").innerHTML = "the correct answer is : Vienne";}


  var messages = ["too smart", "Not bad", "You really need to do better"];
  var range;

  if (counter < 1) {
    range = 2;
  }

  if (counter > 0 && counter < 3) {
    range = 1;
  }

  if (counter > 2) {
    range = 0;
    document.getElementById("m").innerHTML = "you can test yourself in next level";
    document.getElementById("buttonlevel2").className = 'show'; 
  }

  document.getElementById("after_click").style.visibility = "visible";

  document.getElementById("msg").innerHTML = messages[range];
  document.getElementById("correct_answers").innerHTML =
    "you got " + counter + " correct.";
}

//refresh page function//

function myFunction() {
  location.reload();
}

///////////////// Music Questions //////////////////
function check_3() {
  var question1 = document.getElementById("quiz3").QU1.value;
  var question2 = document.getElementById("quiz3").QU2.value;
  var question3 = document.getElementById("quiz3").QU3.value;
  var counter = 0;

  if (question1 === "Curtis James Jackson") {
    counter++;
  }

  else {  document.getElementById("msg1").innerHTML = "the correct answer is : Curtis James Jackson";}

  if (question2 === "Tones and I") {
    counter++;
  }

  else {  document.getElementById("msg2").innerHTML = "the correct answer is : Tones and I ";}

  if (question3 === "Tunisia") {
    counter++;
  }

  else {  document.getElementById("msg3").innerHTML = "the correct answer is : Tunisia ";}


  var messages = ["Good job", "Not bad", "You really need to do better"];
  var range;

  if (counter < 1) {
    range = 2;
  }

  if (counter > 0 && counter < 3) {
    range = 1;
  }

  if (counter > 2) {
    range = 0;
    document.getElementById("m").innerHTML = "you can test yourself in next level";
    document.getElementById("buttonlevel2").className = 'show'; 
  }

  document.getElementById("after_click").style.visibility = "visible";

  document.getElementById("msg").innerHTML = messages[range];
  document.getElementById("correct_answers").innerHTML =
    "you got " + counter + " correct.";
}

///refresh page function////


function myFunction() {
  location.reload();
}



//main function to check user answers(Geographic Questions " 2")////////////////////////////////


function checkG0(){


	var question1 = document.getElementById("quiz11").Q11.value;
	var question2 = document.getElementById("quiz11").Q22.value;
	var question3 = document.getElementById("quiz11").Q33.value;
	var counter = 0;

	if (question1 == "Vienne11"){
		counter++;
}

    if (question2 == "Dublin11") {
    	counter++;
}
    if (question3 == "Katmandou11") {
    	counter++
    }  


    var messages = ["Good job", "Not bad", "You really need to do better"];
    var range;

     if (counter < 1){
     	 range = 2;
     }

      if (counter > 0 && counter < 3){
     	 range = 1;
     }

        if (counter > 2){
         range = 0;
         document.getElementById("m").innerHTML = "you can test yourself in next level";
            document.getElementById("buttonlevel2").className = 'show'; 
         
     }

   document.getElementById("after_click").style.visibility="visible";


   document.getElementById("msg").innerHTML = messages[range];
   document.getElementById("correct_answers").innerHTML = "you got " + counter + " correct.";
   
}

//reflesh page function//

function myFunction() {
    location.reload();
}