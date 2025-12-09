document.getElementById("log-out").addEventListener("click", function(){
    window.location.href="./index.html"
})


const validPin = 1122 ;
document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault()
    const bank = document.getElementById("select-bank").value
    const accountNumber =document.getElementById("add-account-number").value
    const amount =parseInt(document.getElementById("add-amount").value)
    const pin =parseInt(document.getElementById("add-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length !== 11){
        alert("please provide valid account number")
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin ")
        return;
    }
    if(amount <= 0 ){
        alert("please added valid amount")
        return;
    }
    
    const totalAvailableBalance =  availableBalance +  amount
    document.getElementById("available-balance").innerText = totalAvailableBalance

})

//cash out future
document.getElementById("withdraw-btn").addEventListener("click", function(event){
    event.preventDefault()
    const accountNumber =document.getElementById("add-agent-number").value
    const amount =parseInt(document.getElementById("withdraw-amount").value)
    const pin =parseInt(document.getElementById("add-cash-out-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length !== 11){
        alert("please provide valid agent number")
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin ")
        return;
    }
    if(availableBalance < amount ){
        alert("insufficient balance")
        return;
    }
    
    const newAvailableBalance =  availableBalance -  amount
    document.getElementById("available-balance").innerText = newAvailableBalance

})

//Transfer money

document.getElementById("sendNow-btn").addEventListener("click", function(event){
    event.preventDefault()
    const accountNumber =document.getElementById("add-user-account-number").value
    const amount =parseInt(document.getElementById("transfer-amount").value)
    const pin =parseInt(document.getElementById("add-transfer-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length !== 11){
        alert("please provide valid agent number")
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin ")
        return;
    }
    if(availableBalance < amount ){
        alert("insufficient balance")
        return;
    }
    
    const newAvailableBalance =  availableBalance -  amount
    document.getElementById("available-balance").innerText = newAvailableBalance

})

// pay bill

document.getElementById("pay-bill-btn").addEventListener("click", function(event){
    event.preventDefault()
    const billType = document.getElementById("select-bill-type").value
    const accountNumber =document.getElementById("add-biller-account-number").value
    const amount =parseInt(document.getElementById("add-pay-bill-amount").value)
    const pin =parseInt(document.getElementById("add-pay-bill-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accountNumber.length > 17){
        alert("please provide valid account number")
        return;
    }
    if(pin !== validPin){
        alert("please provide valid pin ")
        return;
    }
    if(availableBalance < amount ){
        alert("insufficient balance")
        return;
    }
    
    const totalAvailableBalance =  availableBalance - amount
    document.getElementById("available-balance").innerText = totalAvailableBalance

})







//toggoling future

//document.getElementById("add-money-button").addEventListener("click", function(){
    //document.getElementById("cash-out").style.display = "none"
    //document.getElementById("transfer-money").style.display = "none"
    //document.getElementById("get-bonus").style.display ="none"
    //document.getElementById("pay-bill").style.display ="none"
    //document.getElementById("add-money").style.display ="block"
//})

//document.getElementById("cash-out-button").addEventListener("click", function(){
   //document.getElementById("add-money").style.display = "none"
   //document.getElementById("transfer-money").style.display = "none"
   //document.getElementById("get-bonus").style.display ="none"
   // document.getElementById("pay-bill").style.display ="none"
   //document.getElementById("cash-out").style.display ="block"
//})

//document.getElementById("transfer-money-button").addEventListener("click", function(){
 //  document.getElementById("cash-out").style.display = "none"
 //  document.getElementById("add-money").style.display ="none"
 //  document.getElementById("get-bonus").style.display ="none"
 //   document.getElementById("pay-bill").style.display ="none"
 //  document.getElementById("transfer-money").style.display ="block"
//})

//document.getElementById("get-bonus-button").addEventListener("click", function(){
  // document.getElementById("cash-out").style.display = "none"
  // document.getElementById("add-money").style.display ="none"
  // document.getElementById("transfer-money").style.display ="none"
  //  document.getElementById("pay-bill").style.display ="none"
  // document.getElementById("get-bonus").style.display ="block"
//})

//document.getElementById("pay-bill-button").addEventListener("click", function(){
//   document.getElementById("cash-out").style.display = "none"
 //  document.getElementById("add-money").style.display ="none"
//   document.getElementById("transfer-money").style.display ="none"
//   document.getElementById("get-bonus").style.display ="none"
//   document.getElementById("pay-bill").style.display ="block"
//})

//button hobar toggle buttons of function

function hobarButtonToggle(id){
    const formBtns=document.getElementsByClassName("form-btn")

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

//button toggle future of function

function handleToggle(id){
    const forms = document.getElementsByClassName("form");

    for(const form of forms){
        form.style.display ="none";
    }

    // যদি transaction হয় flex রাখবে, নয়তো block
    document.getElementById(id).style.display = (id === "transaction") ? "flex" : "block";
}



document.getElementById("add-money-button").addEventListener("click", function(){
    handleToggle("add-money")
    hobarButtonToggle("add-money-button")
})

document.getElementById("cash-out-button").addEventListener("click", function(){
    handleToggle("cash-out")
    hobarButtonToggle("cash-out-button")
})

document.getElementById("transfer-money-button").addEventListener("click", function(){
    handleToggle("transfer-money")
    hobarButtonToggle("transfer-money-button")
})

document.getElementById("get-bonus-button").addEventListener("click", function(){
    handleToggle("get-bonus")
    hobarButtonToggle("get-bonus-button")
})

document.getElementById("pay-bill-button").addEventListener("click", function(){
    handleToggle("pay-bill")
    hobarButtonToggle("pay-bill-button")
})

document.getElementById("transaction-button").addEventListener("click", function(){
    handleToggle("transaction")
    hobarButtonToggle("transaction-button")
})




