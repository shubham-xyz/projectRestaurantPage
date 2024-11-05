export default function loadMenu(contentDiv) {
    const menuContent = document.createElement('div');
    menuContent.innerHTML = `
      <h1>Our Menu</h1>
      <ul>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Burgers</li>
        <li>Desserts</li>
      </ul>
    `;
    contentDiv.appendChild(menuContent);
  }
  