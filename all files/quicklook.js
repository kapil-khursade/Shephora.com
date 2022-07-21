


window.onload = function() {
    let quicklookArr=JSON.parse(localStorage.getItem("quicklook"))||[]
    quicklookArr.forEach(function (el){
        let img=document.createElement("img");
        img.src=el.img;

        let name=document.createElement("h1");
        name.innerText=el.name;

        let price=document.createElement("h1");
        price.innerText="Price: $"+el.price;

        let addtocart=document.createElement("button");
        addtocart.innerText="Add To Cart"
        addtocart.setAttribute("id", "addtocart")

        let review=document.createElement("div");

        let rev=document.createElement("h2");
        rev.innerText="Reviews For the Product"

        let rev1=document.createElement("p");
        rev1.innerText="Buyer1: ****_ :  Awsome product "

        let rev2=document.createElement("p");
        rev2.innerText="Buyer2: ***** :  Must Buy "

        let rev3=document.createElement("p");
        rev3.innerText="Buyer3: ***__ :  Quality Product "
        
        review.append(rev, rev1, rev2, rev3)

        document.querySelector("#quicklook").append(img, name, price, addtocart, review);
        console.log(el);
    })
  };