//main function to check user answers//
function check(){


	var question1 = document.getElementById("quiz").Q1.value;
	var question2 = document.getElementById("quiz").Q2.value;
	var question3 = document.getElementById("quiz").Q3.value;
	var counter = 0;

	if (question1 == "Vienne"){
		counter++;
}
    if (question2 == "Dublin") {
    	counter++;
}
    if (question3 == "Katmandou") {
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
     }

   document.getElementById("after_click").style.visibility="visible";


   document.getElementById("msg").innerHTML = messages[range];
   document.getElementById("correct_answers").innerHTML = "you got " + counter + " correct.";

}

//reflesh page function//

function myFunction() {
    location.reload();
}

