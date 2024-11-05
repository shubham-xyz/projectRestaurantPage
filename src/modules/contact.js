export default function loadContact(contentDiv) {
    const contactContent = document.createElement('div');
    contactContent.innerHTML = `
      <h1>Contact Us</h1>
      <p>Email: contact@restaurant.com</p>
      <p>Phone: 999999999</p>
    `;
    contentDiv.appendChild(contactContent);
  }
  