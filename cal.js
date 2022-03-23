const button = document.querySelector('#btn-calculate');
button.addEventListener('click',function(event){
  const firstNum = Number(document.querySelector('#first-num').value);
  const secondNum = Number(document.querySelector('#second-num').value);
  
  var evaluation = document.getElementById("operators").value;
  console.log({evaluation});
  if(evaluation === "addition"){
     const resultElement = document.querySelector("#result");
      resultElement.innerHTML = firstNum + secondNum;
  }else if(evaluation === "subtraction"){
      const resultElement = document.querySelector("#result");
      resultElement.innerHTML = firstNum - secondNum;
  }else if(evaluation === "multiply"){
      const resultElement = document.querySelector("#result");
      resultElement.innerHTML = firstNum * secondNum;
  }else if(evaluation === "division"){
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = firstNum / secondNum;
}  else if(evaluation === "modulo"){
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = firstNum % secondNum;
}
});

// getAttribute()
// setAttribute()
// Change or update class
// --- Changing Styles
// .style
// .style.{property}
// .className = "{className}"
// .classList.add({className});
// .classList.remove({className});
// .classList.toggle({});





