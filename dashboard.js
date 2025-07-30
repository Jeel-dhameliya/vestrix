// Check if user is logged in and update UI accordingly
function checkAuthAndUpdateUI() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const loginBtn = document.querySelector('.login-btn');
    const loginContainer = document.querySelector('.login-button-container');
    
    if (userData.isLoggedIn) {
        // User is logged in, show profile dropdown
        loginContainer.innerHTML = `
            <div class="profile-container">
                <div class="profile-icon" id="profileIcon">${getUserInitials(userData.name)}</div>
                <div class="profile-dropdown" id="profileDropdown">
                    <div class="profile-header">
                        <div class="profile-avatar" id="profileAvatar">${getUserInitials(userData.name)}</div>
                        <div class="profile-name" id="profileName">${userData.name}</div>
                        <div class="profile-email" id="profileEmail">${userData.email}</div>
                    </div>
                    <div class="profile-details">
                        <div class="detail-item">
                            <span class="detail-icon">📧</span>
                            <span class="detail-label">Email:</span>
                            <span class="detail-value" id="detailEmail">${userData.email}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📱</span>
                            <span class="detail-label">Phone:</span>
                            <span class="detail-value" id="detailPhone">${userData.phone}</span>
                        </div>
                    </div>
                    <button class="logout-btn" id="logoutBtn">Logout</button>
                </div>
            </div>
        `;
        
        // Initialize profile dropdown functionality
        initProfileDropdown();
    } else {
        // User is not logged in, redirect to login
        window.location.href = 'login.html';
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

    if (!profileIcon || !profileDropdown || !logoutBtn) return;

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
        window.location.href = 'index.html';
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkAuthAndUpdateUI();
}); 