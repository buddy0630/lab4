// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Scroll Animation
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('active'); // Add a class to trigger CSS animations
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// CSS Animation Class
const style = document.createElement('style');
style.innerHTML = `
    .section.active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(style);
// Function to toggle chat widget visibility
function toggleChat() {
    const chatContent = document.getElementById("chat-content");
    if (chatContent.style.display === "block") {
        chatContent.style.display = "none"; // Hide chat content
    } else {
        chatContent.style.display = "block"; // Show chat content
    }
}

// Function to toggle chat widget visibility
const chatButton = document.querySelector('.chat-button');
const chatPopup = document.querySelector('.chat-popup');

chatButton.addEventListener('click', () => {
    chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'block' : 'none';
});

// Close button functionality
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});
