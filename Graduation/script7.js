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

document.addEventListener('DOMContentLoaded', () => {
    // روابط API وهمية
    const apiMonthReport = "https://api.example.com/month-report";
    const apiDayReport = "https://api.example.com/day-report";
    const apiNumReport = "https://api.example.com/num-report";
  
    // جلب البيانات من API
    fetch(apiMonthReport)
      .then(response => response.json())
      .then(data => {
        document.getElementById('month-report').textContent = data.value || 20; // قيمة وهمية 20
      })
      .catch(error => console.error('Error fetching month report:', error));
  
    fetch(apiDayReport)
      .then(response => response.json())
      .then(data => {
        document.getElementById('day-report').textContent = data.value || 5; // قيمة وهمية 5
      })
      .catch(error => console.error('Error fetching day report:', error));
  
    fetch(apiNumReport)
      .then(response => response.json())
      .then(data => {
        document.getElementById('num-report').textContent = data.value || 2; // قيمة وهمية 2
      })
      .catch(error => console.error('Error fetching num report:', error));
  });
  // API URL الوهمية
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// بيانات وهمية لمحاكاة ردّ الـ API
const fakeData = [
    { name: "Ahmed Ali", date: "02/04/2023", report: "Diabetes" },
    { name: "Mahmoud Hamdy", date: "05/12/2023", report: "Headache" }
];

// دالة لإضافة البيانات إلى الجدول
function populateTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ""; // مسح أي بيانات حالية داخل الجدول

    // إنشاء صفوف لكل عنصر في البيانات
    data.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>${entry.report}</td>
        `;

        tableBody.appendChild(row);
    });
}

// دالة لمحاكاة جلب البيانات من API
function fetchReports() {
    console.log(`Fetching data from: ${apiUrl}`);
    
    // محاكاة تأخير قبل جلب البيانات
    setTimeout(() => {
        populateTable(fakeData); // استخدام البيانات الوهمية
    }, 1000);
}

// جلب البيانات عند تحميل الصفحة
window.onload = fetchReports;
