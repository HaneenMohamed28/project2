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
// إجراء بحث عبر API وهمي
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-icon-btn');

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    fetchSearchResults(query);
  } else {
    alert('Please enter a search term');
  }
});

// دالة البحث عبر API وهمي
function fetchSearchResults(query) {
  fetch(`https://fakeapi.com/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        alert(`Found ${data.results.length} result(s) for "${query}"`);
        console.log(data.results);
      } else {
        alert('No results found');
      }
    })
    .catch(error => console.error('Error:', error));
}

// إرسال بيانات نموذج جديد عبر API وهمي
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const id = formData.get('id');
  submitNewEncounter(id);
});

// دالة إرسال بيانات النموذج عبر API وهمي
function submitNewEncounter(id) {
  fetch('https://fakeapi.com/encounter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ encounterId: id })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert(`Encounter with ID ${id} created successfully!`);
    } else {
      alert('Failed to create encounter.');
    }
  })
  .catch(error => console.error('Error:', error));
}
