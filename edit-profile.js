// Image preview for profile picture
const profilePicInput = document.getElementById('profile-pic');
const profilePicPreview = document.getElementById('profile-pic-preview');
const editProfileForm = document.getElementById('edit-profile-form');
const messageDiv = document.getElementById('edit-profile-message');

if (profilePicInput && profilePicPreview) {
  profilePicInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        profilePicPreview.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

if (editProfileForm) {
  editProfileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
      messageDiv.textContent = 'Name and Email are required.';
      messageDiv.style.color = '#c0392b';
      return;
    }
    // Simulate save
    messageDiv.textContent = 'Profile updated successfully!';
    messageDiv.style.color = '#27ae60';
    // Optionally reset password field
    document.getElementById('password').value = '';
  });
} 