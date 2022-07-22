

let favArr=JSON.parse(localStorage.getItem("fav"))||[];
let cartArr=JSON.parse(localStorage.getItem("cart"))||[];

window.onload = function(){
    document.querySelector("#favdiv").innerHTML="";

    favArr.forEach(function (el, index){
        let card= document.createElement("div")

        let img=document.createElement("img");
        img.src=el.img;

        let name=document.createElement("h1");
        name.innerText=el.name;

        let price=document.createElement("h1");
        price.innerText="Price: $"+el.price;

        let addtocart=document.createElement("button");
        addtocart.innerText="Add To Cart"
        addtocart.addEventListener("click", function(){
        cartArr.push(el);
        localStorage.setItem("cart", JSON.stringify(cartArr));
        favArr.splice(index, 1)
        localStorage.setItem("fav", JSON.stringify(favArr));
        location.reload();
        })

        let remove=document.createElement("button");
        remove.innerText="Remove"
        remove.addEventListener("click", function(){
            // console.log(el, index);
            favArr.splice(index, 1)
            localStorage.setItem("fav", JSON.stringify(favArr));
            location.reload();
        })

        card.append(img, name, price, addtocart, remove);

        document.querySelector("#favdiv").append(card);
    });

    if(favArr.length==0){
        let error=document.createElement("h3");
        error.innerText="You haven't added any product to your Loves list."
        document.querySelector("#favdiv").append(error);
    }

    document.querySelector("#totalfav").innerText=favArr.length
}



