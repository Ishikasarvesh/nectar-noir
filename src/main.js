import "./style.css";
import gsap from "gsap";
import Lenis from "lenis";

document.querySelector("#app").innerHTML = `
  <div class="loader">
    <div class="loader-top">
      <span>Nectar Noir</span>
      <span>Archive System</span>
    </div>

    <div class="loader-center">
      <p class="loader-status">
        Initialising extraction protocol
      </p>

      <div class="loader-percentage">
        0%
      </div>
    </div>

    <div class="loader-bottom">
      <div class="loader-progress">
        <div class="loader-progress-fill"></div>
      </div>

      <div class="loader-message">
        Locating hive network...
      </div>
    </div>
  </div>

  <main class="website">

    <header class="navbar">
      <a href="#" class="brand">
        NECTAR NOIR
      </a>

      <nav class="desktop-nav">
        <a href="#origin">Origin</a>
        <a href="#process">Process</a>
        <a href="#collection">Collection</a>
      </nav>

      <button class="menu-button" type="button">
        Menu
      </button>
    </header>

    <section class="hero">

      <div class="hero-background">
        <div class="glow glow-one"></div>
        <div class="glow glow-two"></div>
      </div>

      <div class="hero-top-label">
        <span>Substance H-01</span>
        <span>Harvested in secrecy</span>
      </div>

      <div class="hero-content">

        <p class="eyebrow">
          Rare honey archive / Batch 001
        </p>

        <h1>
          <span class="hero-line">
            The world's most guarded
          </span>

          <span class="hero-line hero-gold-line">
            golden liquid.
          </span>
        </h1>

        <p class="hero-description">
          Nectar Noir preserves rare honey harvested from extraordinary
          landscapes, protected in limited batches and released only to
          selected collectors.
        </p>

        <div class="hero-actions">
          <a href="#collection" class="primary-button">
            Enter the archive
          </a>

          <a href="#origin" class="text-button">
            Discover the origin
          </a>
        </div>

      </div>

      <div class="honey-orb-wrapper">
        <div class="honey-orb">
          <div class="orb-highlight"></div>
          <div class="orb-core"></div>
        </div>

        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>

        <span class="orb-label label-one">
          Purity 98.7%
        </span>

        <span class="orb-label label-two">
          Wildflower
        </span>

        <span class="orb-label label-three">
          Western Ghats
        </span>
      </div>

      <div class="hero-footer">
        <p>
          Scroll to begin extraction
        </p>

        <div class="scroll-line"></div>

        <p>
          18.5204° N / 73.8567° E
        </p>
      </div>

    </section>

    <section class="intro-section" id="origin">

      <div class="section-number">
        01
      </div>

      <div class="intro-content">

        <p class="section-label">
          Origin Archive
        </p>

        <h2>
          Every harvest carries the memory of its landscape.
        </h2>

        <p>
          Climate, flowers, altitude and season create a signature inside
          every vessel. Nectar Noir catalogues these differences and
          preserves each batch as a rare natural specimen.
        </p>

      </div>

      <div class="archive-card">

        <div class="archive-card-header">
          <span>Classified specimen</span>
          <span>H-01</span>
        </div>

        <div class="archive-visual">
          <div class="mini-orb"></div>
        </div>

        <div class="archive-data">
          <div>
            <span>Origin</span>
            <strong>Western Ghats</strong>
          </div>

          <div>
            <span>Source</span>
            <strong>Wildflower</strong>
          </div>

          <div>
            <span>Harvest</span>
            <strong>Spring 2026</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Restricted</strong>
          </div>
        </div>

      </div>

    </section>

  </main>
`;

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
});

function smoothScroll(time) {
  lenis.raf(time);
  requestAnimationFrame(smoothScroll);
}

requestAnimationFrame(smoothScroll);

const loaderMessages = [
  "Locating hive network...",
  "Verifying harvest records...",
  "Analysing purity levels...",
  "Unlocking nectar archive...",
  "Access granted.",
];

const loaderPercentage = document.querySelector(".loader-percentage");
const loaderMessage = document.querySelector(".loader-message");
const loaderProgressFill = document.querySelector(
  ".loader-progress-fill"
);

let loadingValue = 0;
let messageIndex = 0;

document.body.classList.add("is-loading");

const loadingInterval = setInterval(() => {
  loadingValue += Math.floor(Math.random() * 8) + 3;

  if (loadingValue >= 100) {
    loadingValue = 100;
  }

  loaderPercentage.textContent = `${loadingValue}%`;
  loaderProgressFill.style.width = `${loadingValue}%`;

  const newMessageIndex = Math.min(
    Math.floor(loadingValue / 25),
    loaderMessages.length - 1
  );

  if (newMessageIndex !== messageIndex) {
    messageIndex = newMessageIndex;
    loaderMessage.textContent = loaderMessages[messageIndex];
  }

  if (loadingValue === 100) {
    clearInterval(loadingInterval);

    setTimeout(() => {
      playEntranceAnimation();
    }, 500);
  }
}, 120);

function playEntranceAnimation() {
  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  timeline
    .to(".loader-center", {
      opacity: 0,
      y: -30,
      duration: 0.5,
    })
    .to(
      ".loader-top",
      {
        opacity: 0,
        duration: 0.4,
      },
      "<"
    )
    .to(
      ".loader-bottom",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
      },
      "<"
    )
    .to(".loader", {
      yPercent: -100,
      duration: 1.1,
      ease: "power4.inOut",
    })
    .set(".loader", {
      display: "none",
    })
    .call(() => {
      document.body.classList.remove("is-loading");
    })
    .from(".navbar", {
      y: -80,
      opacity: 0,
      duration: 0.8,
    })
    .from(
      ".hero-top-label span",
      {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".eyebrow",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
    .from(
      ".hero-line",
      {
        yPercent: 120,
        opacity: 0,
        stagger: 0.13,
        duration: 1,
      },
      "-=0.4"
    )
    .from(
      ".hero-description",
      {
        y: 35,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.5"
    )
    .from(
      ".hero-actions > *",
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".honey-orb-wrapper",
      {
        scale: 0.55,
        opacity: 0,
        rotation: -20,
        duration: 1.3,
        ease: "back.out(1.5)",
      },
      "-=1.1"
    )
    .from(
      ".orb-label",
      {
        scale: 0.7,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
      },
      "-=0.5"
    )
    .from(
      ".hero-footer",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.3"
    );
}

const hero = document.querySelector(".hero");
const honeyOrbWrapper = document.querySelector(".honey-orb-wrapper");

hero.addEventListener("mousemove", (event) => {
  const heroBounds = hero.getBoundingClientRect();

  const mouseX =
    event.clientX - heroBounds.left - heroBounds.width / 2;

  const mouseY =
    event.clientY - heroBounds.top - heroBounds.height / 2;

  gsap.to(honeyOrbWrapper, {
    x: mouseX * 0.025,
    y: mouseY * 0.025,
    rotationY: mouseX * 0.008,
    rotationX: -mouseY * 0.008,
    duration: 1,
    ease: "power2.out",
  });
});

hero.addEventListener("mouseleave", () => {
  gsap.to(honeyOrbWrapper, {
    x: 0,
    y: 0,
    rotationX: 0,
    rotationY: 0,
    duration: 1.2,
    ease: "power3.out",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    lenis.scrollTo(targetElement, {
      offset: 0,
      duration: 1.5,
    });
  });
});