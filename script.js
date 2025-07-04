document.querySelectorAll('.box').forEach((box) => {
  const header = box.querySelector('.box-header');
  const colorSelect = box.querySelector('.color-section select');

  // Toggle expand/collapse on header click
  header.addEventListener('click', () => {
    box.classList.toggle('expanded');
  });

  // Change box background to modern styles
  colorSelect.addEventListener('change', (event) => {
    const selected = event.target.value.toLowerCase();

    let gradientMap = {
      red: 'linear-gradient(135deg, #ff4e50, #f9d423)',
      green: 'linear-gradient(135deg, #56ab2f, #a8e063)',
      blue: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
      pink: 'linear-gradient(135deg, #ec008c, #fc6767)',
      purple: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
      lavender: 'linear-gradient(135deg, #c471f5, #fa71cd)',
      orange: 'linear-gradient(135deg, #f12711, #f5af19)',
      yellow: 'linear-gradient(135deg, #fceabb, #f8b500)',
      gold: 'linear-gradient(135deg, #ffd700, #ffcc00)',
    };

    const selectedGradient = gradientMap[selected] || 'white';
    box.style.backgroundImage = selectedGradient;
    box.style.color = '#fff'; // Ensures text stays readable
  });
});
