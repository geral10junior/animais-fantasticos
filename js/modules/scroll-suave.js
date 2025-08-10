export default function initScrollToSection() {
  const internalLinks = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // forma alternativa
    //  const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
