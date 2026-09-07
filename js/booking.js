/**
 * Pizza Mania - Booking Logic
 * Handles reservation form submission, local validation, localStorage persistence for offline/static deployment, and optional backend webhook.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  const formContainer = document.getElementById('form-container');
  const successBox = document.getElementById('booking-success');
  const submitBtn = document.getElementById('btn-submit-booking');
  const submitText = document.getElementById('submit-btn-text');
  const submitSpinner = document.getElementById('submit-spinner');
  const errorMsg = document.getElementById('form-error');

  // Set minimum date to today
  const dateInput = document.getElementById('field-date');
  if (dateInput) {
    const today = new Date().toISOString().slice(0, 10);
    dateInput.min = today;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Clear error
      if (errorMsg) {
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';
      }

      // Show loading state
      if (submitBtn) submitBtn.disabled = true;
      if (submitSpinner) submitSpinner.style.display = 'inline-block';

      const formData = {
        id: 'res_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        full_name: form.elements['full_name'].value.trim(),
        phone: form.elements['phone'].value.trim(),
        email: form.elements['email'].value.trim(),
        guests: parseInt(form.elements['guests'].value) || 2,
        date: form.elements['date'].value,
        time: form.elements['time'].value,
        special_requests: form.elements['special_requests'].value.trim(),
        status: 'pending',
        created_date: new Date().toISOString()
      };

      try {
        // 1. Simulate server request delay for smooth UX
        await new Promise(res => setTimeout(res, 600));

        // 2. Save reservation in localStorage for standalone / static operations
        const existing = JSON.parse(localStorage.getItem('pizzamania_reservations') || '[]');
        existing.unshift(formData);
        localStorage.setItem('pizzamania_reservations', JSON.stringify(existing));

        // 3. Optional: If user sets a Formspree / Web3Forms webhook in window.PIZZAMANIA_WEBHOOK_URL
        if (window.PIZZAMANIA_WEBHOOK_URL) {
          fetch(window.PIZZAMANIA_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(formData)
          }).catch(err => console.warn('Optional webhook notification:', err));
        }

        // Show success state
        if (form) form.style.display = 'none';
        if (successBox) successBox.style.display = 'block';

      } catch (err) {
        console.error('Booking submission error:', err);
        if (errorMsg) {
          const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.it;
          errorMsg.textContent = dict.form_error_generic || 'Invio non riuscito. Riprova o chiamaci.';
          errorMsg.style.display = 'block';
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitSpinner) submitSpinner.style.display = 'none';
      }
    });
  }
});
