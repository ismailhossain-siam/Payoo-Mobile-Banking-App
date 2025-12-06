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





//toggoling future

document.getElementById("add-money-button").addEventListener("click", function(e){
   document.getElementById("cash-out").style.display = "none"
   document.getElementById("add-money").style.display ="block"
})

document.getElementById("cash-out-button").addEventListener("click", function(e){
   document.getElementById("add-money").style.display = "none"
   document.getElementById("cash-out").style.display ="block"
})
