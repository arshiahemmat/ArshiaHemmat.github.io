/*
 * Simple script to toggle dark mode on and off.  When the user
 * clicks the theme toggle button, a `dark-mode` class is toggled on
 * the body element.  The preference is stored in `localStorage` so
 * that subsequent visits remember the selected theme.
 */
(function() {
  // Helper to apply the saved theme on load
  function applySavedTheme() {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        document.body.classList.add('dark-mode');
      }
    } catch (err) {
      // If localStorage isn’t available, ignore and default to light mode
    }
  }

  // Apply the saved theme when the DOM content has loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySavedTheme);
  } else {
    applySavedTheme();
  }

  // Wait for the document to be ready before attaching the click handler
  document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      try {
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      } catch (err) {
        // localStorage might be unavailable; ignore persist
      }
    });
  });
})();