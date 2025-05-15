// Lấy dữ liệu từ localStorage để hiển thị
const user = JSON.parse(localStorage.getItem('user')) || {};
document.getElementById('username').value = user.username || '';
document.getElementById('email').value = user.email || '';

// Cập nhật dữ liệu khi submit
document.getElementById('editProfileForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const updatedUser = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value
  };
  localStorage.setItem('user', JSON.stringify(updatedUser));
  alert("Cập nhật thành công!");
});
