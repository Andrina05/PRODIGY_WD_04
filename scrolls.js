// Executes upon loading the page
document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll("section");

    // Change opacity of background images upon scrolling down
    const makeBGImageOpaque = () => {
        let scollPos = window.scrollY;          // current scroll position
        let winHeight = window.innerHeight;     // viewport height

        sections.forEach(section => {
            let sectionTop = section.offsetTop;         // position of section relative to the top
            let sectionHeight = section.offsetHeight;   // height of the section viewed

            // Dynamically find the amount of scrolling within the viewport
            let scrollProgress = (scollPos + winHeight - sectionTop) / sectionHeight;

            // scroll progress takes values between 0 and 1
            scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

            // opacity varies between 0.3 and 1
            let opacity = 0.7 + scrollProgress;

            section.style.transition = 'opacity 0.1s ease-out';
            section.style.opacity = opacity;
        });
    }

    window.addEventListener("scroll", makeBGImageOpaque);
    makeBGImageOpaque();
})
