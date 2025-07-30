document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Hide previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Check for demo credentials
    if (email === 'demo@vestrix.com' && password === 'demo123') {
        // Store user data in localStorage
        const userData = {
            name: 'Demo User',
            email: email,
            phone: '+1 (555) 123-4567',
            isLoggedIn: true
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        
        successMessage.textContent = 'Login successful! Redirecting...';
        successMessage.style.display = 'block';
        
        // Redirect to intended page after 1 second
        setTimeout(() => {
            const redirect = localStorage.getItem('redirectAfterLogin');
            if (redirect) {
                localStorage.removeItem('redirectAfterLogin');
                window.location.href = redirect;
            } else {
                window.location.href = 'index.html';
            }
        }, 1000);
    } else {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Store user data in localStorage
            const userData = {
                name: user.name,
                email: user.email,
                phone: user.phone,
                isLoggedIn: true
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            
            successMessage.textContent = 'Login successful! Redirecting...';
            successMessage.style.display = 'block';
            
            // Redirect to intended page after 1 second
            setTimeout(() => {
                const redirect = localStorage.getItem('redirectAfterLogin');
                if (redirect) {
                    localStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirect;
                } else {
                    window.location.href = 'index.html';
                }
            }, 1000);
        } else {
            errorMessage.textContent = 'Invalid email or password. Please try again.';
            errorMessage.style.display = 'block';
        }
    }
}); 