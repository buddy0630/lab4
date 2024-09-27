// Scroll Animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerHeight = window.innerHeight / 1.2;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < triggerHeight) {
            section.classList.add('visible');
        }
    });
});
