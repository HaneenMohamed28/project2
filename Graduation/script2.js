const languageToggle = document.querySelector('.language-toggle');
const dropdown = document.querySelector('.dropdown');

languageToggle.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

dropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const selectedLanguage = e.target.textContent;
    alert(`Language switched to: ${selectedLanguage}`);

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

// Update the user's encounters dynamically
document.addEventListener("DOMContentLoaded", () => {
  const encountersElement = document.querySelector(".encounter h3");

  // Example: Fetch data from an API
  fetch("https://example.com/api/encounters")
    .then(response => response.json())
    .then(data => {
      encountersElement.textContent = data.encounters; // Assuming the API returns { encounters: 3 }
    })
    .catch(error => console.error("Error fetching encounters:", error));
});
// Static data for table
const tableData = [
  { id: 1, name: "Ahmed Ali", encounterDate: "02/04/2023", diseases: "Diabetes" },
  { id: 2, name: "Mahmoud Hamdy", encounterDate: "05/12/2023", diseases: "Headache" },
  { id: 3, name: "Mohamed Hassan", encounterDate: "25/08/2023", diseases: "Diabetes" },
];

const tableBody = document.getElementById("table-body");

// Populate the table dynamically
tableData.forEach((patient) => {
  const tr = document.createElement("tr");
  tr.setAttribute("data-id", patient.id); // Store patient ID in a data attribute
  tr.innerHTML = `
    <td>${patient.name}</td>
    <td>${patient.encounterDate}</td>
    <td>${patient.diseases}</td>
  `;
  tableBody.appendChild(tr);
});

// Handle row click
tableBody.addEventListener("click", (event) => {
  const clickedRow = event.target.closest("tr");
  if (clickedRow) {
    const patientId = clickedRow.getAttribute("data-id");
    // Store selected patient ID in localStorage
    localStorage.setItem("selectedPatientId", patientId);
    // Redirect to the details page
    window.location.href = "index3.html"; // تأكد أن الاسم هنا صحيح
  }
});

