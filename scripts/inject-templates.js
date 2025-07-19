async function injectTemplate(selector, url) {
  const container = document.querySelector(selector);
  if (container) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const html = await res.text();
        container.innerHTML = html;
      }
    } catch (e) {
      // Fail silently
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectTemplate('header[data-include]', '/templates/header.html');
  injectTemplate('footer[data-include]', '/templates/footer.html');
}); 