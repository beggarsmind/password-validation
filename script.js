document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('passwordForm');
  const notification = document.getElementById('notification');
  const validationList = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    special: document.getElementById('special'),
  };

  const validatePassword = () => {
    const password = passwordInput.value;
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    };

    let allValid = true;
    for (const key in checks) {
      if (checks[key]) {
        validationList[key].classList.add('valid');
        validationList[key].classList.remove('invalid');
      } else {
        validationList[key].classList.add('invalid');
        validationList[key].classList.remove('valid');
        allValid = false;
      }
    }
    submitBtn.disabled = !allValid;
  };

  togglePasswordBtn.addEventListener('click', () => {
    const isPasswordHidden = passwordInput.type === 'password';
    passwordInput.type = isPasswordHidden ? 'text' : 'password';
    togglePasswordBtn.textContent = isPasswordHidden ? 'Hide' : 'Show';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    notification.classList.remove('hidden');
    notification.classList.add('visible', 'fade-in');
    setTimeout(() => {
      notification.classList.remove('fade-in');
    }, 500); // Reset fade-in after animation completes
  });

  passwordInput.addEventListener('input', validatePassword);
});
