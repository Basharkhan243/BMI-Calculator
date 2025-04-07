const form=document.querySelector("form");
form.addEventListener('submit',function(input){
     input.preventDefault()
     const result=document.querySelector("#result")
     const message=document.querySelector("#message")
     message.innerHTML="";
     result.innerHTML="";
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
 
    if(height ===""|| height<0 || isNaN(height)){
        result.innerHTML="Please enter a valid height"
    }
    else if(weight ==""|| weight<0 || isNaN(weight)){
        result.innerHTML="Please enter a valid weight"
    }
    else{
        const value=weight/Math.pow(height/100,2)
        result.innerHTML="Your BMI is "+value.toFixed(2)
        if(value<18.5){
        message.innerHTML+="<br>Underweight"
        }
        else if(value>=18.5 && value<24.9){
            message.innerHTML+="<br>Normal weight"
        }
        else if(value>=25 && value<29.9){
        message.innerHTML+="<br>Overweight"
        }
        else{
            message.innerHTML+="<br>Obesity"
        }
    }
})