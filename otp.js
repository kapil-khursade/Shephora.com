

let target=new Date().getTime()+180000;

let x = setInterval(function(){
let now=new Date().getTime();
let dist=target-now;
let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dist % (1000 * 60)) / 1000);

//   console.log( minutes + "m " + seconds + "s ");
document.querySelector("#exp").innerText=minutes + "m " + seconds + "s "

// otp recived
if(dist===170000){
    alert("OTP is 1234");
}



// otp expires
if(dist<0){
    history.back();
    alert("OTP Expired");
} 
})

document.querySelector("#otpbox>form").addEventListener("submit", function(event){
    
    if (document.querySelector("#otpbox>form").OTP.value=="1234"){
        window.location.href="index.html";
        alert("Payment Successfull");
        let empty=[];
        localStorage.setItem("cart", JSON.stringify(empty));
    }else{
        window.location.href="Payment.html";
        alert("Wrong OTP");
    }

    // console.log(document.querySelector("#otpbox>form").OTP.value);
})