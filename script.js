let calculation = document.getElementById("calculation")

function allclear(){
    calculation.value = ""
}

function button(e){
    calculation.value += e.value
}

function isequalto(){
    try{
    let result = eval(calculation.value)
    calculation.value = result
    }
    catch(err){
        alert("Please make sure that the inputs of this calculator are correct!")
    }
}