async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = ''; // Clear existing content
    
    data.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'entry';
      
      const img = document.createElement('img');
      img.src = entry.image;
      img.alt = entry.title;

      const textDiv = document.createElement('div');

      const title = document.createElement('h1');
      title.textContent = entry.title;

      const subtitle = document.createElement('h2');
      subtitle.textContent = entry.subtitle;

      textDiv.appendChild(title);
      textDiv.appendChild(subtitle);
      div.appendChild(img);
      div.appendChild(textDiv);
      dynamicContent.appendChild(div);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

setInterval(fetchData, 5000); // Fetch new data every 5 seconds
window.onload = fetchData; // Fetch data when the page loads
