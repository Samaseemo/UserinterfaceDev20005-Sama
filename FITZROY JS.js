let quantities = [1, 1];
const prices = [249, 379];

function increaseQuantity(index) {
  quantities[index]++;
  updateQuantity(index);
  updatePrice(index);
}

function decreaseQuantity(index) {
  if (quantities[index] > 1) {
    quantities[index]--;
    updateQuantity(index);
    updatePrice(index);
  }
}

function updateQuantity(index) {
  const quantityElement = document.getElementById(`quantity-${index}`);
  quantityElement.innerText = quantities[index];
}

function updatePrice(index) {
  const priceElement = document.getElementById(`price-${index}`);
  const totalPrice = quantities[index] * prices[index];
  priceElement.innerText = `${totalPrice} AUD`;
}

document.addEventListener("DOMContentLoaded", function() {
  // Sample order data
  const quantities = [2, 1]; // Quantity of each item
  const prices = [249, 379]; // Price of each item

  function getItemName(index) {
    const itemNames = ['RONDI', 'NAKA']; // Replace with your actual item names
    return itemNames[index];
  }

  function calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < quantities.length; i++) {
      const quantity = quantities[i];
      const price = prices[i];
      const total = quantity * price;
      subtotal += total;
    }
    return subtotal;
  }

  function calculateGST(subtotal) {
    const gstRate = 0.05; // Assuming a 5% GST rate
    const gst = subtotal * gstRate;
    return gst;
  }

  function calculateTotal(subtotal, gst) {
    const shipping = 10; // Assuming a shipping cost of $10
    const total = subtotal + gst + shipping;
    return total;
  }

  // Update item details in the summary
  document.getElementById('itemName1').textContent = getItemName(0);
  document.getElementById('itemQuantity1').textContent = quantities[0];
  document.getElementById('itemTotal1').textContent = prices[0] * quantities[0];

  document.getElementById('itemName2').textContent = getItemName(1);
  document.getElementById('itemQuantity2').textContent = quantities[1];
  document.getElementById('itemTotal2').textContent = prices[1] * quantities[1];

  // Calculate and update receipt values
  const subtotal = calculateSubtotal();
  const gst = calculateGST(subtotal);
  const total = calculateTotal(subtotal, gst);

  document.getElementById('gstValue').textContent = `GST: $${gst.toFixed(2)}`;
  document.getElementById('totalValue').textContent = `Total: $${total.toFixed(2)}`;
});

function processPayment() {
  const cardNumber = document.getElementById("card-number").value.trim();
  const expiryDate = document.getElementById("expiry-date").value.trim();
  const cvc = document.getElementById("cvc").value.trim();

  // Validate form details
  if (cardNumber === "" || expiryDate === "" || cvc === "") {
    alert("Please fill in all the payment details.");
  } else if (!/^\d{16}$/.test(cardNumber)) {
    alert("Please enter a valid 16-digit card number.");
  } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
    alert("Please enter a valid expiry date in the format MM/YY.");
  } else if (!/^\d{3}$/.test(cvc)) {
    alert("Please enter a valid 3-digit CVC.");
  } else {
    const confirmation = confirm("Are you sure you want to proceed with the payment?");
    if (confirmation) {
      alert("Your payment is successful!");
      window.location.href = "index.html";
    }
  }
}


// Function to validate the form inputs
function validateForm() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const addressLine1 = document.getElementById("address-line1").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const phone = document.getElementById("phone").value.trim();

  if (fname === "" || lname === "" || addressLine1 === "" || postcode === "" || city === "" || state === "" || phone === "") {
    document.getElementById("validation-error").style.display = "block";
    document.getElementById("validation-error").textContent = "Please fill in all the delivery details.";
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("phone-error").style.display = "block";
    document.getElementById("phone-error").textContent = "Please enter a valid 10-digit phone number.";
    return false;
  }

  document.getElementById("validation-error").style.display = "none";
  document.getElementById("phone-error").style.display = "none";
  return true;
}

// Function to show the confirmation message
function showConfirmation(event) {
  if (!validateForm()) {
    event.preventDefault();
    return;
  }

  const confirmation = confirm("Are you sure you want to proceed to payment?");
  if (!confirmation) {
    event.preventDefault();
  }
}



