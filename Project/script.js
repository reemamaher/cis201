var categories=[
    {
        id:1,
        cat:"Appetizers"
    },
    {
        id:2,
        cat:"Main Course"
    },
    {
        id:3,
        cat:"Dessert "
    },
    {
        id:4,
        cat:"Drinks"
    }
]
var products=[
    {
        id:1,
        prod:"Peanut Puffs",
        serving:"4 pieces",
        calories:420,
        cat_id:1
    },
    {
        id:2,
        prod:"Bac Kwa",
        serving:"1 pieces",
        calories:370,
        cat_id:1
    },
    {
        id:3,
        prod:"Love Letters",
        serving:"4 pieces",
        calories:210,
        cat_id:1
    },
    {
        id:4,
        prod:"Peanut Cookies",
        serving:"4 pieces",
        calories:200,
        cat_id:1
    },
    {
        id:5,
        prod:"Fish",
        serving:"100gm",
        calories:96,
        cat_id:2
    },
    {
        id:6,
        prod:"Checken",
        serving:"100gm",
        calories:110,
        cat_id:2
    },
    {
        id:7,
        prod:"Meat",
        serving:"100gm",
        calories:142,
        cat_id:2
    },
    {
        id:8,
        prod:"Konafa",
        serving:"100gm",
        calories:345,
        cat_id:3
    },
    {
        id:9,
        prod:"Basbousa",
        serving:"100gm",
        calories:525,
        cat_id:3
    },
    {
        id:10,
        prod:"Chease Cake",
        serving:"100gm",
        calories:185,
        cat_id:3
    },
    {
        id:11,
        prod:"Ice Cream",
        serving:"100gm",
        calories:400,
        cat_id:3
    },
    {
        id:12,
        prod:"Orange Juice",
        serving:"1cup",
        calories:76,
        cat_id:4
    },
    {
        id:13,
        prod:"Mango Juice",
        serving:"1cup",
        calories:108,
        cat_id:4
    },
    {
        id:14,
        prod:"Apple Juice",
        serving:"1cup",
        calories:96,
        cat_id:4
    },
    {
        id:16,
        prod:"Banana Juice",
        serving:"1cup",
        calories:156,
        cat_id:4
    }
];
var cat=document.getElementById("categories");
var catdropdown=document.getElementById("categories");
var dishesTemp=document.getElementById("dishes");
var cartTemp=document.getElementsByClassName("cart")[0];
var total=document.getElementById("totalCalories");

categories.forEach(element => {
    var op=document.createElement("option");
    op.innerText=element.cat;
    op.setAttribute("value",element.id);
    catdropdown.appendChild(op);
});
var prds=products;

function prdfilter(){
    if(parseInt(cat.value)==0){
        prds=products;
        dishes.innerHTML="";
        create(prds);
    }
    else{
        dishes.innerHTML="";
        prds=products.filter(prd=>prd.cat_id==parseInt(cat.value));
        create(prds);
    }
}
function create(p){
prds.forEach(element => {
    var tr=document.createElement("tr");

    var id=document.createElement("td");
    id.innerText=element.id;
    tr.appendChild(id);

    var prod=document.createElement("td");
    prod.innerText=element.prod;
    tr.appendChild(prod);

    var serving_size=document.createElement("td");
    serving_size.innerText=element.serving;
    tr.appendChild(serving_size);

    var calory=document.createElement("td");
    calory.innerText=element.calories;
    tr.appendChild(calory);

    var addtocart=document.createElement("td");
    var addtocartt=document.createElement("input");
    addtocartt.setAttribute("id",element.id);
    addtocartt.setAttribute("type","button");
    addtocartt.setAttribute("value","Add To Cart");
    addtocartt.setAttribute("class","btn");
    addtocartt.style.backgroundColor="#f2c230";
    addtocartt.style.width="100%";
    addtocart.addEventListener("click",addToCart);
    addtocart.appendChild(addtocartt);
    tr.appendChild(addtocart);

    dishesTemp.appendChild(tr);
});
}
create(prds);

var cart=[];
var totalCal=0;
var cartprds=[];

function addToCart(event){
    var prd=products.find(p=>p.id==event.target.id);
    cart.push(prd);
    cartPrd=JSON.stringify(cart);
    localStorage.setItem("cart",cartPrd);
    cart=JSON.parse(localStorage.getItem("cart"));
}
var cartprds=[];
for (i = 0; i < localStorage.length; i++)   {
    cartprds=(JSON.parse(localStorage.getItem(localStorage.key(i))));
    cartprds.forEach(element => {
        var tr=document.createElement("tr");
    
        var id=document.createElement("td");
        id.innerText=element.id;
        tr.appendChild(id);

        var p=document.createElement("td");
        p.innerText=element.prod;
        tr.appendChild(p);
    
        var serv=document.createElement("td");
        serv.innerText=element.serving;
        tr.appendChild(serv);
    
        var cal=document.createElement("td");
        cal.innerText=element.calories;
        tr.appendChild(cal);
    
        cartTemp.appendChild(tr);

        totalCal+=element.calories;
    });
        total.innerText="Total Calories:"+totalCal;
}

//cartPrds=JSON.parse(localStorage.getItem("cart"));
/*cartprds.forEach(element => {
    var tr=document.createElement("tr");

    var p=document.createElement("td");
    p.innerText=element.prod;
    tr.appendChild(p);

    var serv=document.createElement("td");
    p.innerText=element.serving;
    tr.appendChild(serv);

    var cal=document.createElement("td");
    p.innerText=element.calories;
    tr.appendChild(cal);

    cartTemp.appendChild(tr);
});*/