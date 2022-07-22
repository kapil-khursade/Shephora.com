
let favArr=JSON.parse(localStorage.getItem("fav"))||[];

for(i=0; i<20; i++){
    document.querySelectorAll(".add-btn")[i].addEventListener("click", function(event){
        let obj={
            img:event.target.parentNode.querySelectorAll("img")[0].src,
            name:event.target.parentNode.querySelectorAll("h4")[1].innerText, 
            price:event.target.parentNode.querySelectorAll("h3 span")[0].innerText
        }
        favArr.push(obj);
        event.target.parentNode.querySelectorAll(".add-btn")[0].style.backgroundColor="red"
        localStorage.setItem("fav", JSON.stringify(favArr));
    });
}

// quicklook

let quicklookArr=[];
for(i=0; i<20; i++){
    document.querySelectorAll("#list>div>img")[i].addEventListener("click", function(event){
        let obj={
            img:event.target.parentNode.querySelectorAll("img")[0].src,
            name:event.target.parentNode.querySelectorAll("h4")[1].innerText, 
            price:event.target.parentNode.querySelectorAll("h3 span")[0].innerText
        }
        quicklookArr.push(obj);
        console.log(quicklookArr);
        window.location.href="quicklook.html"
        localStorage.setItem("quicklook", JSON.stringify(quicklookArr));
        quicklookArr=[]
    });
}

