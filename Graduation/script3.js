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
window.addEventListener('DOMContentLoaded', () => {
    const selectedPatientId = localStorage.getItem('selectedPatientId');
    
    if (selectedPatientId) {
      // استخدم البيانات المخزنة أو استدعي API للحصول على تفاصيل المريض
      const patient = tableData.find(p => p.id == selectedPatientId); // نبحث عن المريض باستخدام id
      if (patient) {
        document.getElementById('patient-name').textContent = patient.name;
        document.getElementById('encounter-date').textContent = patient.encounterDate;
        document.getElementById('disease').textContent = patient.diseases;
      } else {
        alert("Patient not found.");
      }
    } else {
      alert('No patient selected');
    }
  });