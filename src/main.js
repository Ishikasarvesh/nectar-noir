import "./style.css";
import gsap from "gsap";
import Lenis from "lenis";

document.querySelector("#app").innerHTML = `
  <div class="access-gate">

  <div class="access-cities">

    <div class="access-city access-city-left">
      <span class="city-marker"></span>

      <p>Mumbai, India</p>

      <strong
        class="city-time"
        data-timezone="Asia/Kolkata"
      >
        00:00 GMT+5:30
      </strong>
    </div>

    <div class="access-city access-city-center">
      <span class="city-marker"></span>

      <p>Tokyo, Japan</p>

      <strong
        class="city-time"
        data-timezone="Asia/Tokyo"
      >
        00:00 GMT+9
      </strong>
    </div>

    <div class="access-city access-city-right">
      <span class="city-marker"></span>

      <p>New York, USA</p>

      <strong
        class="city-time"
        data-timezone="America/New_York"
      >
        00:00 GMT-5
      </strong>
    </div>

  </div>

  <div class="access-center">

    <button
      class="access-card"
      type="button"
      aria-label="Open passcode terminal"
    >
      <div class="card-noise"></div>
      <div class="card-shine"></div>

      <div class="card-header">
        <span>NN-26 / VLT</span>
        <span>AUTHORISED MATERIAL</span>
      </div>

      <div class="card-brand">
        NECTAR
        <span>NOIR</span>
      </div>

      <div class="card-divider"></div>

      <div class="card-information">

        <div>
          <strong>CONTROLLED</strong>
          <span>GOLDEN RESERVE</span>
        </div>

        <div>
          <strong>SUBSTANCE H-01</strong>
          <span>WILDFLOWER SPECIMEN</span>
        </div>

        <div>
          <strong>NECTAR NOIR</strong>
          <span>NON-TRANSFERABLE</span>
        </div>

      </div>

      <div class="card-honeycomb">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <div class="access-command">
      <button
        class="open-terminal-button"
        type="button"
      >
        Access the archive
      </button>

      <form class="passcode-form" autocomplete="off">

        <label for="access-passcode">
          Enter passcode
        </label>

        <div class="passcode-row">

          <input
            id="access-passcode"
            class="passcode-input"
            type="text"
            maxlength="4"
            placeholder="••••"
            aria-label="Archive passcode"
          />

          <button
            class="passcode-submit"
            type="submit"
          >
            Enter
          </button>

        </div>

        <p class="passcode-feedback">
          Awaiting authorisation
        </p>

      </form>
    </div>

  </div>

  <div class="access-footer">

    <p class="visible-passcode">
      Passcode: <strong>NN26</strong>
    </p>

    <p>
      © 2026 Nectar Noir. All rights reserved.
      Distributed under strict control. Unauthorised access,
      reproduction or modification is prohibited.
      NN26-VLT.
    </p>

  </div>

</div>
<div class="loader loader-hidden">
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

  <section class="texture-intro" id="texture-intro">

  <div class="texture-grid">

    <article class="texture-cell texture-cell-featured">
      <span class="texture-index">(01)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-01.jpg"
          alt="Golden honey texture"
        />
      </div>

      <span class="texture-code">
        LOT-H01-IN
      </span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(02)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-02.jpg"
          alt="Honeycomb texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(03)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-03.jpg"
          alt="Crystallized honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(04)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-04.jpg"
          alt="Dark honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(05)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-05.jpg"
          alt="Beeswax texture"
        />
      </div>
    </article>

    <aside class="texture-statement texture-statement-top">
      <p>
        The world’s most
        desired golden liquid.
      </p>
    </aside>

    <article class="texture-cell">
      <span class="texture-index">(06)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-06.jpg"
          alt="Raw honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(07)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-07.jpg"
          alt="Honey bubbles texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(08)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-08.jpg"
          alt="Honey flowing texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(09)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-09.jpg"
          alt="Honey on glass texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(10)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-10.jpg"
          alt="Wildflower honey texture"
        />
      </div>
    </article>

    <div class="texture-spacer"></div>

    <article class="texture-cell">
      <span class="texture-index">(11)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-11.jpg"
          alt="Amber honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(12)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-12.jpg"
          alt="Wax honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(13)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-13.jpg"
          alt="Honey crystal texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(14)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-14.jpg"
          alt="Dark forest honey texture"
        />
      </div>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(15)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-15.jpg"
          alt="Golden wax texture"
        />
      </div>
    </article>

    <aside class="texture-statement texture-statement-bottom">
      <p>
        Tracked. Graded. Preserved.
        What looks like honey
        moves like a commodity.
      </p>
    </aside>

  </div>

  <div class="texture-intro-footer">

    <h1 class="texture-wordmark">
      NectarNoir
    </h1>

    <button
      class="texture-scroll-button"
      type="button"
      aria-label="Scroll to the main website"
    >
      (scroll down)
    </button>

  </div>

</section>

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

const accessGate = document.querySelector(".access-gate");
const accessCard = document.querySelector(".access-card");

const openTerminalButton = document.querySelector(
  ".open-terminal-button"
);

const passcodeForm = document.querySelector(".passcode-form");
const passcodeInput = document.querySelector(".passcode-input");

const passcodeFeedback = document.querySelector(
  ".passcode-feedback"
);

const loader = document.querySelector(".loader");

const loaderPercentage = document.querySelector(
  ".loader-percentage"
);

const loaderMessage = document.querySelector(".loader-message");

const loaderProgressFill = document.querySelector(
  ".loader-progress-fill"
);

const correctPasscode = "NN26";

const loaderMessages = [
  "Locating hive network...",
  "Verifying harvest records...",
  "Analysing purity levels...",
  "Unlocking nectar archive...",
  "Access granted.",
];

document.body.classList.add("is-gate-locked");
lenis.stop();

/* ========================================
   LIVE CITY CLOCKS
======================================== */

function updateCityClocks() {
  const clocks = document.querySelectorAll(".city-time");

  clocks.forEach((clock) => {
    const timezone = clock.dataset.timezone;

    const time = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

    const offsetLabels = {
      "Asia/Kolkata": "GMT+5:30",
      "Asia/Tokyo": "GMT+9",
      "America/New_York": "GMT-5",
    };

    clock.textContent = `${time} ${offsetLabels[timezone]}`;
  });
}

updateCityClocks();
setInterval(updateCityClocks, 1000);

/* ========================================
   OPEN PASSCODE TERMINAL
======================================== */

function showPasscodeTerminal() {
  if (passcodeForm.classList.contains("is-visible")) {
    passcodeInput.focus();
    return;
  }

  gsap.to(openTerminalButton, {
    opacity: 0,
    y: -10,
    duration: 0.3,

    onComplete: () => {
      openTerminalButton.style.display = "none";

      passcodeForm.classList.add("is-visible");

      gsap.fromTo(
        passcodeForm,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      passcodeInput.focus();
    },
  });
}

openTerminalButton.addEventListener(
  "click",
  showPasscodeTerminal
);

accessCard.addEventListener(
  "click",
  showPasscodeTerminal
);

/* Always convert the entered code to uppercase. */

passcodeInput.addEventListener("input", () => {
  passcodeInput.value = passcodeInput.value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
});

/* ========================================
   VERIFY PASSCODE
======================================== */

passcodeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredPasscode = passcodeInput.value
    .trim()
    .toUpperCase();

  if (enteredPasscode === correctPasscode) {
    grantArchiveAccess();
  } else {
    denyArchiveAccess();
  }
});

function denyArchiveAccess() {
  passcodeFeedback.textContent =
    "Access denied — invalid passcode";

  passcodeFeedback.classList.remove("is-success");
  passcodeFeedback.classList.add("is-error");

  accessCard.classList.remove("is-denied");

  void accessCard.offsetWidth;

  accessCard.classList.add("is-denied");

  gsap.fromTo(
    passcodeInput,
    {
      color: "#d36e5d",
    },
    {
      color: "#f3eee4",
      duration: 0.8,
    }
  );

  passcodeInput.select();
}

function grantArchiveAccess() {
  passcodeFeedback.textContent =
    "Identity verified — access granted";

  passcodeFeedback.classList.remove("is-error");
  passcodeFeedback.classList.add("is-success");

  passcodeInput.disabled = true;

  const accessTimeline = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
    },
  });

  accessTimeline
    .to(".access-city", {
      opacity: 0,
      y: -15,
      stagger: 0.08,
      duration: 0.4,
    })
    .to(
      ".access-footer",
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
      },
      "<"
    )
    .to(
      ".passcode-form",
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
      },
      "<"
    )
    .to(".access-card", {
      scale: 1.08,
      rotationX: 0,
      filter: "brightness(1.45)",
      duration: 0.55,
    })
    .to(".access-card", {
      scale: 3.2,
      opacity: 0,
      duration: 0.75,
      ease: "power4.in",
    })
    .to(
      ".access-gate",
      {
        opacity: 0,
        duration: 0.45,
      },
      "-=0.2"
    )
    .set(".access-gate", {
      display: "none",
    })
    .set(window, {
     scrollTo: 0,
    }) 
    .call(startArchiveLoader);
}

/* ========================================
   START LOADER AFTER ACCESS
======================================== */

function startArchiveLoader() {
  window.scrollTo(0, 0);
lenis.scrollTo(0, {
  immediate: true,
});
  loader.classList.remove("loader-hidden");

  document.body.classList.remove("is-gate-locked");
  document.body.classList.add("is-loading");

  let loadingValue = 0;
  let messageIndex = 0;

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

      loaderMessage.textContent =
        loaderMessages[messageIndex];
    }

    if (loadingValue === 100) {
      clearInterval(loadingInterval);

      setTimeout(() => {
        playEntranceAnimation();
      }, 450);
    }
  }, 95);
  
}

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
  lenis.start();
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
)
.call(revealTextureGrid);
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
const textureIntro = document.querySelector(".texture-intro");

const textureScrollButton = document.querySelector(
  ".texture-scroll-button"
);

const textureCells = gsap.utils.toArray(
  ".texture-cell, .texture-statement"
);

gsap.set(textureCells, {
  opacity: 0,
  y: 24,
});

function revealTextureGrid() {
  gsap.to(textureCells, {
    opacity: 1,
    y: 0,
    stagger: {
      amount: 1.1,
      from: "start",
    },
    duration: 0.7,
    ease: "power3.out",
  });

  gsap.from(".texture-wordmark", {
    yPercent: 100,
    duration: 1.2,
    delay: 0.4,
    ease: "power4.out",
  });
}

textureScrollButton.addEventListener("click", () => {
  const heroSection = document.querySelector(".hero");

  lenis.scrollTo(heroSection, {
    duration: 1.6,
  });
});