const languageToggle = document.querySelector('.language-toggle');
const dropdown = document.querySelector('.dropdown');

// Language toggle logic
languageToggle.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        const selectedLanguage = e.target.textContent;
        alert(`Language switched to: ${selectedLanguage}`);
        // Here you can implement language switching logic
        dropdown.style.display = 'none';
    }
});
// Sidebar logic
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');
const mainContent = document.querySelector('.container');

// Toggle Sidebar
toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('sidebar-active');
}); 
document.getElementById('chatForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // إرسال البيانات إلى API وهمي
    fetch('https://api.example.com/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Message sent successfully!');
        console.log(data);
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  });