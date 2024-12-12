function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // تحقق من ملء الحقول
  if (!email || !password) {
    alert('Please fill out all fields.');
    return false; // لا يتم إرسال النموذج
  }

  // استدعاء دالة loginUser للتحقق من بيانات الدخول
  loginUser(email, password);

  return false; // عدم إعادة تحميل الصفحة بعد تقديم النموذج
}

async function loginUser(email, password) {
  const apiUrl = 'https://example.com/api/login'; // استبدل بهذا الرابط الفعلي لـ API
  const requestBody = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      alert('Login successful!');
      console.log('Response:', data);

      // إذا تم التحقق من البيانات بنجاح، سيتم نقل المستخدم إلى الصفحة التالية
      window.location.href = 'index2.html'; // استبدل 'nextPage.html' بعنوان الصفحة المطلوبة
    } else {
      const errorData = await response.json();
      alert(`Login failed: ${errorData.message}`); // عرض رسالة فشل تسجيل الدخول
    }
  } catch (error) {
    alert('An error occurred while connecting to the server.');
    console.error('Error:', error);
  }
} 