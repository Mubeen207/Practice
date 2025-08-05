function app() {
  return {
    darkMode: false,
    heroImgs: [
      "https://source.unsplash.com/400x300/?event,people",
      "https://source.unsplash.com/400x300/?concert,live",
      "https://source.unsplash.com/400x300/?audience,lights",
      "https://source.unsplash.com/400x300/?crowd,show",
    ],
    galleryImgs: [
      ...Array.from(
        { length: 9 },
        (_, i) => `https://source.unsplash.com/600x400/?event,${i}`
      ),
    ],
    testimonials: [
      {
        name: "Sara Khan",
        role: "Event Planner",
        quote: "Their streaming quality blew our audience away!",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Ali Raza",
        role: "Producer",
        quote: "The analytics helped us improve engagement in real-time.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Maria Lopez",
        role: "CEO, LiveX",
        quote: "A game-changer for our hybrid conferences.",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      },
    ],
    lightboxOpen: false,
    lightboxImg: "",
    scrollBtn: false,
    init() {
      AOS.init({ duration: 800, once: true });
      new Swiper(".mySwiper", {
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 3500 },
      });
      window.addEventListener(
        "scroll",
        () => (this.scrollBtn = window.scrollY > 400)
      );
      document.getElementById("year").textContent = new Date().getFullYear();
      // Persist theme if preferred
      if (localStorage.getItem("umh-dark") === "1") {
        this.darkMode = true;
      }
      this.$watch("darkMode", (val) =>
        localStorage.setItem("umh-dark", val ? "1" : "0")
      );
    },
    openLightbox(src) {
      this.lightboxImg = src;
      this.lightboxOpen = true;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    submitForm() {
      alert("Message sent! We will reach out soon.");
    },
  };
}
