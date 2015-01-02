var appetizers = [
    { "name": "Salmon", "cost": 19 },
    { "name": "Bison", "cost": 18 },
    { "name": "Duck", "cost": 18 }
];

for (var i=0; i<appetizers.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("data-cost", appetizers[i].cost);
    option.innerText= appetizers[i].name + ":" + appetizers[i].cost;
    document.getElementsByName("appetizer")[0].appendChild(option);
}
