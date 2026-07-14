import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
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

    <article class="texture-cell">
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
      <span class="texture-code">
  LOT-H02-WAX
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(03)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-03.jpg"
          alt="Crystallized honey texture"
        />
      </div>
      <span class="texture-code">
  LOT-H03-CRY
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(04)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-04.jpg"
          alt="Dark honey texture"
        />
      </div>
      <span class="texture-code">
  LOT-H04-DAR
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(05)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-05.jpg"
          alt="Beeswax texture"
        />
      </div>
      <span class="texture-code">
  LOT-H05-BEE
</span>
    </article>
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
      <span class="texture-code">
  LOT-H06-RAW
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(07)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-07.jpg"
          alt="Honey bubbles texture"
        />
      </div>
      <span class="texture-code">
  LOT-H07-BUB
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(08)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-08.jpg"
          alt="Honey flowing texture"
        />
      </div>
      <span class="texture-code">
  LOT-H08-FLO
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(09)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-09.jpg"
          alt="Honey on glass texture"
        />
      </div>
      <span class="texture-code">
  LOT-H09-GLA
</span>
    </article>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(10)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-10.jpg"
          alt="Wildflower honey texture"
        />
      </div>
      <span class="texture-code">
  LOT-H10-WIL
</span>
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
      <span class="texture-code">
  LOT-H11-AMB
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(12)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-12.jpg"
          alt="Wax honey texture"
        />
      </div>
      <span class="texture-code">
  LOT-H12-WAX
</span>
    </article>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(13)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-13.jpg"
          alt="Honey crystal texture"
        />
      </div>
      <span class="texture-code">
  LOT-H13-CRY
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(14)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-14.jpg"
          alt="Dark forest honey texture"
        />
      </div>
      <span class="texture-code">
  LOT-H14-DFO
</span>
    </article>

    <article class="texture-cell">
      <span class="texture-index">(15)</span>

      <div class="texture-frame">
        <img
          src="/textures/honey-15.jpg"
          alt="Golden wax texture"
        />
      </div>
      <span class="texture-code">
  LOT-H15-GWA
</span>
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

    <h1
  class="texture-wordmark"
  aria-label="Nectar Noir"
>
  NectarNoir
</h1>

<span class="texture-language">
  English / 01
</span> 

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

    <section class="origin-archive" id="origin">

  <div class="origin-header">

    <div class="origin-header-meta">
      <span>Chapter 01</span>
      <span>Origin Archive</span>
      <span>Records H-001 — H-005</span>
    </div>

    <h2>
      Before it became
      <span>liquid gold.</span>
    </h2>

    <p>
      Five records tracing honey from ancient preservation
      to modern classified harvests.
    </p>

  </div>

  <div class="origin-workspace">

    <aside class="origin-sidebar">

      <div class="origin-sidebar-top">

        <span class="origin-chapter-number">
          01
        </span>

        <p class="origin-sidebar-label">
          Historical specimen records
        </p>

      </div>

      <div class="origin-sidebar-content">

        <p class="origin-sidebar-description">
          Honey has travelled through temples, medicine,
          trade routes and laboratories. Every era altered
          the way humanity collected, valued and protected it.
        </p>

        <div class="origin-progress">

          <span class="origin-current-record">
            01
          </span>

          <div class="origin-progress-track">
            <div class="origin-progress-fill"></div>
          </div>

          <span>05</span>

        </div>

      </div>

      <div class="origin-sidebar-footer">

        <span>
          Scroll to inspect
        </span>

        <span>
          Archive access granted
        </span>

      </div>

    </aside>

    <div class="origin-records">

      <article
        class="origin-record"
        data-record="01"
      >

        <div class="origin-record-top">
          <span>Record H-001</span>
          <span>Circa 2400 BCE</span>
        </div>

        <div class="origin-record-image">
          <img
            src="/textures/honey-03.jpg"
            alt="Ancient honey preservation record"
          />

          <span class="origin-image-code">
            ARCHIVE / EGY-2400
          </span>
        </div>

        <div class="origin-record-content">

          <p class="origin-record-era">
            Ancient preservation
          </p>

          <h3>
            Sealed for the afterlife.
          </h3>

          <p>
            Early civilisations treated honey as food,
            medicine and ceremonial material. Its ability
            to endure made it a symbol of permanence.
          </p>

        </div>

        <div class="origin-record-footer">
          <span>Region: Lower Nile</span>
          <span>Status: Historical</span>
        </div>

      </article>

      <article
        class="origin-record"
        data-record="02"
      >

        <div class="origin-record-top">
          <span>Record H-002</span>
          <span>Circa 600 BCE</span>
        </div>

        <div class="origin-record-image">
          <img
            src="/textures/honey-11.jpg"
            alt="Ancient medicinal honey archive"
          />

          <span class="origin-image-code">
            ARCHIVE / MED-0600
          </span>
        </div>

        <div class="origin-record-content">

          <p class="origin-record-era">
            Medicinal classification
          </p>

          <h3>
            Prescribed before it was branded.
          </h3>

          <p>
            Honey entered early medical practice as a
            carefully measured substance used in healing,
            preservation and natural formulations.
          </p>

        </div>

        <div class="origin-record-footer">
          <span>Region: Mediterranean</span>
          <span>Status: Documented</span>
        </div>

      </article>

      <article
        class="origin-record"
        data-record="03"
      >

        <div class="origin-record-top">
          <span>Record H-003</span>
          <span>Circa 1100 CE</span>
        </div>

        <div class="origin-record-image">
          <img
            src="/textures/honey-05.jpg"
            alt="Traditional honey trade record"
          />

          <span class="origin-image-code">
            ARCHIVE / TRD-1100
          </span>
        </div>

        <div class="origin-record-content">

          <p class="origin-record-era">
            Regional trade
          </p>

          <h3>
            Carried across guarded routes.
          </h3>

          <p>
            Rare harvests moved between regions as valuable
            goods. Origin, floral source and purity began
            defining the worth of each vessel.
          </p>

        </div>

        <div class="origin-record-footer">
          <span>Region: Silk Routes</span>
          <span>Status: Traded</span>
        </div>

      </article>

      <article
        class="origin-record"
        data-record="04"
      >

        <div class="origin-record-top">
          <span>Record H-004</span>
          <span>Circa 1850 CE</span>
        </div>

        <div class="origin-record-image">
          <img
            src="/textures/honey-10.jpg"
            alt="Modern beekeeping archive"
          />

          <span class="origin-image-code">
            ARCHIVE / API-1850
          </span>
        </div>

        <div class="origin-record-content">

          <p class="origin-record-era">
            Controlled cultivation
          </p>

          <h3>
            The hive became a system.
          </h3>

          <p>
            New hive structures made harvesting more
            controlled and repeatable while preserving the
            colony and separating individual honey records.
          </p>

        </div>

        <div class="origin-record-footer">
          <span>Region: Global</span>
          <span>Status: Standardised</span>
        </div>

      </article>

      <article
        class="origin-record origin-record-final"
        data-record="05"
      >

        <div class="origin-record-top">
          <span>Record H-005</span>
          <span>2026 CE</span>
        </div>

        <div class="origin-record-image">
          <img
            src="/textures/honey-01.jpg"
            alt="Nectar Noir classified honey"
          />

          <span class="origin-image-code">
            ARCHIVE / NN-2026
          </span>
        </div>

        <div class="origin-record-content">

          <p class="origin-record-era">
            Nectar Noir classification
          </p>

          <h3>
            Harvested by nature. Controlled by few.
          </h3>

          <p>
            Nectar Noir records every batch by landscape,
            flower, season, density and rarity before sealing
            it inside the Golden Archive.
          </p>

        </div>

        <div class="origin-record-footer">
          <span>Region: Western Ghats</span>
          <span>Status: Restricted</span>
        </div>

      </article>

    </div>

  </div>

</section>

<section class="honey-files" id="process">

  <div class="honey-files-heading">

    <div class="files-heading-meta">
      <span>Chapter 02</span>
      <span>Origin Documentation</span>
      <span>Archive NN / H-02</span>
    </div>

    <h2>
      Documented
      <span>in layers.</span>
    </h2>

    <p>
      A classified collection tracing honey from first contact
      to controlled cultivation.
    </p>

  </div>

  <div class="files-scroll-space">

    <div class="files-stage">

      <div class="files-stage-header">
        <span>03.</span>
        <strong>Formalization</strong>
        <span>Archive specimen records</span>
      </div>

      <div class="files-board">

        <!-- BACKGROUND FILE -->

        <article class="archive-file file-background">

          <div class="archive-file-top">
            <span>00.</span>
            <span>NN / HISTORICAL INDEX</span>
          </div>

          <p class="file-small-label">
            Preserved records
          </p>

          <h3>
            The substance existed before classification.
          </h3>

          <p>
            Long before controlled production, honey was gathered
            from natural colonies and preserved as food, medicine
            and ceremonial material.
          </p>

          <div class="file-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </article>

        <!-- FILE 01 -->

        <article class="archive-file archive-file-green file-first-contact">

          <div class="archive-file-top">
            <span>01.</span>
            <span>FIRST CONTACT</span>
          </div>

          <p class="file-small-label">
            Earliest human collection
          </p>

          <div class="file-image file-image-organic">
            <img
              src="/textures/honey-13.jpg"
              alt="Raw natural honey formation"
            />
          </div>

          <h3>
            Collected before it was cultivated.
          </h3>

          <p>
            Wild colonies created the first reserves. Early
            collectors approached the hive without standard tools,
            measurements or permanent systems.
          </p>

          <div class="file-footer-data">
            <span>FIG. 01</span>
            <span>RAW FORM</span>
          </div>

        </article>

        <!-- FILE 02 -->

        <article class="archive-file archive-file-bright file-method">

          <div class="archive-file-top">
            <span>02.</span>
            <span>METHOD TRANSFER</span>
          </div>

          <p class="file-small-label">
            Knowledge transmission
          </p>

          <h3>
            Techniques moved between generations.
          </h3>

          <p>
            Smoke, woven containers and protective methods allowed
            honey gathering to become repeatable rather than
            accidental.
          </p>

          <div class="method-specimens">

            <div class="method-specimen">
              <img
                src="/textures/honey-06.jpg"
                alt="Honey collection specimen"
              />
            </div>

            <div class="method-specimen">
              <img
                src="/textures/honey-08.jpg"
                alt="Honey liquid specimen"
              />
            </div>

            <div class="method-specimen">
              <img
                src="/textures/honey-11.jpg"
                alt="Honeycomb specimen"
              />
            </div>

          </div>

          <div class="file-footer-data">
            <span>1200 BCE</span>
            <span>METHOD RECORDED</span>
          </div>

        </article>

        <!-- FILE 03 -->

        <article class="archive-file file-formalization">

          <div class="archive-file-top">
            <span>03.</span>
            <span>FORMALIZATION</span>
          </div>

          <p class="file-small-label">
            Archive H-03
          </p>

          <div class="formalization-image">
            <img
              src="/textures/honey-10.jpg"
              alt="Honeycomb structure"
            />
          </div>

          <h3>
            The hive became a structured system.
          </h3>

          <p>
            Dedicated frames and managed colonies allowed the
            harvest to be inspected, preserved and catalogued.
          </p>

          <div class="file-stamp">
            VERIFIED
          </div>

        </article>

        <!-- FILE 04 -->

        <article class="archive-file file-preserved-use">

          <div class="archive-file-top">
            <span>04.</span>
            <span>PRESERVED USE</span>
          </div>

          <div class="wide-file-image">
            <img
              src="/textures/honey-14.jpg"
              alt="Flowing preserved honey"
            />
          </div>

          <p>
            Honey moved through medicine, trade, preservation and
            ceremony while retaining its value across regions.
          </p>

          <div class="file-footer-data">
            <span>USE / MULTIPLE</span>
            <span>STATUS / ACTIVE</span>
          </div>

        </article>

        <!-- FILE 05 -->

        <article class="archive-file archive-file-green file-controlled">

          <div class="archive-file-top">
            <span>05.</span>
            <span>CONTROLLED CULTIVATION</span>
          </div>

          <p class="file-small-label">
            Modern production
          </p>

          <h3>
            Origin, density and purity become measurable.
          </h3>

          <p>
            Contemporary cultivation separates each harvest by
            botanical source, region, season and moisture level.
          </p>

          <div class="controlled-data">

            <div>
              <span>Origin</span>
              <strong>Western Ghats</strong>
            </div>

            <div>
              <span>Source</span>
              <strong>Wildflower</strong>
            </div>

            <div>
              <span>Purity</span>
              <strong>98.7%</strong>
            </div>

          </div>

          <div class="file-signature">
            NN-26 / CONTROLLED
          </div>

        </article>

      </div>

      <aside class="files-documentation">

        <div class="documentation-title">
          <span>Origin</span>
          <strong>Log: Honey</strong>
        </div>

        <div class="documentation-content">

          <p class="documentation-label">
            Documented history of liquid gold
          </p>

          <p>
            An overview of honey’s earliest collection,
            transmitted methods, managed cultivation and
            modern classification.
          </p>

        </div>

        <div class="documentation-index">

          <span class="documentation-index-active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

      </aside>

      <div class="files-stage-footer">

        <span>01. First collection</span>
        <span>02. Method transfer</span>
        <span>03. Formalization</span>
        <span>04. Preserved use</span>
        <span>05. Controlled cultivation</span>

      </div>

    </div>

  </div>

</section>

<section class="honey-effects" id="effects">

  <div class="honey-video-scroll">

    <div class="honey-video-sticky">

      <video
        class="honey-pour-video"
        src="/hyperfixation/videos/honey-pour.mp4"
        muted
        playsinline
        preload="auto"
      ></video>

      <div class="honey-video-overlay"></div>

      <div class="honey-effects-content">

        <div class="effects-meta">
          <span>Chapter 03</span>
          <span>Effects of the substance</span>
          <span>Record H-E01</span>
        </div>

        <div class="effects-grid">

          <article class="effect-item">
            <span>01</span>

            <h3>
              Sustained energy
            </h3>

            <p>
              Natural sugars provide a gradual source of energy
              without the visual noise of an artificial stimulant.
            </p>
          </article>

          <article class="effect-item">
            <span>02</span>

            <h3>
              Liquid clarity
            </h3>

            <p>
              Colour, texture and viscosity make each harvest
              visually distinct from the one before it.
            </p>
          </article>

          <article class="effect-item">
            <span>03</span>

            <h3>
              Ritualised consumption
            </h3>

            <p>
              Pouring, measuring and pairing turn the substance
              into a controlled sensory ritual.
            </p>
          </article>

        </div>

        <div class="effects-scroll-hint">
          <span>Scroll to control liquid flow</span>
          <span>Forward / Reverse</span>
        </div>

      </div>

    </div>

  </div>

</section>

<section class="honey-obsession" id="obsession">

  <div class="obsession-header">

    <div>
      <span>Chapter 04</span>
      <span>Visual Hyperfixation</span>
    </div>

    <p>
      A collection of disproportionate, unconventional and
      excessive encounters with liquid gold.
    </p>

  </div>

  <div class="obsession-space">

    <div class="obsession-stage">

      <div class="obsession-title">
        <span>Honey</span>
        <strong>Hyperfixation</strong>
      </div>

      <figure class="obsession-image obsession-image-one">
        <img
          src="/hyperfixation/images/honey-obsession-01.jpg"
          alt="Honey obsession archive image one"
        />

        <figcaption>
          Oversized reserve / Record 01
        </figcaption>
      </figure>

      <figure class="obsession-image obsession-image-two">
        <img
          src="/hyperfixation/images/honey-obsession-02.jpg"
          alt="Honey obsession archive image two"
        />

        <figcaption>
          Accidental spill / Record 02
        </figcaption>
      </figure>

      <figure class="obsession-image obsession-image-three">
        <img
          src="/hyperfixation/images/honey-obsession-03.jpg"
          alt="Honey obsession archive image three"
        />

        <figcaption>
          Contact exposure / Record 03
        </figcaption>
      </figure>

      <figure class="obsession-image obsession-image-four">
        <img
          src="/hyperfixation/images/honey-obsession-04.jpg"
          alt="Honey obsession archive image four"
        />

        <figcaption>
          Excessive acquisition / Record 04
        </figcaption>
      </figure>

      <figure class="obsession-image obsession-image-five">
        <img
          src="/hyperfixation/images/honey-obsession-05.jpg"
          alt="Honey obsession archive image five"
        />

        <figcaption>
          Daily dependence / Record 05
        </figcaption>
      </figure>

      <div class="obsession-center-copy">
        <span>Archive H-OB05</span>

        <p>
          Images sourced from unconventional encounters,
          private collections and excessive devotion.
        </p>
      </div>

      <div class="obsession-scroll">
        (scroll down)
      </div>

    </div>

  </div>

</section>

<section class="vertical-archive">

  <div class="vertical-archive-space">

    <div class="vertical-archive-stage">

      <div class="vertical-archive-header">

        <span>Archive H-V</span>

        <strong>
          Vertical Evidence
        </strong>

        <span>03 records</span>

      </div>

      <div class="vertical-video-rail">

        <button
          class="vertical-video-thumb is-active"
          type="button"
          data-video-index="0"
        >
          <video
            muted
            playsinline
            preload="metadata"
          >
            <source
              src="/hyperfixation/videos/archive-video-01.mp4"
              type="video/mp4"
            />
          </video>

          <span>01</span>
        </button>

        <button
          class="vertical-video-thumb"
          type="button"
          data-video-index="1"
        >
          <video
            muted
            playsinline
            preload="metadata"
          >
            <source
              src="/hyperfixation/videos/archive-video-02.mp4"
              type="video/mp4"
            />
          </video>

          <span>02</span>
        </button>

        <button
          class="vertical-video-thumb"
          type="button"
          data-video-index="2"
        >
          <video
            muted
            playsinline
            preload="metadata"
          >
            <source
              src="/hyperfixation/videos/archive-video-03.mp4"
              type="video/mp4"
            />
          </video>

          <span>03</span>
        </button>

      </div>

      <div class="vertical-video-main">

        <video
          class="vertical-main-video"
          muted
          playsinline
          loop
          preload="auto"
        >
          <source
            src="/hyperfixation/videos/archive-video-01.mp4"
            type="video/mp4"
          />
        </video>

        <div class="vertical-video-frame"></div>

      </div>

      <div class="vertical-video-copy">

  <div class="vertical-terminal-top">

    <span class="vertical-record-counter">
      (01/03)
    </span>

    <div class="vertical-terminal-status">
      <span class="terminal-status-active"></span>
      <span></span>
      <span></span>
    </div>

  </div>

  <p class="vertical-coordinates">
    18°31'13.4"N, 73°51'24.1"E
  </p>

  <div class="vertical-record-terminal">

    <h2 class="vertical-record-title">
      WILDFLOWER POUR
    </h2>

    <p class="vertical-record-field vertical-record-location">
      LOCATION : WESTERN GHATS, INDIA
    </p>

    <p class="vertical-record-field vertical-record-source">
      SOURCE : PRIVATE HONEY ARCHIVE
    </p>

    <p class="vertical-record-field vertical-record-status">
      STATUS : VERIFIED LIQUID RECORD
    </p>

    <p class="vertical-record-description">
      A controlled pour documenting viscosity, colour,
      movement and the repeated ritual surrounding liquid gold.
    </p>

    <span
      class="terminal-cursor"
      aria-hidden="true"
    ></span>

  </div>

</div>

      <div class="vertical-archive-progress">

        <span class="vertical-progress-current">
          01
        </span>

        <div class="vertical-progress-track">
          <div class="vertical-progress-fill"></div>
        </div>

        <span>03</span>

      </div>

    </div>

  </div>

</section>

<section class="preparation-procedure" id="preparation">

  <div class="preparation-scroll-space">

    <div class="preparation-stage">

      <div class="preparation-flashlight"></div>

      <div class="preparation-topbar">

        <span>
          Chapter 05
        </span>

        <span>
          Preparation Procedure
        </span>

        <span>
          Record NN-P04
        </span>

      </div>

      <div class="preparation-media">

        <figure
          class="preparation-step-image is-active"
          data-step-image="0"
        >
          <img
            src="/preparation/step-1.jpeg"
            alt="Opening a premium honey jar"
          />
        </figure>

        <figure
          class="preparation-step-image"
          data-step-image="1"
        >
          <img
            src="/preparation/step-2.jpeg"
            alt="Honey slowly pouring from a dipper"
          />
        </figure>

        <figure
          class="preparation-step-image"
          data-step-image="2"
        >
          <img
            src="/preparation/step-3.jpeg"
            alt="Honey being blended into a warm drink"
          />
        </figure>

        <figure
          class="preparation-step-image"
          data-step-image="3"
        >
          <img
            src="/preparation/step-4.jpeg"
            alt="Final honey serving"
          />
        </figure>

        <div class="preparation-crosshair">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div class="preparation-record">

        <span class="preparation-record-step">
          Step 01
        </span>

        <h2 class="preparation-record-title">
          Unseal
        </h2>

        <p class="preparation-record-description">
          Release the lid and inspect the colour,
          aroma and natural crystallisation.
        </p>

        <div class="preparation-record-data">

          <span class="preparation-record-action">
            Action / Open
          </span>

          <span class="preparation-record-status">
            Status / Ready
          </span>

        </div>

      </div>

      <div class="preparation-indicators">

        <span class="preparation-indicator is-active"></span>
        <span class="preparation-indicator"></span>
        <span class="preparation-indicator"></span>
        <span class="preparation-indicator"></span>

      </div>

      <div class="preparation-footer">

        <span class="preparation-current">
          Step 01 / 04
        </span>

        <span>
          Move cursor to inspect
        </span>

        <span>
          Scroll to change procedure
        </span>

      </div>

    </div>

  </div>

</section>

    <div class="texture-intro-footer">

  <div class="texture-wordmark-wrapper">
    <h1
      class="texture-wordmark"
      aria-label="Nectar Noir"
    >
      NectarNoir
    </h1>
  </div>

  <span class="texture-language">
    English / 01
  </span>

  <button
    class="texture-scroll-button"
    type="button"
    aria-label="Scroll to the main website"
  >
    (scroll down)
  </button>

</div>

  </main>
`;

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

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

  gsap.fromTo(
  ".texture-wordmark",
  {
    y: 130,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.3,
    ease: "power4.out",
    clearProps: "transform",
  }
);
setTimeout(() => {
  gsap.set(".texture-wordmark", {
    opacity: 1,
    visibility: "visible",
  });
}, 1600);
}

textureScrollButton.addEventListener("click", () => {
  const heroSection = document.querySelector(".hero");

  lenis.scrollTo(heroSection, {
    duration: 1.6,
  });
});
/* ========================================
   MULTILINGUAL NECTAR NOIR WORDMARK
======================================== */

const textureWordmark = document.querySelector(
  ".texture-wordmark"
);

const textureLanguage = document.querySelector(
  ".texture-language"
);

const nectarLanguages = [
  {
    text: "NectarNoir",
    language: "English",
  },
  {
    text: "नेक्टर नॉयर",
    language: "Marathi",
  },
  {
    text: "नेक्टर नॉयर",
    language: "Hindi",
  },
  {
    text: "ネクター・ノワール",
    language: "Japanese",
  },
  {
    text: "NektarNoir",
    language: "German",
  },
  {
    text: "NectarNoir",
    language: "French",
  },
  {
    text: "넥타르 누아르",
    language: "Korean",
  },
 {
    text: "花蜜诺瓦",
    language: "Chinese",
  },
];

let languageIndex = 0;
let languageInterval = null;

function changeWordmarkLanguage() {
  languageIndex =
    (languageIndex + 1) % nectarLanguages.length;

  const currentLanguage =
    nectarLanguages[languageIndex];

  textureWordmark.classList.remove("is-changing");

  void textureWordmark.offsetWidth;

  textureWordmark.classList.add("is-changing");

  textureWordmark.textContent =
    currentLanguage.text;

  textureLanguage.textContent =
    `${currentLanguage.language} / ${String(
      languageIndex + 1
    ).padStart(2, "0")}`;
}

textureWordmark.addEventListener("mouseenter", () => {
  changeWordmarkLanguage();

  languageInterval = setInterval(() => {
    changeWordmarkLanguage();
  }, 650);
});

textureWordmark.addEventListener("mouseleave", () => {
  clearInterval(languageInterval);

  languageInterval = null;
  languageIndex = 0;

  textureWordmark.textContent = "NectarNoir";
  textureLanguage.textContent = "English / 01";

  textureWordmark.classList.remove("is-changing");
});
/* ========================================
   ORIGIN ARCHIVE ANIMATIONS
======================================== */

const originRecords = gsap.utils.toArray(".origin-record");

gsap.from(".origin-header-meta span", {
  scrollTrigger: {
    trigger: ".origin-header",
    start: "top 75%",
  },
  y: 20,
  opacity: 0,
  stagger: 0.12,
  duration: 0.7,
  ease: "power3.out",
});

gsap.from(".origin-header h2", {
  scrollTrigger: {
    trigger: ".origin-header",
    start: "top 65%",
  },
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
});

gsap.from(".origin-header > p", {
  scrollTrigger: {
    trigger: ".origin-header",
    start: "top 55%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
});

originRecords.forEach((record, index) => {
  const recordNumber = String(index + 1).padStart(2, "0");

  gsap.from(record.querySelector(".origin-record-image"), {
    scrollTrigger: {
      trigger: record,
      start: "top 70%",
    },
    clipPath: "inset(0 100% 0 0)",
    duration: 1.1,
    ease: "power4.inOut",
  });

  gsap.from(record.querySelector(".origin-record-content"), {
    scrollTrigger: {
      trigger: record,
      start: "top 65%",
    },
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  });

  ScrollTrigger.create({
    trigger: record,
    start: "top center",
    end: "bottom center",

    onEnter: () => {
      updateOriginProgress(index, recordNumber);
    },

    onEnterBack: () => {
      updateOriginProgress(index, recordNumber);
    },
  });
});

function updateOriginProgress(index, recordNumber) {
  const progress = ((index + 1) / originRecords.length) * 100;

  document.querySelector(
    ".origin-current-record"
  ).textContent = recordNumber;

  gsap.to(".origin-progress-fill", {
    width: `${progress}%`,
    duration: 0.55,
    ease: "power3.out",
  });
}
/* ========================================
   HONEY ARCHIVE FILES ANIMATION
======================================== */


/* Add separate timing so files enter one after another */

const filesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".files-scroll-space",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.6,
  },
});

filesTimeline
  .fromTo(
    ".file-background",
    {
      xPercent: -150,
      opacity: 0,
      scale: 0.9,
    },
    {
      xPercent: 0,
      opacity: 1,
      scale: 1,
      duration: 0.55,
      ease: "power2.out",
    }
  )
  .fromTo(
    ".file-formalization",
    {
      xPercent: -170,
      opacity: 0,
      rotation: -13,
    },
    {
      xPercent: 0,
      opacity: 1,
      rotation: -2,
      duration: 0.55,
      ease: "power2.out",
    },
    "-=0.3"
  )
  .fromTo(
    ".file-method",
    {
      xPercent: -180,
      opacity: 0,
      rotation: -14,
    },
    {
      xPercent: 0,
      opacity: 1,
      rotation: 1.3,
      duration: 0.55,
      ease: "power2.out",
    },
    "-=0.28"
  )
  .fromTo(
    ".file-first-contact",
    {
      xPercent: -180,
      opacity: 0,
      rotation: 9,
    },
    {
      xPercent: 0,
      opacity: 1,
      rotation: -1.5,
      duration: 0.55,
      ease: "power2.out",
    },
    "-=0.26"
  )
  .fromTo(
    ".file-preserved-use",
    {
      xPercent: -190,
      opacity: 0,
      rotation: -8,
    },
    {
      xPercent: 0,
      opacity: 1,
      rotation: 1.1,
      duration: 0.55,
      ease: "power2.out",
    },
    "-=0.24"
  )
  .fromTo(
    ".file-controlled",
    {
      xPercent: -200,
      opacity: 0,
      rotation: 14,
    },
    {
      xPercent: 0,
      opacity: 1,
      rotation: 1.7,
      duration: 0.55,
      ease: "power2.out",
    },
    "-=0.22"
  )
  .from(
    ".files-documentation",
    {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.35"
  )
  .from(
    ".files-stage-footer span",
    {
      y: 12,
      opacity: 0,
      stagger: 0.04,
      duration: 0.35,
    },
    "-=0.25"
  );

/* Documentation indicator changes during scroll */

const documentationDots = gsap.utils.toArray(
  ".documentation-index span"
);

ScrollTrigger.create({
  trigger: ".files-scroll-space",
  start: "top top",
  end: "bottom bottom",

  onUpdate: (self) => {
    const dotIndex = Math.min(
      Math.floor(self.progress * documentationDots.length),
      documentationDots.length - 1
    );

    documentationDots.forEach((dot, index) => {
      dot.classList.toggle(
        "documentation-index-active",
        index === dotIndex
      );
    });
  },
});
/* ========================================
   SCROLL-CONTROLLED HONEY VIDEO
======================================== */

const honeyPourVideo = document.querySelector(
  ".honey-pour-video"
);

let honeyVideoDuration = 0;
let honeyVideoReady = false;

honeyPourVideo.addEventListener("loadedmetadata", () => {
  honeyVideoDuration = honeyPourVideo.duration;
  honeyVideoReady = true;

  honeyPourVideo.pause();
  honeyPourVideo.currentTime = 0.01;

  ScrollTrigger.refresh();
});

let requestedVideoTime = 0;
let displayedVideoTime = 0;

function updateHoneyVideoFrame() {
  if (honeyVideoReady) {
    displayedVideoTime +=
      (requestedVideoTime - displayedVideoTime) * 0.22;

    if (
      Math.abs(
        honeyPourVideo.currentTime - displayedVideoTime
      ) > 0.025
    ) {
      honeyPourVideo.currentTime = displayedVideoTime;
    }
  }

  requestAnimationFrame(updateHoneyVideoFrame);
}

updateHoneyVideoFrame();

ScrollTrigger.create({
  trigger: ".honey-video-scroll",
  start: "top top",
  end: "bottom bottom",

  onUpdate: (self) => {
    if (!honeyVideoReady || !honeyVideoDuration) {
      return;
    }

    requestedVideoTime = Math.min(
      self.progress * honeyVideoDuration,
      honeyVideoDuration - 0.05
    );
  },
});
/* ========================================
   HONEY HYPERFIXATION FLY-THROUGH
======================================== */

const obsessionTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".obsession-space",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.7,
  },
});

/* Title enters and later leaves */

obsessionTimeline
  .fromTo(
    ".obsession-title",
    {
      scale: 0.12,
      opacity: 0,
      filter: "blur(18px)",
    },
    {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "none",
    }
  )

  /* Image 01 */

  .fromTo(
    ".obsession-image-one",
    {
      scale: 0.04,
      xPercent: -80,
      yPercent: -30,
      opacity: 0,
      filter: "blur(22px)",
    },
    {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "none",
    },
    "-=0.45"
  )
  .to(".obsession-image-one", {
    scale: 3.5,
    xPercent: -95,
    yPercent: -75,
    opacity: 0,
    filter: "blur(10px)",
    duration: 0.85,
    ease: "power2.in",
  })

  /* Image 02 */

  .fromTo(
    ".obsession-image-two",
    {
      scale: 0.04,
      xPercent: 90,
      yPercent: -50,
      opacity: 0,
      filter: "blur(22px)",
    },
    {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "none",
    },
    "-=0.5"
  )
  .to(".obsession-image-two", {
    scale: 3.8,
    xPercent: 90,
    yPercent: -80,
    opacity: 0,
    filter: "blur(11px)",
    duration: 0.85,
    ease: "power2.in",
  })

  /* Image 03 */

  .fromTo(
    ".obsession-image-three",
    {
      scale: 0.03,
      xPercent: -100,
      yPercent: 100,
      opacity: 0,
      filter: "blur(24px)",
    },
    {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "none",
    },
    "-=0.5"
  )
  .to(".obsession-image-three", {
    scale: 4,
    xPercent: -85,
    yPercent: 95,
    opacity: 0,
    filter: "blur(12px)",
    duration: 0.85,
    ease: "power2.in",
  })

  /* Image 04 */

  .fromTo(
    ".obsession-image-four",
    {
      scale: 0.04,
      xPercent: 100,
      yPercent: 90,
      opacity: 0,
      filter: "blur(24px)",
    },
    {
      scale: 1,
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "none",
    },
    "-=0.5"
  )
  .to(".obsession-image-four", {
    scale: 3.5,
    xPercent: 100,
    yPercent: 80,
    opacity: 0,
    filter: "blur(12px)",
    duration: 0.85,
    ease: "power2.in",
  })

  /* Image 05 */

  .fromTo(
    ".obsession-image-five",
    {
      scale: 0.02,
      opacity: 0,
      filter: "blur(26px)",
    },
    {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "none",
    },
    "-=0.45"
  )
  .to(".obsession-image-five", {
    scale: 6,
    opacity: 0,
    filter: "blur(14px)",
    duration: 0.9,
    ease: "power2.in",
  })

  /* Remaining title and copy leave */

  .to(
    ".obsession-title",
    {
      scale: 2.4,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.8,
      ease: "power2.in",
    },
    "-=0.55"
  )
  .to(
    ".obsession-center-copy, .obsession-scroll",
    {
      opacity: 0,
      y: 40,
      duration: 0.45,
    },
    "-=0.65"
  );
  /* ========================================
   VERTICAL VIDEO ARCHIVE
======================================== */

const verticalMainVideo = document.querySelector(
  ".vertical-main-video"
);

const verticalThumbs = gsap.utils.toArray(
  ".vertical-video-thumb"
);

const verticalVideos = [
  {
    src: "/hyperfixation/videos/archive-video-01.mp4",
    number: "01",
    coordinates: "18°31'13.4\"N, 73°51'24.1\"E",
    title: "WILDFLOWER POUR",
    location: "LOCATION : WESTERN GHATS, INDIA",
    source: "SOURCE : PRIVATE HONEY ARCHIVE",
    status: "STATUS : VERIFIED LIQUID RECORD",
    description:
      "A controlled pour documenting viscosity, colour, movement and the repeated ritual surrounding liquid gold.",
  },
  {
    src: "/hyperfixation/videos/archive-video-02.mp4",
    number: "02",
    coordinates: "19°04'42.2\"N, 72°52'31.8\"E",
    title: "GOLDEN RITUAL",
    location: "LOCATION : MUMBAI, INDIA",
    source: "SOURCE : DAILY CONSUMPTION LOG",
    status: "STATUS : DOCUMENTED",
    description:
      "A repeated serving ritual where measurement, movement and timing become part of the experience.",
  },
  {
    src: "/hyperfixation/videos/archive-video-03.mp4",
    number: "03",
    coordinates: "30°04'12.6\"N, 79°19'43.7\"E",
    title: "COMB EXPOSURE",
    location: "LOCATION : HIMALAYAN REGION",
    source: "SOURCE : RAW HARVEST RECORD",
    status: "STATUS : UNFILTERED",
    description:
      "Open honeycomb cells reveal the substance in its earliest recorded form before filtration and classification.",
  },
];
let terminalTypingId = 0;

function typeTerminalText(
  element,
  text,
  speed = 18,
  startDelay = 0
) {
  return new Promise((resolve) => {
    const typingId = terminalTypingId;

    element.textContent = "";

    let characterIndex = 0;

    setTimeout(() => {
      function typeNextCharacter() {
        if (typingId !== terminalTypingId) {
          resolve();
          return;
        }

        if (characterIndex < text.length) {
          element.textContent +=
            text.charAt(characterIndex);

          characterIndex += 1;

          setTimeout(
            typeNextCharacter,
            speed
          );
        } else {
          resolve();
        }
      }

      typeNextCharacter();
    }, startDelay);
  });
}

async function typeVerticalRecord(record) {
  terminalTypingId += 1;

  const currentTypingId = terminalTypingId;

  const counter = document.querySelector(
    ".vertical-record-counter"
  );

  const coordinates = document.querySelector(
    ".vertical-coordinates"
  );

  const title = document.querySelector(
    ".vertical-record-title"
  );

  const fields = document.querySelectorAll(
    ".vertical-record-field"
  );

  const description = document.querySelector(
    ".vertical-record-description"
  );

  const cursor = document.querySelector(
    ".terminal-cursor"
  );

  counter.textContent =
    `(${record.number}/${String(
      verticalVideos.length
    ).padStart(2, "0")})`;

  coordinates.textContent = "";
  title.textContent = "";

  fields.forEach((field) => {
    field.textContent = "";
  });

  description.textContent = "";
  cursor.style.opacity = "1";

  await typeTerminalText(
    coordinates,
    record.coordinates,
    18,
    100
  );

  if (currentTypingId !== terminalTypingId) {
    return;
  }

  await typeTerminalText(
    title,
    record.title,
    28,
    180
  );

  if (currentTypingId !== terminalTypingId) {
    return;
  }

  await typeTerminalText(
    fields[0],
    record.location,
    14,
    90
  );

  await typeTerminalText(
    fields[1],
    record.source,
    14,
    70
  );

  await typeTerminalText(
    fields[2],
    record.status,
    14,
    70
  );

  await typeTerminalText(
    description,
    record.description,
    11,
    140
  );
}

let activeVerticalIndex = -1;

function changeVerticalRecord(index) {
  if (
    index === activeVerticalIndex ||
    !verticalVideos[index]
  ) {
    return;
  }

  activeVerticalIndex = index;

  const record = verticalVideos[index];

  verticalThumbs.forEach((thumb, thumbIndex) => {
    thumb.classList.toggle(
      "is-active",
      thumbIndex === index
    );
  });

  gsap.to(".vertical-main-video", {
    opacity: 0,
    scale: 0.94,
    duration: 0.3,

    onComplete: () => {
      verticalMainVideo.src = record.src;
      verticalMainVideo.load();

      verticalMainVideo
        .play()
        .catch(() => {});

      gsap.to(".vertical-main-video", {
        opacity: 1,
        scale: 1,
        duration: 0.45,
      });
    },
  });

  typeVerticalRecord(record);
  function updateVerticalStatus(activeIndex) {
  const statusBoxes = document.querySelectorAll(
    ".vertical-terminal-status span"
  );

  statusBoxes.forEach((box, index) => {
    box.classList.toggle(
      "terminal-status-active",
      index === activeIndex
    );
  });
}

  document.querySelector(
    ".vertical-progress-current"
  ).textContent = record.number;

  gsap.to(".vertical-progress-fill", {
    width:
      `${((index + 1) / verticalVideos.length) * 100}%`,
    duration: 0.4,
  });
}

verticalThumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeVerticalRecord(index);
  });
});
ScrollTrigger.create({
  trigger: ".vertical-archive-space",
  start: "top 72%",

  once: true,

  onEnter: () => {
    changeVerticalRecord(0);
  },
});

ScrollTrigger.create({
  trigger: ".vertical-archive-space",
  start: "top top",
  end: "bottom bottom",

  onUpdate: (self) => {
    const index = Math.min(
      Math.floor(
        self.progress * verticalVideos.length
      ),
      verticalVideos.length - 1
    );

    changeVerticalRecord(index);
  },
});

ScrollTrigger.create({
  trigger: ".vertical-archive-space",
  start: "top 70%",
  end: "bottom top",

  onEnter: () => {
    verticalMainVideo
      .play()
      .catch(() => {});
  },

  onEnterBack: () => {
    verticalMainVideo
      .play()
      .catch(() => {});
  },

  onLeave: () => {
    verticalMainVideo.pause();
  },

  onLeaveBack: () => {
    verticalMainVideo.pause();
  },
});
/* ========================================
   PREPARATION PROCEDURE
======================================== */

const preparationStage = document.querySelector(
  ".preparation-stage"
);

const preparationImages = gsap.utils.toArray(
  ".preparation-step-image"
);

const preparationIndicators = gsap.utils.toArray(
  ".preparation-indicator"
);

const preparationSteps = [
  {
    number: "01",
    title: "Unseal",
    description:
      "Release the lid and inspect the colour, aroma and natural crystallisation.",
    action: "Action / Open",
    status: "Status / Ready",
  },
  {
    number: "02",
    title: "Drizzle",
    description:
      "Allow the honey to fall slowly and observe its viscosity before combination.",
    action: "Action / Pour",
    status: "Status / Flowing",
  },
  {
    number: "03",
    title: "Blend",
    description:
      "Introduce the measured reserve into a warm liquid and combine until evenly dissolved.",
    action: "Action / Combine",
    status: "Status / Mixing",
  },
  {
    number: "04",
    title: "Serve",
    description:
      "Finish with a controlled final drizzle and consume while the preparation remains warm.",
    action: "Action / Present",
    status: "Status / Complete",
  },
];

let activePreparationStep = 0;

function updatePreparationStep(index) {
  if (
    index === activePreparationStep ||
    !preparationSteps[index]
  ) {
    return;
  }

  const previousImage =
    preparationImages[activePreparationStep];

  const nextImage =
    preparationImages[index];

  const step = preparationSteps[index];

  activePreparationStep = index;

  preparationImages.forEach((image, imageIndex) => {
    image.classList.toggle(
      "is-active",
      imageIndex === index
    );
  });

  preparationIndicators.forEach(
    (indicator, indicatorIndex) => {
      indicator.classList.toggle(
        "is-active",
        indicatorIndex === index
      );
    }
  );

  if (previousImage && previousImage !== nextImage) {
    gsap.to(previousImage, {
      opacity: 0,
      scale: 0.86,
      rotation: 2,
      filter: "blur(14px) brightness(0.55)",
      duration: 0.45,
      ease: "power2.in",
    });
  }

  gsap.fromTo(
    nextImage,
    {
      opacity: 0,
      scale: 1.16,
      rotation: -1.5,
      filter: "blur(12px) brightness(0.62)",
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      filter: "blur(0px) brightness(1)",
      duration: 0.7,
      ease: "power3.out",
    }
  );

  const recordElements = [
    ".preparation-record-step",
    ".preparation-record-title",
    ".preparation-record-description",
    ".preparation-record-action",
    ".preparation-record-status",
  ];

  gsap.to(recordElements, {
    opacity: 0,
    y: 8,
    duration: 0.2,

    onComplete: () => {
      document.querySelector(
        ".preparation-record-step"
      ).textContent = `Step ${step.number}`;

      document.querySelector(
        ".preparation-record-title"
      ).textContent = step.title;

      document.querySelector(
        ".preparation-record-description"
      ).textContent = step.description;

      document.querySelector(
        ".preparation-record-action"
      ).textContent = step.action;

      document.querySelector(
        ".preparation-record-status"
      ).textContent = step.status;

      document.querySelector(
        ".preparation-current"
      ).textContent =
        `Step ${step.number} / 04`;

      gsap.to(recordElements, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.35,
      });
    },
  });
}

/* Scroll forward and backward between steps */

ScrollTrigger.create({
  trigger: ".preparation-scroll-space",
  start: "top top",
  end: "bottom bottom",

  onUpdate: (self) => {
    const index = Math.min(
      Math.floor(
        self.progress * preparationSteps.length
      ),
      preparationSteps.length - 1
    );

    updatePreparationStep(index);
  },
});

/* Flashlight follows the pointer */

preparationStage.addEventListener(
  "pointerenter",
  () => {
    preparationStage.classList.add(
      "is-inspecting"
    );
  }
);

preparationStage.addEventListener(
  "pointerleave",
  () => {
    preparationStage.classList.remove(
      "is-inspecting"
    );
  }
);

preparationStage.addEventListener(
  "pointermove",
  (event) => {
    const bounds =
      preparationStage.getBoundingClientRect();

    const pointerX =
      event.clientX - bounds.left;

    const pointerY =
      event.clientY - bounds.top;

    preparationStage.style.setProperty(
      "--flashlight-x",
      `${pointerX}px`
    );

    preparationStage.style.setProperty(
      "--flashlight-y",
      `${pointerY}px`
    );
  }
);

/* Animate the initial image */

gsap.fromTo(
  preparationImages[0],
  {
    opacity: 0,
    scale: 1.15,
    filter: "blur(12px) brightness(0.6)",
  },
  {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    duration: 0.8,
    scrollTrigger: {
      trigger: ".preparation-scroll-space",
      start: "top 70%",
    },
  }
);