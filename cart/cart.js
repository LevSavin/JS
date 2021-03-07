var NewItem = function (name, imgSrc, price, id) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.price = price;
    this.id = id;
};

var i0 = new NewItem("Леггинсы", "img/1.jpg", 3000, 0);
var i1 = new NewItem("Платье", "img/2.jpg", 4000, 1);
var i2 = new NewItem("Свитер", "img/3.jpg", 5000, 2);

var catalogArray = [i0, i1, i2];
var cartArray = []
var sum = 0;
var selectedItem, indexOfname;
var cartItem = {};

function init() { // отрисовка каталога
    let $catalog = document.querySelector(".catalog");

    const renderGoodsItem = ({
        name,
        imgSrc,
        price,
        id
    }) => {
        return `<div class="div__item"><img src=${imgSrc} class="div__img"><div class="div__item_goods-content">${name} ${price} \u20bd<button class="div__button" id="btn_${id}" onclick="addItem(event)">Добавить</button></div></div>`;
    };

    const renderGoodsList = (list = catalogArray) => { //  дополнительная переменная list для большей гибкости и возможности переиспользования функции
        let goodsList = list.map(
            item => renderGoodsItem(item)
        ).join("");

        $catalog.insertAdjacentHTML('beforeend', goodsList);
    }

    renderGoodsList();
}

function addItem(obj) { // добавить товар в корзину
    itemNum = obj.target.id.split("_")[1] //индекс товара из массива товаров в каталоге
    selectedItem = catalogArray[itemNum];

    if (hasAlready() == undefined) { // если товара нет в корзине, то добавить его
        cartItem = new NewItem(selectedItem.name, selectedItem.imgSrc, selectedItem.price, selectedItem.id);
        cartItem.quantity = 1;
        cartArray.push(cartItem);

        const renderCartItem = ({
            name,
            quantity,
            price
        }) => {
            return `<tbody id="itemString_${itemNum}"><tr><td id="itemQuantity_${itemNum}">${name} ${quantity} шт.</td><td id="price${itemNum}">${price}\u20bd</td><td><button id="removeBtn_${itemNum}" onclick="removeItem(event)">-</button></td></tr></tbody>`;
        };
        let $selectedItems = document.querySelector(".selected-items"); //корзина в html
        $selectedItems.insertAdjacentHTML('beforeend', renderCartItem(cartItem));
    } else {
        indexOfname = cartArray.findIndex(x => x.id === catalogArray[itemNum].id); // по id ищем в корзине товар, который нужно добавить из каталога
        cartArray[indexOfname].quantity += 1; // увеличить количество
        changePrice()
    }
    countSum();
}

function hasAlready() { // проверяем по id, есть ли уже в корзине выбранный товар
    return cartArray.find(x => x.id === selectedItem.id);
}

function removeItem(obj) { // уменьшить количество товара / скрыть позицию
    itemNum = obj.target.id.split("_")[1] // индекс товара из массива товаров в каталоге
    indexOfname = cartArray.findIndex(x => x.id === catalogArray[itemNum].id); // индекс товара из массива корзины
    if (cartArray[indexOfname].quantity > 1) {
        cartArray[indexOfname].quantity -= 1; // уменьшить количество
        changePrice()
    } else {
        let remItem = document.getElementById("itemString_" + itemNum)
        remItem.remove()
        cartArray.splice(indexOfname, 1)
    }
    countSum()
}

function changePrice() { // изменить итог стоимости позиции
    let changePrice = document.getElementById("price" + itemNum);
    changePrice.textContent = ((cartArray[indexOfname].price * cartArray[indexOfname].quantity) + "\u20bd");
    let changeQuantity = document.getElementById("itemQuantity_" + itemNum);
    changeQuantity.textContent = (cartArray[indexOfname].name + " " + cartArray[indexOfname].quantity + " шт.");
}

function countSum() { // считаем итоговую сумму корзины
    let initialValue = 0; // объект, используемый в качестве первого аргумента при первом вызове функции callback
    sum = cartArray.reduce(function (accumulator, currentValue) { // подсчёт суммы по товарам в корзине
        return accumulator + (currentValue.price * currentValue.quantity);
    }, initialValue);
    document.querySelector(".sum").textContent = "Сумма: " + sum + "\u20bd";
}

function clearCart() { // очистка корзины     
    cartArray = [];
    sum = 0;
    document.querySelector(".sum").textContent = "Сумма: " + sum + "\u20bd";
    document.querySelector(".selected-items").textContent = '';
}

window.onload = init;