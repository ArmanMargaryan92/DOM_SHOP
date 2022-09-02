const APIURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
let data = []
function getdata() {
  fetch(APIURL)
    .then((res) => res.json())
    .then((res)=>{
       data=[...res.meals]
      
      return res
    })
    .then((user) => {
      let box = document.createElement("div");
      box.classList.add("parentdiv");
      user.meals.map((food) => {
        let foodcard = document.createElement("div");
        let foodimg = document.createElement("img");
        let icon = document.createElement("button");
        let miniboxcard = document.createElement("div");
        let price = document.createElement("span");
        foodcard.classList.add("boxcard");
        miniboxcard.classList.add("miniboxcard");
        icon.classList.add("btn")
        foodimg.classList.add("imgsize");
        let imgname=food.strMeal.slice(0,13)
        miniboxcard.id=food.idMeal
        miniboxcard.innerText = `${imgname}`;
        foodimg.setAttribute("src", `${food.strMealThumb}`); 
        price.innerText = `${food.idMeal} AMD`;
        icon.innerText = 'to buy';
        icon.addEventListener("click",(e)=>{addBasket(e)})
        miniboxcard.appendChild(price);
        miniboxcard.appendChild(icon);
        foodcard.appendChild(foodimg);
        box.appendChild(foodcard);
        foodcard.appendChild(miniboxcard);
        
      })
      .then
 
      document.body.appendChild(box);
    })
    
}
getdata();
// let search = document.querySelector(".input");

// search.addEventListener("input", serchBar);

// function serchBar(e) {
//   if (e.target.value.length > 3) {
//     let result = document.querySelector(".parentdiv");
//     let data = [...result.children];
//     const serchvalue = e.target.value;
//     data = data.map((name) => {
//       let foodname = name.lastChild.firstChild;
//       console.log(foodname);
//       if (foodname.includes("serchvalue")) {
//         name.style.displey = "none";
//       } else {
//         name.style.displey = "flex";
//       }
//       return name;
//      });
//     result.innerHTML = " ";
//     result.append(...data);
//   }
// }



const basket = document.querySelector(".basket")
const showbasket = document.querySelector(".showbasket")
let shop=document.querySelector(".shop")


let korzina = document.createElement("div");

let close = document.createElement("i");
close.classList.add("close")
close.classList.add("fa-solid")
close.classList.add("fa-circle-xmark")
close.addEventListener("click",togleKarzina)


korzina.classList.add("korzina")
korzina.appendChild(close)
shop.appendChild(korzina)



function togleKarzina(){
  korzina.classList.toggle("active")
}
basket.addEventListener("click",togleKarzina)



function addBasket(e){

  setTimeout(()=>{
    data.map((product)=>{
     
    })
    } ,100)
  let item=document.createElement("div");
  item.classList.add("basketItem");
  let itemName=document.createElement("p");
  let foodname=e.target.parentNode.firstChild
  itemName.innerText=foodname
let price =e.target.parentNode.children[0].innerText
let img=e.target.parentNode.parentNode.firstChild

let itemNameClone=itemName.cloneNode(true)
let imgClone=img.cloneNode(true)
imgClone.classList.add("basketimg")
console.log(e.target.parentNode.firstChild);
item.appendChild(imgClone);
item.appendChild(itemNameClone);
item.append(price);
korzina.appendChild(item);
}
