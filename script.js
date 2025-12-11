$(document).ready(function () {
    console.log('jQuery Ready - All JS Validations Active!');
   
    //  HELPER FUNCTIONS 
    const isValidEmail = (email) => {
        let atIndex = email.indexOf("@");
        let dotIndex = email.lastIndexOf(".");
        return atIndex >= 1 && dotIndex >= atIndex + 2 && dotIndex + 2 < email.length;
    };
    // Format YYYY-MM-DD

    const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (month < 1 || month > 12) return false;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
    }
    return day >= 1 && day <= daysInMonth[month - 1];
};
    
    //  CART SYSTEM 
    let cart = [];
    
    function renderCart() {
        const $list = $('#cartItems');
        if (!$list.length) return;
        
        $list.empty();
        $('#cartEmptyText').toggle(cart.length === 0);
        
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.qty;
            $list.append(`<li><strong>${item.name}</strong> x ${item.qty} — Rp ${item.price.toLocaleString('id-ID')}</li>`);
        });
        
        $('#cartTotal').text('Rp ' + total.toLocaleString('id-ID'));
    }
    
    // EVENT LISTENERS 
    
    // 1. CLICK EVENT - Add to Cart
    $(document).on('click', '.order-btn', function (e) {
        e.preventDefault();
        const $card = $(this).closest('.menu-card');
        const name = $card.find('.menu-info h4').text().trim();
        const priceText = $card.find('.menu-price').text().trim();
        const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10) || 0;
        
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }
        
        renderCart();
        $(this).html('✓ Added!').css('background', '#4caf50');
        setTimeout(() => $(this).html('<i class="fas fa-shopping-cart"></i> Order Now').css('background', ''), 1500);
    });
    
    // 2. CHANGE EVENT - Delivery Option
    $(document).on('change', 'input[name="delivery"]', function () {
        if ($(this).val() === 'delivery') {
            $('#addressGroup').removeClass('d-none').slideDown();
        } else {
            $('#addressGroup').slideUp().addClass('d-none');
        }
    });
    
    // 3. CHANGE EVENT - Payment Method
    $(document).on('change', '#paymentMethod', function () {
        const messages = {
            'cod': '💵 Please prepare exact cash when the order arrives 😊',
            'transfer': '🏦 Contact via WhatsApp for bank account details.',
            'ewallet': '📱 Transfer to: 0812-1134-5665'
        };
        $('#paymentHelper').html(messages[$(this).val()] || '');
    });
    
    // 4. FOCUS EVENT - Form Inputs
    $(document).on('focus', 'form input, form textarea, form select', function () {
        $(this).css({ 
            'border-color': '#FF69B4', 
            'box-shadow': '0 0 0 0.2rem rgba(255, 105, 180, 0.25)' 
        });
    });
    
    // 5. BLUR EVENT - Form Inputs
    $(document).on('blur', 'form input, form textarea, form select', function () {
        $(this).css({ 
            'border-color': '#e0e0e0', 
            'box-shadow': 'none' 
        });
    });
    
    // 6. KEYPRESS EVENT - Email fields (No spaces)
    $(document).on('keypress', 'input[type="email"], #emailOrder, #forgotEmail', function(e) {
        if (e.which === 32) {
            e.preventDefault();
            alert('Spaces are not allowed in email addresses');
        }
    });
    
    // 7. KEYUP EVENT - Character Counter
    $(document).on('keyup', '#message, #testiMessage', function() {
        const length = $(this).val().length;
        const maxLength = 500;
        
        let $counter = $(this).siblings('.char-counter');
        if (!$counter.length) {
            $counter = $('<small class="char-counter" style="color: #666; float: right;"></small>');
            $(this).after($counter);
        }
        
        $counter.text(`${length} / ${maxLength} characters`)
                .css('color', maxLength - length < 50 ? '#FF69B4' : '#666');
    });
    
    // 8. MOUSEMOVE EVENT - Sweetness Meter
    $('.hero-section').on('mousemove', function (e) {
        const percent = Math.round(((e.pageX - $(this).offset().left) / $(this).width()) * 100);
        
        let $meter = $('#sweetnessMeter');
        if (!$meter.length) {
            $meter = $('<div id="sweetnessMeter" style="position: fixed; bottom: 20px; right: 20px; background: rgba(255,255,255,0.95); padding: 15px 25px; border-radius: 50px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); font-weight: bold; color: #FF69B4; z-index: 1000; border: 2px solid #FF69B4;"></div>');
            $('body').append($meter);
        }
        $meter.text(`🍰 Sweetness: ${percent}%`).show();
    }).on('mouseleave', () => $('#sweetnessMeter').fadeOut());
    
    // 9. CLICK EVENT - Forgot Password Toggle
    $(document).on('click', '#showForgotForm', (e) => {
        e.preventDefault();
        $('#forgotFormWrapper').slideToggle(400);
    });
    
    // 10. CLICK EVENT - Navigate to Order Form
    $(document).on('click', '#goToOrder', () => {
        window.location.href = 'contact.html#orderForm';
    });
    
    //  FORM VALIDATIONS 
    
    // FORM 1: FORGOT PASSWORD FORM
    // Toggle password visibility
    function togglePassword(fieldId) {
        const input = document.getElementById(fieldId);
        if (!input) return;
        
        const icon = event.target;
        const isPassword = input.type === 'password';
        
        input.type = isPassword ? 'text' : 'password';
        icon.classList.toggle('fa-eye', !isPassword);
        icon.classList.toggle('fa-eye-slash', isPassword);
    }

    $(document).ready(function() {
        console.log('Login page loaded');
        
        // Helper function
        const isValidEmail = (email) => {
            let atIndex = email.indexOf("@");
            let dotIndex = email.lastIndexOf(".");
            return atIndex >= 1 && dotIndex >= atIndex + 2 && dotIndex + 2 < email.length;
        };
        
         // Forgot password form submit
        $('#forgotPasswordForm').on('submit', function(e) {
            e.preventDefault();
            
            const email = $('#forgotEmailLogin').val().trim();
            const newPassword = $('#forgotNewPasswordLogin').val();
            const confirmPassword = $('#forgotConfirmPasswordLogin').val();
            
            // Validation 1: Email empty
            if (email == "") {
                alert('Email cannot be empty!');
                $('#forgotEmailLogin').focus();
                return false;
            }
            
            // Validation 2: Email format
            if (!isValidEmail(email)) {
                alert('Invalid email format! Example: user@domain.com');
                $('#forgotEmailLogin').focus();
                return false;
            }
            
            // Validation 3: New password empty
            if (newPassword == "" || newPassword == null) {
                alert('New password cannot be empty!');
                $('#forgotNewPasswordLogin').focus();
                return false;
            }
            
            // Validation 4: Password length
            if (newPassword.length < 8) {
                alert('New password must be at least 8 characters long!');
                $('#forgotNewPasswordLogin').focus();
                return false;
            }
            
            // Validation 5: Confirm password empty
            if (confirmPassword == "" || confirmPassword == null) {
                alert('Please confirm your new password!');
                $('#forgotConfirmPasswordLogin').focus();
                return false;
            }
            
            // Validation 6: Password match
            if (newPassword != confirmPassword) {
                alert('Passwords do not match!');
                $('#forgotConfirmPasswordLogin').focus();
                return false;
            }
            
            // Success
            alert('✓ Password successfully reset!\n\nEmail: ' + email + '\n\nYou can now login with your new password.');
            this.reset();
            $('#forgotPasswordModal').removeClass('show');
            return false;
        });
        // Open forgot password modal
        $('#openForgotModal').on('click', function(e) {
            e.preventDefault();
            $('#forgotPasswordModal').addClass('show');
        });
        
        // Close modal
        $('#closeForgotModal').on('click', function() {
            $('#forgotPasswordModal').removeClass('show');
        });
        
        // Close modal when clicking outside
        $('#forgotPasswordModal').on('click', function(e) {
            if (e.target.id === 'forgotPasswordModal') {
                $(this).removeClass('show');
            }
        });
        
       
        
        // Login form validation
        $('#loginForm').on('submit', function(e) {
            e.preventDefault();
            
            const email = $('#loginEmail').val().trim();
            const password = $('#loginPassword').val();
            
            // Validation 1: Email empty check 
            if (email == null || email == "") {
                alert('Email cannot be empty!');
                $('#loginEmail').focus();
                return false;
            }
            
            // Validation 2: Email format check 
            if (!isValidEmail(email)) {
                alert('Invalid email format!\nExample: user@domain.com');
                $('#loginEmail').focus();
                return false;
            }
            
            // Validation 3: Password empty check
            if (password == null || password == "") {
                alert('Password cannot be empty!');
                $('#loginPassword').focus();
                return false;
            }
            
            // Validation 4: Password length check
            if (password.length < 6) {
                alert('Password must be at least 6 characters!');
                $('#loginPassword').focus();
                return false;
            }
            
            // Success
            alert('Welcome back to Sweet Tooth!\nLogin successful!');
            this.reset();
            return false;
        });
    });

    // FORM 2: ORDER/CONTACT FORM
    $('#contactOrderForm').on('submit', function (e) {
        e.preventDefault();
        
        const emailOrder = $('#emailOrder').val().trim();
        const password = $('#password').val().trim();
        const delivery = $('input[name="delivery"]:checked').val();
        const paymentMethod = $('#paymentMethod').val();
        const message = $('#message').val().trim();
        const agree = $('#agree').is(':checked');
        const address = $('#address').val() ? $('#address').val().trim() : '';
        
        let errors = [];
        
        if (!isValidEmail(emailOrder)) errors.push('Valid email required');
        if (password.length < 6) errors.push('Password must be 6+ characters');
        if (!delivery) errors.push('Choose delivery option');
        if (!paymentMethod) errors.push('Choose payment method');
        if (!message) errors.push('Message required');
        if (delivery === 'delivery' && !address) errors.push('Address required for delivery');
        if (!agree) errors.push('Accept terms & conditions');
        
        if (errors.length > 0) {
            alert('Please fix:\n• ' + errors.join('\n• '));
            return;
        }
        
        alert(`Thank you for your order!\n\nEmail: ${emailOrder}\nDelivery: ${delivery}\nPayment: ${paymentMethod}\n\nWe will contact you soon! 🍰`);
        
        this.reset();
        cart = [];
        renderCart();
        $('#addressGroup').addClass('d-none');
        $('#paymentHelper').html('');
    });
    
    // FORM 3: TESTIMONIAL FORM
    $(document).on('submit', '#testimonialForm', function (e) {
        e.preventDefault();
        
        const name = $('#testiName').val().trim();
        const rating = $('#testiRating').val();
        const msg = $('#testiMessage').val().trim();
        
        if (!rating) {
            alert('Please select a rating!');
            return false;
        }
        
        if (msg == "") {
            alert('Review message cannot be empty!');
            return false;
        }
        
        if (msg.length < 10) {
            alert('Review must be at least 10 characters long!');
            return false;
        }
        
        const displayName = name || 'Anonymous';
        alert(`Thank you for your feedback, ${displayName}!\nRating: ${rating} stars`);
        this.reset();
    });
    
    // FORM 4: REGISTRATION FORM
    $(document).on('submit', '#registerForm', function (e) {
            e.preventDefault();
            
            const firstName = $('#firstName').val().trim();
            const lastName = $('#lastName').val().trim();
            const email = $('#registerEmail').val().trim();
            const phone = $('#registerPhone').val().trim();
            const password = $('#registerPassword').val();
            const confirmPassword = $('#confirmPassword').val();
            const dob = $('#registerDob').val().trim();
            const terms = $('#terms').is(':checked');
            
            // Validation 1: First name
            if (firstName == null || firstName == "") {
                alert('First name cannot be empty!');
                $('#firstName').focus();
                return false;
            }
            
            // Validation 2: Last name
            if (lastName == null || lastName == "") {
                alert('Last name cannot be empty!');
                $('#lastName').focus();
                return false;
            }
            
            // Validation 3: Email empty
            if (email == null || email == "") {
                alert('Email cannot be empty!');
                $('#registerEmail').focus();
                return false;
            }
            
            // Validation 4: Email format 
            if (!isValidEmail(email)) {
                alert('Invalid email format!\nExample: user@domain.com');
                $('#registerEmail').focus();
                return false;
            }
            
            // Validation 5: Phone empty
            if (phone == null || phone == "") {
                alert('Phone number cannot be empty!');
                $('#registerPhone').focus();
                return false;
            }
            
            // Validation 6: Phone format 
            const phoneDigits = phone.replace(/[^0-9]/g, '');
            if (isNaN(phoneDigits) || phoneDigits.length < 10) {
                alert('Phone number must be at least 10 digits!');
                $('#registerPhone').focus();
                return false;
            }
            
            // Validation 7: Password length
            if (password == null || password == "" || password.length < 8) {
                alert('Password must be at least 8 characters long!');
                $('#registerPassword').focus();
                return false;
            }
            
            // Validation 8: Password match
            if (password != confirmPassword) {
                alert('Passwords do not match!');
                $('#confirmPassword').focus();
                return false;
            }
            
            // Validation 9: Date of birth 
            if (dob == null || dob == "") {
                alert('Date of birth is required!\nFormat: YYYY-MM-DD (e.g. 2000-01-15)');
                $('#registerDob').focus();
                return false;
            }
            
            if (!isValidDate(dob)) {
                alert('Invalid date format!\nPlease use: YYYY-MM-DD (e.g. 2000-01-15)');
                $('#registerDob').focus();
                return false;
            }
            
            // Validation 10: Terms checkbox
            if (!terms) {
                alert('You must accept the terms and conditions!');
                $('#terms').focus();
                return false;
            }
            
            // Success
            alert(` Welcome to Sweet Tooth, ${firstName} ${lastName}!\nRegistration successful!`);
            this.reset();
            return false;
    });
        
    // FORM 5: LOGIN FORM
    $(document).on('submit', '#loginForm', function (e) {
            e.preventDefault();
            
            const email = $('#loginEmail').val().trim();
            const password = $('#loginPassword').val();
            
            // Validation 1: Email empty check 
            if (email == null || email == "") {
                alert('Email cannot be empty!');
                $('#loginEmail').focus();
                return false;
            }
            
            // Validation 2: Email format check 
            if (!isValidEmail(email)) {
                alert('Invalid email format!\nExample: user@domain.com');
                $('#loginEmail').focus();
                return false;
            }
            
            // Validation 3: Password empty check
            if (password == null || password == "") {
                alert('Password cannot be empty!');
                $('#loginPassword').focus();
                return false;
            }
            
            // Validation 4: Password length check
            if (password.length < 6) {
                alert('Password must be at least 6 characters!');
                $('#loginPassword').focus();
                return false;
            }
            
            // Success
            alert('Welcome back to Sweet Tooth!\nLogin successful!');
            this.reset();
            return false;
        });
        
        console.log('All JavaScript validations loaded successfully!');
    }); 
    

// STANDALONE FUNCTIONS 

// Toggle password visibility
function togglePassword(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    
    const icon = event.target;
    const isPassword = input.type === 'password';
    
    input.type = isPassword ? 'text' : 'password';
    icon.classList.toggle('fa-eye', !isPassword);
    icon.classList.toggle('fa-eye-slash', isPassword);
}

// Check password strength
function checkPasswordStrength() {
    const password = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
    const strengthContainer = document.getElementById('passwordStrength');
    
    if (!password || !strengthBar || !strengthContainer) return;
    
    const value = password.value;
    
    if (!value.length) {
        strengthContainer.style.display = 'none';
        return;
    }
    
    strengthContainer.style.display = 'block';
    
    let strength = 0;
    if (value.length >= 8) strength++;
    if (value.match(/[a-z]/) && value.match(/[A-Z]/)) strength++;
    if (value.match(/[0-9]/)) strength++;
    if (value.match(/[^a-zA-Z0-9]/)) strength++;
    
    strengthBar.className = 'password-strength-bar ' + 
        (strength <= 2 ? 'strength-weak' : strength === 3 ? 'strength-medium' : 'strength-strong');

}

