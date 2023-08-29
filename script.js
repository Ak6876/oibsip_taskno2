const containers = document.querySelectorAll('.container');
window.addEventListener('load', () => {
    containers[0].classList.add('active'); // Make the first container visible initially
});
        window.addEventListener('scroll', () => {
            containers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight * 0.75) {
                    container.classList.add('active');
                } else {
                    container.classList.remove('active');
                }
            });
        });