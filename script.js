document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const acceptTermsCheckbox = document.getElementById('acceptTerms');
  const countrySelect = document.getElementById('country');
  const submitButton = document.getElementById('submitButton');

  function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const country = countrySelect.value;
    const termsAccepted = acceptTermsCheckbox.checked;

    const usernameValid = username !== '';
    const passwordValid = password.length >= 12;
    const passwordsMatch = password === confirmPassword;
    const countrySelected = country !== '';

    submitButton.disabled = !(usernameValid && passwordValid && passwordsMatch && termsAccepted && countrySelected);
  }

  function handleCheckboxChange() {
    validateForm();
  }

  usernameInput.addEventListener('input', validateForm);
  passwordInput.addEventListener('input', validateForm);
  confirmPasswordInput.addEventListener('input', validateForm);
  acceptTermsCheckbox.addEventListener('change', handleCheckboxChange);
  countrySelect.addEventListener('change', validateForm);

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const country = countrySelect.options[countrySelect.selectedIndex].text;
    // You can do something with the form submission here, like displaying a message
  });

  const countries = ['Canada', 'USA', 'India', 'Japan', 'Others'];
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  validateForm(); // Ensure the form is validated initially on page load
});
