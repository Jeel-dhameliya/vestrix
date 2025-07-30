// Check if user is logged in and update UI accordingly
function checkAuthAndUpdateUI() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const loginBtn = document.querySelector('.login-btn');
    const loginContainer = document.querySelector('.login-button-container');
    
    if (userData.isLoggedIn) {
        // User is logged in, show profile dropdown
        loginContainer.innerHTML = `
            <div class="profile-container">
                <div class="profile-icon" id="profileIcon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" stroke="#d4af37" stroke-width="2" fill="#fff"/>
                    <path d="M16 17c3.5 0 6-2.5 6-6s-2.5-6-6-6-6 2.5-6 6 2.5 6 6 6zm0 2c-4 0-12 2-12 6v3h24v-3c0-4-8-6-12-6z" fill="#d4af37"/>
                  </svg>
                </div>
                <div class="profile-dropdown" id="profileDropdown">
                    <div class="profile-header">
                        <div class="profile-avatar" id="profileAvatar">
                          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="15" stroke="#d4af37" stroke-width="2" fill="#fff"/>
                            <path d="M16 17c3.5 0 6-2.5 6-6s-2.5-6-6-6-6 2.5-6 6 2.5 6 6 6zm0 2c-4 0-12 2-12 6v3h24v-3c0-4-8-6-12-6z" fill="#d4af37"/>
                          </svg>
                        </div>
                        <div class="profile-name" id="profileName">${userData.name}</div>
                        <div class="profile-email" id="profileEmail">${userData.email}</div>
                    </div>
                    <div class="profile-details">
                        <div class="detail-item">
                            <span class="detail-label">Email:</span>
                            <span class="detail-value" id="detailEmail">${userData.email}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Phone:</span>
                            <span class="detail-value" id="detailPhone">${userData.phone}</span>
                        </div>
                    </div>
                    <div class="profile-actions">
                      <button class="dashboard-link" id="dashboardBtn">Dashboard</button>
                      <button class="logout-btn" id="logoutBtn">Logout</button>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize profile dropdown functionality
        initProfileDropdown();
    } else {
        // User is not logged in, show login and signup buttons
        loginContainer.innerHTML = `
            <a href="signup.html" class="signup-btn">Sign Up</a>
            <a href="login.html" class="login-btn">Login</a>
        `;
    }
}

// Get user initials from name
function getUserInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// Initialize profile dropdown functionality
function initProfileDropdown() {
    const profileIcon = document.getElementById('profileIcon');
    const profileDropdown = document.getElementById('profileDropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const dashboardBtn = document.getElementById('dashboardBtn'); // Added dashboardBtn

    if (!profileIcon || !profileDropdown || !logoutBtn || !dashboardBtn) return; // Added dashboardBtn check

    // Toggle dropdown
    profileIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileDropdown.contains(e.target) && !profileIcon.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('userData');
        window.location.reload(); // Reload page to show login button
    });

    // Dashboard functionality
    dashboardBtn.addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });
}

// Intercept main nav links if not logged in
function setupProtectedNavLinks() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData.isLoggedIn) {
        const protectedLinks = [
            'index.html', 'arrivals.html', 'collections.html', 'accessories.html',
            'lookbook.html', 'giftcard.html', 'cart.html'
        ];
        document.querySelectorAll('.menu a').forEach(link => {
            const href = link.getAttribute('href');
            if (protectedLinks.some(page => href && href.includes(page))) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.setItem('redirectAfterLogin', href);
                    window.location.href = 'login.html';
                });
            }
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkAuthAndUpdateUI();
    setupProtectedNavLinks();
}); 