// Add event listener to each of the form input fields

// Initialize Firestore
const db = firebase.firestore();

// Get a reference to the form
const form = document.getElementById('myForm');

// Listen for form submissions
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Add a new document to the "users" collection
  await db.collection('users').add({
    name: name,
    email: email
  });

  // Clear the form
  form.reset();
});

const user_form_data = []

