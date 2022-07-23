
 let siginstat=JSON.parse(localStorage.getItem("sigin-data"))||[]
 let paymentdata=JSON.parse(localStorage.getItem("paymentData"))||[];
let cartarr=JSON.parse(localStorage.getItem("cart"))||[];

 if (cartarr.length!=0){
    document.querySelector("#totalprice").innerText=paymentdata[0].totprice;
    document.querySelector("#totalitems").innerText=paymentdata[0].totitem;
 }

document.querySelector("#paymentform>form").addEventListener("click", function(){
   if (siginstat==0){
    alert("Please Login")
   }else{
    if(cartarr.length==0){
        alert("Cart is empty!")
       }else{
        window.location.href="otp.html"
        alert("OTP sent!");
        cartarr=[];
        localStorage.setItem("cart", JSON.stringify(cartarr));
       } 
   }
   
})