function check() {
  var q1=document.myform.q1.value;
  var q2=document.myform.q2.value;
  var q3=document.myform.q3.value;
  var q4=document.myform.q4.value;
  var q5=document.myform.q5.value;
  var q6=document.myform.q6.value;    
  var q7=document.myform.q7.value;
  var q8=document.myform.q8.value;
  var q9=document.myform.q9.value;
  var q10=document.myform.q10.value;
  var count=0;   //when the game starts, the score/count will be 0
  
  
 
  if(q1=="a"){  //answers to the questions
    count++;    //If right, the score will go up by one
}
  if(q2=="d"){
    count++;
  }
  if(q3=="c"){
    count++;
  }
  if(q4=="c"){
    count++;
  }
  if(q5=="b"){
    count++;
  }
  if(q6=="d"){
    count++;
  }
  if(q7=="a"){
    count++;
  }
  if(q8=="c"){
    count++;
  }
  if(q9=="b"){
    count++;
  }
  if(q10=="a"){
    count++;
  }
 //for (i = 0; i < correct.length; i++)
     //correct[i].style.color = "green";
  
 var correct = document.querySelectorAll(".correct");
  
   for (i = 0; i < correct.length; i++)
     correct[i].style.color = "green";
  
  //correct.style.color = "green";
 
  
  alert("You got "+count+" points");   //This lets the user know their score once they click submit
}


 
