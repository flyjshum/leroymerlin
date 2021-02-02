var data = `{
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "5": "57",
                "4": "58",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}`;

var response = JSON.parse(data);
var name = response.displayedName.displayedName.value;
var arrStock = response.stock.stocks;

var mapIsExistenceInShop = new Map();
var maxExistenceInShop=0;
var countExistenceInShop;
var html;

for (region in arrStock) {
    for (shop in arrStock[region]) {
        countExistenceInShop=parseInt(arrStock[region][shop]);
        if (countExistenceInShop > 0) {
            mapIsExistenceInShop.set(shop,countExistenceInShop);
            if (countExistenceInShop > maxExistenceInShop) {
                maxExistenceInShop = countExistenceInShop;
            }
        }
    }
}

html="Товар '" + name + "' в наличии в следующих магазинах:<br>";
var htmlMax="";

for (var [key, value] of mapIsExistenceInShop) {
    html+=key+"<br>";
    if (value==maxExistenceInShop){
        htmlMax+=key+"<br>";
    }
}

html+="<br>Максимальное количество "+maxExistenceInShop+" шт. в магазинах:<br>"+htmlMax;
document.body.innerHTML=html;




