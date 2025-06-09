 // Tab switching functionality
    document.addEventListener('DOMContentLoaded', function() {
      const tabs = document.querySelectorAll('.booking-tab');
      const form = {
        'combined': document.getElementById('combined-form'),
        'flights': document.getElementById('flights-form'),
        'hotels': document.getElementById('hotels-form'),
        'transfers': document.getElementById('transfers-form')
      };

      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          // Remove active class from all tabs
          tabs.forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Hide all forms
          Object.values(forms).forEach(form => {
            form.style.display = 'none';
          });
          
          // Show the selected form
          const formId = this.getAttribute('data-tab');
          forms[formId].style.display = 'block';
        });
      });

      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
      const header = document.querySelector('.header');
      
      mobileMenuBtn.addEventListener('click', function() {
        header.classList.toggle('mobile-menu-open');
        
        // Change icon based on menu state
        const icon = this.querySelector('i');
        if (header.classList.contains('mobile-menu-open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      // Modal functionality
      const loginBtn = document.getElementById('login-btn');
      const signupBtn = document.getElementById('signup-btn');
      const ctaSignupBtn = document.getElementById('cta-signup-btn');
      const loginModal = document.getElementById('login-modal');
      const signupModal = document.getElementById('signup-modal');
      const loginClose = document.getElementById('login-close');
      const signupClose = document.getElementById('signup-close');
      const switchToSignup = document.getElementById('switch-to-signup');
      const switchToLogin = document.getElementById('switch-to-login');

      // Open login modal
      loginBtn.addEventListener('click', function() {
        loginModal.classList.add('active');
      });

      // Open signup modal
      signupBtn.addEventListener('click', function() {
        signupModal.classList.add('active');
      });

      // Open signup modal from CTA
      ctaSignupBtn.addEventListener('click', function() {
        signupModal.classList.add('active');
      });

      // Close login modal
      loginClose.addEventListener('click', function() {
        loginModal.classList.remove('active');
      });

      // Close signup modal
      signupClose.addEventListener('click', function() {
        signupModal.classList.remove('active');
      });

      // Switch from login to signup
      switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.remove('active');
        signupModal.classList.add('active');
      });

      // Switch from signup to login
      switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.classList.remove('active');
        loginModal.classList.add('active');
      });

      // Close modals when clicking outside
      window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
          loginModal.classList.remove('active');
        }
        if (e.target === signupModal) {
          signupModal.classList.remove('active');
        }
      });

      // Set default dates for form fields
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);

      // Format date as YYYY-MM-DD
      function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

      // Set default dates for all date inputs
      const dateInputs = document.querySelectorAll('input[type="date"]');
      dateInputs.forEach(input => {
        if (input.id.includes('depart') || input.id.includes('checkin') || input.id.includes('date')) {
          input.value = formatDate(tomorrow);
        } else if (input.id.includes('return') || input.id.includes('checkout')) {
          input.value = formatDate(nextWeek);
        }
      });

      // Form submission handling (prevent actual submission for demo)
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Form submitted! This would normally search for available options or process your request.');
        });
      });
    });