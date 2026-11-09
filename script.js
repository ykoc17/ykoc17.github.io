document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('open');
  });
  
// Close the sidebar when clicking outside of it
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('open');
    }
  });


  const topBar = document.querySelector('.top-bar');

  if (topBar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        topBar.style.opacity = 1;
      } else {
        topBar.style.opacity = 0;
      }
    });
  }

const typingText = document.querySelector('.typing-text');

if (typingText) {
  const text = typingText.textContent;
  const characters = Array.from(text);
  let visibleCharacters = 0;

  typingText.textContent = '';
  typingText.classList.add('is-typing');

  function typeNextCharacter() {
    typingText.textContent += characters[visibleCharacters];
    const currentCharacter = characters[visibleCharacters];
    visibleCharacters += 1;

    if (visibleCharacters === characters.length) {
      typingText.classList.remove('is-typing');
      return;
    }

    const pause = currentCharacter === ',' || characters[visibleCharacters] === '👋' ? 350 : 100;
    window.setTimeout(typeNextCharacter, pause);
  }

  window.setTimeout(typeNextCharacter, 100);
}
