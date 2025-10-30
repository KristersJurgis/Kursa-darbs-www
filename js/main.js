function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'None';
}
fetch('../nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navigacija').innerHTML = data;
  })
  .catch(err => console.error('Failed to load nav:', err));

fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footers').innerHTML = data;
  })
  .catch(err => console.error('Failed to load footer', err));