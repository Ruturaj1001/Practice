
// Food Menu

let foods = [
    {
        name: "Pizza",
        price: 199,
        image: "🍕"
    },
    {
        name: "Burger",
        price: 99,
        image: "🍔"
    },
    {
        name: "Biryani",
        price: 149,
        image: "🍛"
    },
    {
        name: "Sandwich",
        price: 79,
        image: "🥪"
    },
    {
        name: "French Fries",
        price: 89,
        image: "🍟"
    },
    {
        name: "Ice Cream",
        price: 59,
        image: "🍨"
    }
];

// Shopping Cart

let cart = [];

// Display Food Items

function displayFoods(items) {

    let output = "";

    items.forEach((food) => {

        output += `
            <div class="food-card">

                <div class="food-image">
                    ${food.image}
                </div>

                <h3>${food.name}</h3>

                <p>Price: ₹${food.price}</p>

                <button onclick="addToCart('${food.name}')">
                    Add to Cart
                </button>

            </div>
        `;
    });

    document.getElementById("food-list").innerHTML =
        output;
}

// Add Food to Cart

function addToCart(name) {

    let food = foods.find(item => item.name === name);

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    displayCart();
}

// Display Cart Items

function displayCart() {

    let output = "";
    let total = 0;

    if (cart.length === 0) {

        output = "Your cart is empty.";

    } else {

        cart.forEach((item, index) => {

            let subtotal = item.price * item.quantity;

            total += subtotal;

            output += `
                <div class="cart-item">

                    ${item.image} ${item.name}

                    - ₹${item.price}

                    <br>

                    <button onclick="changeQuantity(${index}, -1)">
                        -
                    </button>

                    ${item.quantity}

                    <button onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                    <p>Subtotal: ₹${subtotal}</p>

                </div>
            `;
        });
    }

    document.getElementById("cart-items").innerHTML =
        output;

    document.getElementById("total").innerText = total;
}

// Change Food Quantity

function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}

// Search Food

document.getElementById("search").addEventListener(
    "input", function() {

        let searchValue = this.value.toLowerCase();

        let result = foods.filter(food =>
            food.name.toLowerCase().includes(searchValue)
        );

        displayFoods(result);
    }
);

// Place Order

function placeOrder() {

    if (cart.length === 0) {

        alert("Please add food to your cart!");

    } else {

        alert("Your order has been placed successfully!");

        cart = [];

        displayCart();
    }
}

// Initial Display

displayFoods(foods);

displayCart();
          
