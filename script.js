document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('open');
  });
  
// Close the sidebar when clicking outside of it
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('open');
    }
  });