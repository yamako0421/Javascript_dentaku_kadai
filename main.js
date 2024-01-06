function clickbutton(target) {
  let result = document.getElementById("result")
  let target_value = target.innerHTML;

 if (target_value == "AC"){
    result.innerHTML = "0"
  } else if (target_value == "="){
    result.innerHTML = eval(result.innerHTML)
 }else if (result.innerHTML == "0"||result.innerHTML == "00"){
    result.innerHTML = target_value
    if(!isNaN(target_value) || target_value === "+" || target_value === "-"|| target_value === "*"|| target_value === "/"){
      result.innerHTML = target_value
    }
  }else{
    if(isNaN(target_value)){
      var migihasi = result.innerHTML.slice(-1)
      if(!isNaN(migihasi)){
        result.innerHTML += target_value              
      }
    }else{
      result.innerHTML += target_value              
    }
  }
} 
