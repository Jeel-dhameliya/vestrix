document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Hide previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        errorMessage.textContent = 'Please enter a valid phone number.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Password validation
    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
        errorMessage.textContent = 'Password must contain at least one lowercase letter.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
        errorMessage.textContent = 'Password must contain at least one uppercase letter.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!/(?=.*\d)/.test(password)) {
        errorMessage.textContent = 'Password must contain at least one number.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Confirm password
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        errorMessage.textContent = 'An account with this email already exists.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Create new user
    const newUser = {
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone,
        password: password
    };
    
    // Add to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Store user data for immediate login
    const userData = {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        isLoggedIn: true
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    successMessage.textContent = 'Account created successfully! Redirecting to home...';
    successMessage.style.display = 'block';
    
    // Redirect to index page after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}); 