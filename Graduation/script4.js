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



 
// Simulating an API for user data
const mockApi = {
  getUserData: () => {
    // Simulating a GET request for user data
    return {
      name: "D.Ali Ahmed",
      email: "aliahmed@gmail.com",
      specialist: "Heart Diseases",
      password: "*********"
    };
  },

  updateUserData: (data) => {
    // Simulating a POST request to update user data
    console.log("User data updated:", data);
    return { status: "success", message: "User data updated successfully" };
  }
};

// Event listener for form submission
document.getElementById("user-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const specialist = document.getElementById("specialist").value;
  const password = document.getElementById("password").value;

  // Data to be updated
  const userData = { name, email, specialist, password };

  // Simulating API call to update user data
  const response = mockApi.updateUserData(userData);
  alert(response.message);
});


window.onload = function() {
  const userData = mockApi.getUserData();
  document.getElementById("name").value = userData.name;
  document.getElementById("email").value = userData.email;
  document.getElementById("specialist").value = userData.specialist;
  document.getElementById("password").value = userData.password;
};
