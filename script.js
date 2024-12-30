document.getElementById('jobApplicationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    let allFieldsValid = true;
  
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFieldsValid = false; 
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '';
      }
    });
  
    if (allFieldsValid) {
      const popup = document.getElementById('popupMessage');
      popup.classList.remove('hidden');
      popup.classList.add('show');
  
      setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
          popup.classList.add('hidden');
        }, 500);
      }, 3000);
    } else {
      alert('Please fill in all required fields before submitting.');
    }
  });