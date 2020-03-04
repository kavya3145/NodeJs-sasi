var shoplist = ["Fruits","vegetables","Dairy"]
function add(){
    shoplist.push("Chocolates");
    console.log(shoplist);
}
function removel(){
    shoplist.pop();
    console.log(shoplist)
}
function removef(){
    shoplist.shift();
    console.log(shoplist);
}
function clear(){
    shoplist.length=0;
    console.log(shoplist);
}
add();
removel();
removef();
clear();
