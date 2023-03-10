const form = document.querySelector('form'); // Select the form element

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const inputs = form.querySelectorAll('input'); // Select all input elements in the form
  const formData = {}; // Create an empty object to store the form data

  inputs.forEach((input) => {
    formData[input.name] = input.value; // Add each input's name and value to the formData object
  });

  console.log(formData); // Do something with the form data, such as logging it to the console
});
