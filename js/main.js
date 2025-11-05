//For browsers under 800px, opens the sidebar.
function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
//For browsers under 800px, closes the sidebar.
function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'None';
}
//Gets the nav.html file, so it can be loaded in other html files just by a div
fetch('../nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navigacija').innerHTML = data;
  })
  .catch(err => console.error('Failed to load nav:', err));

//Gets the footer.html file, so it can be easiely loaded in other html files just by a div.
fetch('../footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footers').innerHTML = data;
  })
  .catch(err => console.error('Failed to load footer', err));