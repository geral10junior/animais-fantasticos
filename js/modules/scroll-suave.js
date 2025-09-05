export default class ScrollToSection {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    // forma alternativa
    //  const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }
  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }
  init() {
    if (this.internalLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
