// getting all required elements

// getting all element for search box only start here
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// getting all element for search box only end here

//code start for searchbox 


// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// code end for search box

// code start for slider

var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 3000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    };

// code end for slider


// code start for winter Essential offer section
var next_offer = document.getElementById("next_offer");
var prev_offer = document.getElementById("prev_offer");
var offer_slider =document.getElementById("offer_slider");

next_offer.addEventListener('click',() => {
  offer_slider.style.left="-100%";
  prev_offer.style.display="block";
  next_offer.style.display="none";
})

prev_offer.addEventListener('click',() => {
  offer_slider.style.left="0";
  next_offer.style.display="block";
  prev_offer.style.display="none";
})
// code end for winter Essential offer section 

// code start for deal section
var next_deal = document.getElementById("next_deal");
var prev_deal = document.getElementById("prev_deal");
var deal_slider =document.getElementById("deal_slider");

next_deal.addEventListener('click',() => {
  deal_slider.style.left="-100%";
  prev_deal.style.display="block";
  next_deal.style.display="none";
})

prev_deal.addEventListener('click',() => {
  deal_slider.style.left="0";
  next_deal.style.display="block";
  prev_deal.style.display="none";
})


// code end for deal section

// code start for best electronic section start
var next_best_electronics = document.getElementById("next_best_electronics");
var prev_best_electronics = document.getElementById("prev_best_electronics");
var electronic_slide =document.getElementById("electronic_slide");

next_best_electronics.addEventListener('click',() => {
  electronic_slide.style.left="-100%";
  prev_best_electronics.style.display="block";
  next_best_electronics.style.display="none";
})

prev_best_electronics.addEventListener('click',() => {
  electronic_slide.style.left="0";
  next_best_electronics.style.display="block";
  prev_best_electronics.style.display="none";
})




// code end for best electronic section start

// fashion brand on discount section start
var next_fashion_brand = document.getElementById("next_fashion_brand");
var prev_fashion_brand = document.getElementById("prev_fashion_brand");
var fashion_brand_slider =document.getElementById("fashion_brand_slider");

next_fashion_brand.addEventListener('click',() => {
  fashion_brand_slider.style.left="-100%";
  prev_fashion_brand.style.display="block";
  next_fashion_brand.style.display="none";
})

prev_fashion_brand.addEventListener('click',() => {
  fashion_brand_slider.style.left="0";
  next_fashion_brand.style.display="block";
  prev_fashion_brand.style.display="none";
})
// fashion brand oon discount section end

// code for trending deals start
var next_trending_deals = document.getElementById("next_trending_deals");
var prev_trending_deals = document.getElementById("prev_trending_deals");
var trending_deals_slide =document.getElementById("trending_deals_slider");

next_trending_deals.addEventListener('click',() => {
  trending_deals_slide.style.left="-100%";
  prev_trending_deals.style.display="block";
  next_trending_deals.style.display="none";
})

prev_trending_deals.addEventListener('click',() => {
  trending_deals_slide.style.left="0";
  next_trending_deals.style.display="block";
  prev_trending_deals.style.display="none";
})
// code for trending deals end

// code for featured brand section start
var next_featured_brand = document.getElementById("next_featured_brand");
var prev_featured_brand = document.getElementById("prev_featured_brand");
var featured_brand_slider =document.getElementById("featured_brand_slider");


next_featured_brand.addEventListener('click',() => {
  featured_brand_slider.style.left="-1400px";
  
})

prev_featured_brand.addEventListener('click',() => {
  featured_brand_slider.style.left="0";
  
})

// code for featured brane section end

// code for fashion best seller section start 
var next_fashion_best_seller = document.getElementById("next_fashion_best_seller");
var prev_fashion_best_seller = document.getElementById("prev_fashion_best_seller");
var fashion_best_seller_slider =document.getElementById("fashion_best_seller_slider");


next_fashion_best_seller.addEventListener('click',() => {
  fashion_best_seller_slider.style.left="-1400px";
  prev_fashion_best_seller.style.display="block";
  next_fashion_best_seller.style.display="none";
})

prev_fashion_best_seller.addEventListener('click',() => {
  fashion_best_seller_slider.style.left="0";
  next_fashion_best_seller.style.display="block";
  prev_fashion_best_seller.style.display="none";
})
// code for fahsion best seller section end

// code for second featured brand section javascrip code start
var next_featured_brand2 = document.getElementById("next_featured_brand2");
var prev_featured_brand2 = document.getElementById("prev_featured_brand2");
var featured_brand_slider2 =document.getElementById("featured_brand_slider2");


next_featured_brand2.addEventListener('click',() => {
  featured_brand_slider2.style.left="-1400px";
  
})

prev_featured_brand2.addEventListener('click',() => {
  featured_brand_slider2.style.left="0";
  
})

// code for seconnd featured brand section javascrip code end

// code for best deals on electronics section start
var next_top_deals_on_electronics = document.getElementById("next_top_deals_on_electronics");
var prev_top_deals_on_electronics = document.getElementById("prev_top_deals_on_electronics");
var top_deals_on_electronics_slider =document.getElementById("top_deals_on_electronics_slider");


next_top_deals_on_electronics.addEventListener('click',() => {
  top_deals_on_electronics_slider.style.left="-1400px";
  prev_top_deals_on_electronics.style.display="block";
  next_top_deals_on_electronics.style.display="none";
})

prev_top_deals_on_electronics.addEventListener('click',() => {
  top_deals_on_electronics_slider.style.left="0";
  next_top_deals_on_electronics.style.display="block";
  prev_top_deals_on_electronics.style.display="none";
})

// code for best deals on electronics section end

// code for top offers start
var next_top_offers = document.getElementById("next_top_offers");
var prev_top_offers = document.getElementById("prev_top_offers");
var top_offes_slider =document.getElementById("top_offes_slider");


next_top_offers.addEventListener('click',() => {
  top_offes_slider.style.left="-1400px";
  prev_top_offers.style.display="block";
  next_top_offers.style.display="none";
})

prev_top_offers.addEventListener('click',() => {
  top_offes_slider.style.left="0";
  next_top_offers.style.display="block";
  prev_top_offers.style.display="none";
})
// code for top offers end 

//code for signup dropdown and more dropdown start here 

var signup = document.getElementById("signup");
var box = document.getElementById("box");

signup.addEventListener('mouseover',() =>{
 box.style.display="block";
})
box.addEventListener('mouseover',() =>{
  box.style.display="block";
 })
signup.addEventListener('mouseout',() =>{
  box.style.display="none";
 })
 box.addEventListener('mouseout',() =>{
  box.style.display="none";
 })

 var more = document.getElementById("more");
var mbox = document.getElementById("mbox");
var drop_down = document.getElementById("drop_down");

more.addEventListener('mouseover',() =>{
 mbox.style.display="block";
 drop_down.style.transform="rotate(180deg)";
})
mbox.addEventListener('mouseover',() =>{
  mbox.style.display="block";
  drop_down.style.transform="rotate(180deg)";
 })
more.addEventListener('mouseout',() =>{
  mbox.style.display="none";
  drop_down.style.transform="rotate(0deg)";
 })
 mbox.addEventListener('mouseout',() =>{
  mbox.style.display="none";
  drop_down.style.transform="rotate(0deg)";
 })

 // signup page pop up start here
 var moadal_bg = document.querySelector(".moadal_bg");
 var close_signup = document.querySelector(".close_signup");
 var signup_clicked = document.getElementById("signup_clicked");
 var number = document.getElementById("number");
 signup_clicked.addEventListener('click',()=>{
  moadal_bg.classList.add('active1');
   
  setTimeout(()=>{                         // this for time delay for input type number when the users click on the signup button
    number.classList.add('active');
    
  },500);

 
 })
 close_signup.addEventListener('click',()=>{
  moadal_bg.classList.remove('active1');
 })
 
 
 // signup page pop up end here


 // login popup button clicked start here
 var login_password = document.querySelector(".login_password");
 var or_for_login = document.getElementById("or_for_login");
 var create_new_account_for_login = document.getElementById("create_new_account_for_login");
 var continuebtn = document.querySelector(".continue");
 var h2 = document.getElementById("h2");
 var login_p =document.getElementById("login_p");

 var login_popup_btn = document.getElementById("login_popup_btn");

 login_popup_btn.addEventListener('click',()=>{
  login_password.style.display="block";
  or_for_login.style.display="block";
  create_new_account_for_login.style.display="block";
  continuebtn.innerHTML="Login";
  login_popup_btn.innerHTML="request OTP";
  h2.innerHTML="Login";
  h2.style.marginLeft="-150px";
  login_p.innerHTML="Get access to your Orders, Wishlist and Recommendations";
 })

 // login popup button clicked end here

 

