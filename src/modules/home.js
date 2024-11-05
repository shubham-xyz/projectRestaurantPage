export default function loadHome(contentDiv) {
    const homeContent = document.createElement('div');
    homeContent.innerHTML = `
      <h1>Welcome to Our Restaurant!</h1>
      <p>We offer the best food in town!</p>
    `;
    contentDiv.appendChild(homeContent);
  }
  