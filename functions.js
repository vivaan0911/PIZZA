var pizza_1= "Cheese Pizza";
var pizza_2= "Sweet Corn Pizza";
var pizza_3= "Veg Pizza";
var menu_list=[pizza_1,pizza_2,pizza_3];
function showMenu(){
    menu_list.sort();
    document.getElementById("display_menu").innerHTML=menu_list;
}
function menuAddItem(){
    var pizza= document.getElementById("input").value;
    var sentence=" is added to your menu."
    var pizzaList= pizza.concat(sentence);
    menu_list.push(pizza);
    document.getElementById("display_new").innerHTML=pizzaList;
    document.getElementById("display_menu").innerHTML=menu_list;
}