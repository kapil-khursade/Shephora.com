
 // Dynamic appeaarance of form
 document.querySelector("#signin>h4").addEventListener("click", function(){
    document.querySelector("#hover-form").style.display="inherit";
    document.querySelector("#create-account-form").style.display="none";
    document.querySelector("#signin-form").style.display="none";
   });
   document.querySelector("body").addEventListener("dblclick", function(){
    document.querySelector("#hover-form").style.display="none";
    document.querySelector("#create-account-form").style.display="none";
    document.querySelector("#signin-form").style.display="none";
   });

   document.querySelector("#sigin-butn").addEventListener("click", function (){
    document.querySelector("#signin-form").style.display="inherit";
    document.querySelector("#hover-form").style.display="none";
   })

   document.querySelector("#creat-butn").addEventListener("click", function(){
    document.querySelector("#create-account-form").style.display="inherit";
    document.querySelector("#hover-form").style.display="none";
    document.querySelector("#signin-form").style.display="none";
   })

   document.querySelector("#signin-form>button").addEventListener("click", function(){
    document.querySelector("#hover-form").style.display="none";
    document.querySelector("#signin-form").style.display="none";
    document.querySelector("#create-account-form").style.display="inherit";
   })

//    Input takings
// 1.Create account
let createKeys=document.querySelector("#create-account-form>form");
let createArr=JSON.parse(localStorage.getItem("create-account-data"))||[];
document.querySelector("#create-account-form>form").addEventListener("submit", function(event){
    
    let obj={
        firstname:createKeys.FirstName.value,
        lastname:createKeys.LastName.value,
        email:createKeys.Emailaddress.value,
        password:createKeys.Password.value,
        mobilno:createKeys.PhoneNo.value,
        month:createKeys.Month.value,
        day:createKeys.Day.value,
    }
    createArr.push(obj)
    console.log(createArr);
    localStorage.setItem("create-account-data", JSON.stringify(createArr));
    alert("Account Created")
})


// 2.sigin validadtion
    let signkeys=document.querySelector("#signin-form>form");
    let signinArr=[];
    document.querySelector("#signin-form>form").addEventListener("submit",function(event){
        event.preventDefault();
        let log=false;
        createArr=JSON.parse(localStorage.getItem("create-account-data"))||[]
        createArr.forEach(function (el){
            if (el.email==signkeys.email.value&&el.password==signkeys.password.value){
                let obj={
                 email:signkeys.email.value,
                 password:signkeys.password.value,
                 firstname:el.firstname
             }
             signinArr.push(obj)
             console.log(signinArr)
             localStorage.setItem("sigin-data", JSON.stringify(signinArr))||[]; 
             alert("Login Succesfull");
             document.querySelector("#signin-form").style.display="none";
             document.querySelector("#signin>h4").innerText="Hi, "+el.firstname;
             document.querySelector("#foot-name").innerText=el.firstname+", you";
             log=true;
            }
            })

            if(log==false){
                alert("Login Failed")
            }
        
        })

        // Siginin status

         signinArr=JSON.parse(localStorage.getItem("sigin-data"))||[]
        if(signinArr.length!=0){
            console.log(signinArr);
            // document.querySelector("#signin-form").style.display="none";
            document.querySelector("#signin>h4").innerText="Hi, "+signinArr[0].firstname;
            document.querySelector("#foot-name").innerText=signinArr[0].firstname+", you";
        }


        // signout
        document.querySelector("#signout").addEventListener("click", function(){
            
            if(signinArr.length!=0){
                window.location.reload();
                alert("Loged Out");
                signinArr=[];
                localStorage.setItem("sigin-data", JSON.stringify(signinArr));
            }else{
                alert("You are not Signed in.")
            }
            
        });

        // Makeup Page
        document.querySelector("#all-makeup").addEventListener("click", function(){
            console.log("all makeup");
            window.location.href="all_makeup.html"
        })

        // Acessing favourite page
        document.querySelector("#shoping-logo>div:nth-child(2)").addEventListener("click", function(){
            document.querySelector("#shoping-logo>div:nth-child(2)>img").style.border="1px solid red";
            window.location.href="favourite.html"
        })

        // Acessing shopping cart
        document.querySelector("#shoping-logo>div:nth-child(3)").addEventListener("click", function(){
            document.querySelector("#shoping-logo>div:nth-child(3)>img").style.border="1px solid red";
            window.location.href="add_to_cart.html"
        })

        // Returning to homepage

        document.querySelector("#logo").addEventListener("click", function(){
            window.location.href="index.html"
        })




      