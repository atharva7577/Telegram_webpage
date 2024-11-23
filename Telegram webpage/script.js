// This can be used for adding interactivity like popups or telegram link redirects
document.querySelector('.join-btn').addEventListener('click', () => {
    window.location.href = 'https://t.me/+iVrSaSDy18xiOGM1';
});


// Sample data for highlights and stats
const highlightsData = [
    "BBL 2023: 72/74 Pass",
    "PSL: 31/32 Pass",
    "IPL 2024: 70/74 Pass",
    "No Loss Guaranteed",
    "World Cup 2023: 97% Accuracy"
  ];
  
  // Dynamic content injection for highlights
  const highlightsList = document.getElementById('highlights-list');
  highlightsData.forEach(highlight => {
    const listItem = document.createElement('li');
    listItem.textContent = highlight;
    highlightsList.appendChild(listItem);
  });
  
  // Dynamic accuracy stats
  const accuracyStat = document.getElementById('accuracy-stat');
  accuracyStat.innerHTML = `
    <h3>97%</h3>
    <p>Accuracy</p>
    <p>Sessions & Tosses</p>
  `;


