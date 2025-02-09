// Add event listener to each of the form input fields

// Initialize Firestore
const db = firebase.firestore();

// Get a reference to the form
const form = document.getElementById('myForm');

// Listen for form submissions
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get values from the form
  const username = document.getElementById('username').value;
  const lastName = document.getElementById('first-name').value;
  const firstName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const birthday = document.getElementById('birthday').value;
  const heightFeet = document.getElementById('height-feet').value;
  const heightInches = document.getElementById('height-inches').value;
  const weight = document.getElementById('weight').value;
  

  // Add a new document to the "users" collection
  await db.collection('users').add({
    username: username,
    first_name: firstName,
    last_name: lastName,
    email: email,
    gender: gender,
    birthday: birthday,
    height_feet: heightFeet,
    height_inches: heightInches,
    weight: weight
  });

  // Clear the form
  form.reset();
});


