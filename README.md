# Vestrix - Login System

A modern, responsive login and signup system for the Vestrix fashion website built with vanilla HTML, CSS, and JavaScript.

## Features

### 🔐 Authentication System
- **Modern Login Page**: Clean, responsive design with form validation
- **Signup Page**: Complete registration form with password requirements
- **Home Page**: Protected dashboard with user profile functionality
- **localStorage Integration**: Simulates user authentication without backend

### 🎨 Design Features
- **Consistent Styling**: Matches the existing Vestrix brand colors and design
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects and transitions for better UX
- **Modern UI**: Glassmorphism effects and gradient backgrounds

### 👤 User Profile System
- **Profile Dropdown**: Click the profile icon in the top-right corner
- **User Details**: Displays name, email, and phone number
- **Logout Functionality**: Secure logout with redirect to login page
- **Session Management**: Uses localStorage to maintain user session

## Pages

### 1. Login Page (`login.html`)
- Email and password authentication
- Form validation with error messages
- Demo credentials for testing
- Link to signup page
- Redirects to home page on successful login

### 2. Signup Page (`signup.html`)
- Complete registration form
- Password strength validation
- Email and phone number validation
- Duplicate email checking
- Automatic login after successful registration

### 3. Dashboard Page (`dashboard.html`)
- Protected dashboard (redirects to login if not authenticated)
- Navigation menu with profile icon
- User profile dropdown with details
- Dashboard features (Order History, Wishlist, Profile Settings, etc.)
- Logout functionality
- Responsive design

## Demo Credentials

For testing purposes, you can use these demo credentials:
- **Email**: `demo@vestrix.com`
- **Password**: `demo123`

## How to Use

1. **Start with Login**: Open `login.html` in your browser
2. **Use Demo Credentials**: Enter the demo credentials above
3. **Explore Main Site**: After login, you'll be redirected to `index.html`
4. **View Profile**: Click the profile icon in the top-right corner
5. **Access Dashboard**: Click "Dashboard" in the profile dropdown
6. **Logout**: Use the logout button in the profile dropdown

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and form elements
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: No frameworks or libraries required
- **localStorage**: Client-side data persistence

### Key Features
- **Form Validation**: Real-time validation with helpful error messages
- **Password Requirements**: Enforces strong password policies
- **Session Management**: Maintains user login state across page refreshes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Proper labels, focus states, and semantic HTML

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure

```
├── login.html          # Login page with authentication
├── signup.html         # Registration page
├── dashboard.html      # Protected dashboard page
├── index.html          # Main website (existing)
├── styles/
│   ├── login.css       # Login page styles
│   ├── signup.css      # Signup page styles
│   └── home.css        # Home page styles
├── js/
│   ├── login.js        # Login page functionality
│   ├── signup.js       # Signup page functionality
│   ├── home.js         # Home page functionality
│   ├── index.js        # Index page functionality
│   └── dashboard.js    # Dashboard page functionality
├── README.md           # This documentation
└── [other existing files...]
```

## Security Notes

⚠️ **Important**: This is a frontend-only implementation for demonstration purposes. In a production environment, you would need:

- Backend server for authentication
- Secure password hashing
- HTTPS encryption
- Session management
- CSRF protection
- Rate limiting

## Customization

### Colors
The system uses CSS custom properties for easy customization:
- Primary Gold: `#d4af37`
- Dark Gold: `#a68420`
- Text Colors: Various shades of gray
- Background: Gradient combinations

### Styling
All styles are separated into individual CSS files in the `styles/` directory for better organization and maintainability. The design follows the existing Vestrix brand guidelines.

### JavaScript
All functionality is separated into individual JavaScript files in the `js/` directory for better code organization and reusability.

## Future Enhancements

Potential improvements for a production system:
- Backend API integration
- Password reset functionality
- Email verification
- Two-factor authentication
- User profile editing
- Order history integration
- Wishlist functionality 