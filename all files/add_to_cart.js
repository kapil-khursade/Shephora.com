

let cartArr=JSON.parse(localStorage.getItem("cart"))||[];
let sum=0;
window.onload = function(){
    document.querySelector("#shopcart").innerHTML="";

    cartArr.forEach(function (el, index){
        let card= document.createElement("div")

        let img=document.createElement("img");
        img.src=el.img;

        let name=document.createElement("h1");
        name.innerText=el.name;

        let price=document.createElement("h1");
        price.innerText="Price: $"+el.price;
        sum=sum+Number(el.price)

        let remove=document.createElement("button");
        remove.innerText="Remove"
        remove.addEventListener("click", function(){
            // console.log(el, index);
            cartArr.splice(index, 1)
            localStorage.setItem("cart", JSON.stringify(cartArr));
            location.reload();
        })

        card.append(img, name, price, remove);

        document.querySelector("#shopcart").append(card);
    });

    if(cartArr.length==0){
        let error=document.createElement("h3");
        error.innerText="Your shopping cart is Empty :("
        document.querySelector("#shopcart").append(error);
    }
    
    document.querySelector("#totalcart").innerText=cartArr.length;
    document.querySelector("#totalprice").innerText="$"+sum;

    // proceed payment
let paymentData=[];
document.querySelector("#payment>button").addEventListener("click", function(){
let obj={
    totprice:sum,
    totitem:cartArr.length
}
paymentData.push(obj);
localStorage.setItem("paymentData", JSON.stringify(paymentData));
window.location.href="Payment.html"
})

}

