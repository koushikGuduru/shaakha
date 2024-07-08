/*document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Tomatoes', price: 2.99 },
        { id: 2, name: 'Cucumbers', price: 1.99 },
        { id: 3, name: 'Carrots', price: 3.49 },
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
//});*/
// employment

// Get the register form and sign in form
const registerForm = document.getElementById("registerForm");
const signInForm = document.getElementById("signInForm");

// Create an empty array to store user data
let users = [];

// Add a submit event listener to the register form
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the username, email, password, and confirm password from the register form
  const username = document.getElementById("username").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  // Check if the password and confirm password match
  if (password!== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Create a new user object
  const user = {
    username,
    mobileNumber,
    address,
    email,
    password,
  };

  // Add the user to the users array
  users.push(user);

  // Clear the register form
  document.getElementById("registerForm").reset();

  // Display a success message
  alert("Registered successfully!");
});

// Add a submit event listener to the sign in form
signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the username and password from the sign in form
  const signInUsername = document.getElementById("signInUsername").value;
  const signInPassword = document.getElementById("signInPassword").value;

  // Check if the username and password match a user in the users array
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === signInUsername && users[i].password === signInPassword) {
      // Display a success message
      alert("Signed in successfully!");
      return;
    }
  }

  // Display an error message if the username and password do not match
  alert("Invalid username or password");
});