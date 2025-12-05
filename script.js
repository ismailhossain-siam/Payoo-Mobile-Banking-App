document.getElementById("buttonClick").addEventListener("click",function (e){
  e.preventDefault()
  const mobileNumber = 1867043510
  const pinNumber = 1122

  const mobileNumberValue = document.getElementById("mobile-number").value
  const  mobileNumberValueConverted = parseInt (mobileNumberValue)
  const pinNumberValue = document.getElementById("pin-number").value
  const  pinNumberValueConverted = parseInt (pinNumberValue)

 if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted ===  pinNumber)
 {
    window.location.href="./home.html"
 }
else{
    alert("invalid input")  }

})