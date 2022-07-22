

document.querySelector("#paymentform>form").addEventListener("click", function(){
   let siginstat=JSON.parse(localStorage.getItem("sigin-data"))||[]
   let cartarr=JSON.parse(localStorage.getItem("cart"))||[];

   if (siginstat==0){
    alert("Please Login")
   }else{
    if(cartarr.length==0){
        alert("Cart is empty!")
       }else{
        window.location.href="otp.html"
        alert("OTP sent!");
       } 
   }
   
})