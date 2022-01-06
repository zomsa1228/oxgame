function change1()
    {
    var elem= document.getElementById("myButton1");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change2()
    {
    var elem= document.getElementById("myButton2");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change3()
    {
    var elem= document.getElementById("myButton3");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change4()
    {
    var elem= document.getElementById("myButton4");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change5()
    {
    var elem= document.getElementById("myButton5");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change6()
    {
    var elem= document.getElementById("myButton6");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change7()
    {
    var elem= document.getElementById("myButton7");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

    function change8()
    {
    var elem= document.getElementById("myButton8");
      if (elem.value=="◯") elem.value= "✕";
      else elem.value= "◯";
      turns();
    }

  function change9()
  {
    // var elem= document.getElementById("myButton9");
    //   if (elem.value=="◯") elem.value= "✕";
    //   else elem.value= "◯";
      ox(hantei);
      console.log(hantei);
      document.getElementById("myButton9") = hantei;
      turns();
      console.log(turn.textContent);
    }


    
 function sample(){
  var text ="";
  
  text = document.getElementById("text1").value;
  console.log(text);
  document.getElementById("area1").innerText = text;
  console.log(text);
 }

function ox(hantei){
hantei = 0;
hantei = document.getElementById("turn").textContent;
Number(hantei);
if(hantei == 1){
hantei = "◯";
console.log(hantei);
return hantei;

}else if(hantei == 2){
  console.log("✕");

  }else if(hantei == 3){
    console.log("◯");

  }else if(hantei == 4){
    console.log("✕");

  }else if(hantei == 5){
    console.log("◯");

  }else if(hantei == 6){
    console.log("✕");

  }else if(hantei == 7){
    console.log("◯");

  }else if(hantei == 8){
    console.log("✕");

  }else if(hantei == 9){
    console.log("◯");

  }else{

  }
}

function turns(){
var turn = 0;

turn = document.getElementById("turn").textContent;
console.log(turn);

Number(turn); 
console.log(turn);

if(turn == 1){
  turn = 2;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  
}else if (turn == 2){ 
  turn = 3;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  
}else if (turn == 3){
  turn = 4;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 4){
  turn = 5;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 5){ 
  turn = 6;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 6){ 
  turn = 7;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 7){ 
  turn = 8;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 8){ 
  turn = 9;
  document.getElementById("turn").innerText = turn;
  console.log(turn);
  

}else if (turn == 9){ 
  turn = "終了しました";
  document.getElementById("turn").innerText = turn;
  document.getElementById
  console.log(turn);
  

}
}

//0 1 2
//3 4 5
//6 7 8