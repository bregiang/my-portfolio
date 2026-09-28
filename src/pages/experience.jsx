import { useState } from "react";
import "./experience.css";

import skinIdentifierImage from "../images/skinidentifier.png";
import skinIdentifierShot1 from "../images/skinidentifier1.png";
import skinIdentifierShot2 from "../images/skinidentifier2.png";

import japanImage from "../images/studyabroad.jpg";
import marketingWorkImage from "../images/socialmedia.jpg";
import writingWorkImage from "../images/writingimage.png";
import pharmacyComp from "../images/pharmacycomp.jpg";
import serviceImage from "../images/service.jpg";

import hosaMain from "../images/hosaelevator.jpg";
import hosaThree from "../images/HOSA.jpeg";
import hosaFour from "../images/HOSA.jpeg";

import oneRefugeeOne from "../images/zionsbank.jpg";
import oneRefugeeTwo from "../images/onerefugee2.jpg";
import oneRefugeeThree from "../images/onerefugee3.jpg";
import oneRefugeeFour from "../images/zionsbank.jpg";

function Experience() {
  const [skinIdentifierOpen, setSkinIdentifierOpen] = useState(false);
  const [hosaOpen, setHosaOpen] = useState(false);
  const [oneRefugeeOpen, setOneRefugeeOpen] = useState(false);
  return (
    <main className="experience">

      {/* INTRO */}
      <section className="experience-hero">

        <p className="section-label">MY EXPERIENCE</p>

        <h1>
          Things I've built,
          <br />
          worked on,
          <br />
          and learned from.
        </h1>

        <p className="experience-intro">
          My work sits at the intersection of technology, business,
          communication, and creativity. Here's a look at some of the
          experiences and projects that have shaped what I want to do next.
        </p>

      </section>


      {/* EXPERIENCE LIST */}
      <section className="experience-list">

        {/* =========================================
            01 — SKINIDENTIFIER
        ========================================= */}

        <article className="experience-item">

          <div className="experience-number">01</div>

          <div className="experience-content">

            <div className="experience-heading">

              <div>
                <p className="experience-type">
                  INFORMATION SYSTEMS • PROJECT
                </p>

                <h2>SkinIdentifier</h2>
              </div>

              <span className="experience-year">
                2026
              </span>

            </div>


            <p className="experience-description">
              A Django-based skincare platform designed to help users better
              understand their skin type and discover personalized products.
              The project combines technology, business requirements, UX,
              AI-assisted analysis, and healthcare considerations.
            </p>


            <div className="experience-tags">
              <span>Django</span>
              <span>Python</span>
              <span>AI</span>
              <span>UX</span>
              <span>Database Design</span>
            </div>


            <button
              className={`experience-link project-toggle ${
                skinIdentifierOpen ? "open" : ""
              }`}
              onClick={() =>
                setSkinIdentifierOpen(!skinIdentifierOpen)
              }
            >
              {skinIdentifierOpen
                ? "Hide project ↑"
                : "View project →"}
            </button>

          </div>

        </article>


        {/* =========================================
            SKINIDENTIFIER EXPANDED CASE STUDY
        ========================================= */}

        {skinIdentifierOpen && (

          <section className="project-case-study">

            {/* CASE STUDY INTRO */}

            <div className="case-study-intro">

              <div>

                <p className="section-label">
                  PROJECT CASE STUDY
                </p>

                <h2>
                  What is
                  <br />
                  SkinIdentifier?
                </h2>

              </div>


              <p className="case-study-summary">
                SkinIdentifier is a web application designed to help
                people better understand their skin type and discover
                skincare products that fit their individual needs.
              </p>

            </div>


            {/* PROBLEM */}

            <div className="case-study-overview">

              <div className="case-study-text">

                <p className="case-study-label">
                  THE PROBLEM
                </p>

                <h3>
                  Skincare can be overwhelming.
                </h3>

                <p>
                  People are often unsure of their skin type and may
                  encounter conflicting advice when trying to choose
                  skincare products. This can lead to unnecessary
                  spending and products that don't work well for them.
                </p>

                <p>
                  Our goal was to create a platform that could bring
                  some of that information together and make the
                  process more personalized.
                </p>

              </div>


              <div className="case-study-highlight">

                <span className="highlight-icon">
                  ✦
                </span>

                <p>
                  Helping users move from
                  <strong> confusion </strong>
                  to more informed skincare decisions.
                </p>

              </div>

            </div>


            {/* HOW IT WORKS */}

            <div className="case-study-process">

              <p className="case-study-label">
                HOW IT WORKS
              </p>

              <h3>
                From skin analysis
                <br />
                to recommendations.
              </h3>


              <div className="process-grid">

                <div className="process-step">

                  <span>01</span>

                  <h4>
                    Build a profile
                  </h4>

                  <p>
                    Users create a skincare profile that can be
                    used to personalize their experience.
                  </p>

                </div>


                <div className="process-step">

                  <span>02</span>

                  <h4>
                    Analyze skin
                  </h4>

                  <p>
                    The application uses a questionnaire and
                    optional facial image analysis to help
                    determine a user's skin type.
                  </p>

                </div>


                <div className="process-step">

                  <span>03</span>

                  <h4>
                    Discover products
                  </h4>

                  <p>
                    Recommendations are tailored to the user's
                    identified skin type and include explanations
                    for why products may be relevant.
                  </p>

                </div>


                <div className="process-step">

                  <span>04</span>

                  <h4>
                    Connect with professionals
                  </h4>

                  <p>
                    The system also included functionality for
                    dermatologist interaction and personalized
                    recommendations.
                  </p>

                </div>

              </div>

            </div>


            {/* SCREENSHOTS */}

            <div className="case-study-screenshots">

              <div className="screenshots-heading">

                <div>

                  <p className="case-study-label">
                    INSIDE THE PROJECT
                  </p>

                  <h3>
                    A look at the experience.
                  </h3>

                </div>


                <p>
                  Screenshots from the application showcase
                  different parts of the user experience and system.
                </p>

              </div>


              <div className="screenshot-grid">

                {/* MAIN IMAGE */}

                <div className="screenshot-card screenshot-large">

                  <img
                    src={skinIdentifierImage}
                    alt="SkinIdentifier application"
                  />

                  <div className="screenshot-caption">

                    <span>01</span>

                    <p>
                      SkinIdentifier interface
                    </p>

                  </div>

                </div>


                {/* SECOND IMAGE PLACEHOLDER */}

                <div className="screenshot-card">

                  <img
                    src={skinIdentifierShot1}
                    alt="SkinIdentifier application"
                  />

                  <div className="screenshot-caption">

                    <span>02</span>

                    <p>
                      Skin analysis experience
                    </p>

                  </div>

                </div>


                {/* THIRD IMAGE PLACEHOLDER */}

                <div className="screenshot-card">

                  <img
                    src={skinIdentifierShot2}
                    alt="SkinIdentifier application"
                  />

                  <div className="screenshot-caption">

                    <span>03</span>

                    <p>
                      Product recommendations
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* TECHNOLOGY */}

            <div className="case-study-tech">

              <p className="case-study-label">
                MY ROLE & TECHNOLOGY
              </p>


              <div className="tech-content">

                <h3>
                  Building at the intersection of
                  <em> technology and people.</em>
                </h3>

                <p>
                  SkinIdentifier gave me an opportunity to work through
                  a real business problem while thinking about the user
                  experience, application structure, data, and
                  responsible use of AI.
                </p>

              </div>


              <div className="tech-tags">

                <span>Django</span>
                <span>Python</span>
                <span>AI</span>
                <span>UX</span>
                <span>Database Design</span>
                <span>Product Thinking</span>

              </div>

            </div>

          </section>

        )}

{/* =========================================
    02 — HOSA PHARMACY COMPETITION
========================================= */}

<article className="experience-item">

  <div className="experience-number">
    02
  </div>


  <div className="experience-content">

    <div className="experience-heading">

      <div>

        <p className="experience-type">
          HEALTHCARE • PHARMACY • HOSA
        </p>

        <h2>
          Pharmacy Competition
        </h2>

      </div>


      <span className="experience-year">
        2022
      </span>

    </div>


    <p className="experience-description">
      Competing in HOSA's Pharmacology and Pharmacy Science events
      gave me an opportunity to challenge myself in an area I was
      already passionate about while learning more about healthcare,
      medications, and the role pharmacy plays in helping people.
    </p>


    <div className="experience-tags">

      <span>HOSA</span>
      <span>Pharmacology</span>
      <span>Pharmacy Science</span>
      <span>Healthcare</span>

    </div>


    <button
      className={`experience-link project-toggle ${
        hosaOpen ? "open" : ""
      }`}
      onClick={() => setHosaOpen(!hosaOpen)}
    >
      {hosaOpen
        ? "Hide experience ↑"
        : "View experience →"}
    </button>

  </div>

</article>


{/* =========================================
    HOSA EXPANDED SECTION
========================================= */}

{hosaOpen && (

  <section className="hosa-expanded">

    {/* HEADER */}

    <div className="hosa-header">

      <div>

        <p className="case-study-label">
          A FORMATIVE EXPERIENCE
        </p>

        <h3>
          Growing my appreciation
          <br />
          for healthcare.
        </h3>

      </div>

      <p className="hosa-intro">
        In 2022, I competed in both Pharmacology and Pharmacy Science
        through HOSA. It was an opportunity to take something I had
        already spent years learning about and challenge myself in a
        completely different setting.
      </p>

    </div>


    {/* PHOTO GALLERY */}

    <div className="hosa-gallery">

      <div className="hosa-photo hosa-photo-main">
        <img
          src={hosaMain}
          alt="HOSA pharmacy competition"
        />

        <span>
          HOSA • 2022
        </span>
      </div>


      <div className="hosa-photo hosa-photo-small">
        <img
          src={pharmacyComp}
          alt="Pharmacy and healthcare experience"
        />
      </div>


      <div className="hosa-photo hosa-photo-small">
        <img
          src={hosaThree}
          alt="Pharmacy experience"
        />
      </div>


    </div>


    {/* STORY */}

    <div className="hosa-story-section">

      <div className="hosa-story-label">

        <span>
          01
        </span>

        <p>
          WHY IT MATTERED
        </p>

      </div>


      <div className="hosa-story">

        <p>
          Pharmacy has been the profession I've spent the most time
          working in. Competing through HOSA gave me a chance to step
          outside of my everyday pharmacy responsibilities and really
          challenge myself on what I knew.
        </p>

        <p>
          Studying pharmacology and pharmacy science also made me
          appreciate how much knowledge and care goes into healthcare.
          Behind every medication is a process, a person, and a
          responsibility to get things right.
        </p>

        <p>
          That experience strengthened my appreciation for healthcare
          and became an important part of my journey before eventually
          expanding my interests into technology, business, and
          information systems.
        </p>

      </div>

    </div>


    {/* SMALL TAKEAWAY */}

    <div className="hosa-takeaway">

      <span>
        ✦
      </span>

      <p>
        An early experience that connected my interest in
        <strong> pharmacy, learning, and helping people.</strong>
      </p>

    </div>

  </section>

)}

{/* =========================================
    03 — ONE REFUGEE
========================================= */}

<article className="experience-item refugee-experience">

  <div className="experience-number">
    03
  </div>

  <div className="experience-content">

    {/* HEADER */}
    <div className="experience-heading">

      <div>
        <p className="experience-type">
          COMMUNITY • MARKETING • SERVICE
        </p>

        <h2>
          One Refugee
        </h2>
      </div>

      <span className="experience-year">
        EXPERIENCE
      </span>

    </div>


    {/* INTRO */}
    <p className="experience-description">
      One Refugee is an organization that has become personally
      meaningful to me. As the daughter of refugees and immigrants,
      its mission and the community it creates have had a lasting
      impact on me.
    </p>


    {/* TAGS */}
    <div className="experience-tags">
      <span>Community</span>
      <span>Marketing</span>
      <span>Nonprofit</span>
      <span>Service</span>
    </div>


    {/* EXPAND BUTTON */}
    <button
      className={`experience-expand-button ${
        oneRefugeeOpen ? "open" : ""
      }`}
      onClick={() => setOneRefugeeOpen(!oneRefugeeOpen)}
    >
      {oneRefugeeOpen
        ? "Close experience ↑"
        : "Read my experience →"}
    </button>


    {/* =========================================
        EXPANDED CONTENT
    ========================================= */}

    {oneRefugeeOpen && (

  <div className="refugee-expanded">

    {/* =========================================
        WHY IT MATTERS
    ========================================= */}

    <section className="refugee-story-block">

      <div className="refugee-story-content">

        <div className="refugee-section-number">
          01
        </div>

        <p className="case-study-label">
          WHY IT MATTERS TO ME
        </p>

        <h3>
          More than an organization.
        </h3>

        <p>
          One Refugee has become an important part of my story.
          As the daughter of refugees and immigrants, I've seen
          how meaningful it can be to have people and communities
          that make you feel welcomed and supported.
        </p>

        <p>
          Being involved with One Refugee has allowed me to
          contribute to an organization whose mission feels
          personal while also learning from the people around me.
        </p>

      </div>


      <div className="refugee-story-image">

        <img
          src={oneRefugeeOne}
          alt="One Refugee community experience"
        />

        <span>
          One Refugee • Community
        </span>

      </div>

    </section>


    {/* =========================================
        MY EXPERIENCE
    ========================================= */}

    <section className="refugee-experience-block">

      <div className="refugee-block-header">

        <div className="refugee-section-number">
          02
        </div>

        <div>

          <p className="case-study-label">
            MY EXPERIENCE
          </p>

          <h3>
            Learning by being part of it.
          </h3>

        </div>

      </div>


      <div className="refugee-experience-text">

        <p>
          Through my experiences with One Refugee, I've had the
          opportunity to participate in events, connect with members
          of the community, and contribute to the organization's work.
        </p>

        <p>
          My marketing experience also gave me an opportunity to use
          skills like communication, visual content, branding, and
          social media in support of something I genuinely care about.
        </p>

      </div>


      <div className="refugee-photo-grid">

        <figure>

          <img
            src={oneRefugeeTwo}
            alt="Experience with One Refugee"
          />

          <figcaption>
            <span>01</span>
            Connecting with the community.
          </figcaption>

        </figure>


        <figure>

          <img
            src={oneRefugeeThree}
            alt="One Refugee activity"
          />

          <figcaption>
            <span>02</span>
            Participating in a One Refugee experience.
          </figcaption>

        </figure>

      </div>

    </section>


    {/* =========================================
        REFLECTION
    ========================================= */}

    <section className="refugee-reflection">

      <div className="refugee-section-number">
        03
      </div>

      <p className="case-study-label">
        WHAT I TAKE WITH ME
      </p>

      <h3>
        Helping people feel like they belong.
      </h3>

      <p>
        My time with One Refugee has strengthened my appreciation
        for community, storytelling, and the small ways people can
        make others feel seen. It has also helped me think more
        intentionally about the kind of work I want to do: work
        that combines my skills with something that genuinely
        helps people.
      </p>

    </section>

  </div>

)}

  </div>

</article>


        {/* =========================================
            04 — WRITING
        ========================================= */}

        <article className="experience-item">

          <div className="experience-number">
            04
          </div>


          <div className="experience-content">

            <div className="experience-heading">

              <div>

                <p className="experience-type">
                  WRITING • JOURNALISM
                </p>

                <h2>
                  Writing & Journalism
                </h2>

              </div>


              <span className="experience-year">
                EXPERIENCE
              </span>

            </div>


            <p className="experience-description">
              Writing has been a consistent part of my academic
              and creative life, from journalism and published work
              to creative and technical writing. I enjoy taking
              complicated ideas and finding a clear, engaging way
              to communicate them.
            </p>


            <div className="experience-tags">

              <span>Journalism</span>
              <span>Creative Writing</span>
              <span>Technical Writing</span>
              <span>Research</span>

            </div>


            <a
              href="/writing"
              className="experience-link"
            >
              Read my writing →
            </a>

          </div>

        </article>


        {/* =========================================
            05 — JAPAN
        ========================================= */}

        <article className="experience-item">

          <div className="experience-number">
            05
          </div>


          <div className="experience-content">

            <div className="experience-heading">

              <div>

                <p className="experience-type">
                  GLOBAL EXPERIENCE
                </p>

                <h2>
                  Japan Global Study Tour
                </h2>

              </div>


              <span className="experience-year">
                2026
              </span>

            </div>


            <p className="experience-description">
              Participated in a seven-day Eccles Global Study Tour
              in Japan, exploring the global impact of technology
              and sustainability while learning from a different
              cultural and business environment.
            </p>


            <div className="experience-tags">

              <span>Technology</span>
              <span>Sustainability</span>
              <span>Global Business</span>
              <span>Culture</span>

            </div>


            <a
              href="/photography"
              className="experience-link"
            >
              See Japan photography →
            </a>

          </div>

        </article>

      </section>


      {/* CLOSING */}

      <section className="experience-closing">

        <p className="section-label">
          WHAT'S NEXT
        </p>


        <h2>
          I'm still figuring out
          <br />
          where all of this leads.
        </h2>


        <p>
          And honestly, that's part of what I enjoy. I'm interested
          in opportunities where technology, creativity, communication,
          and helping people overlap.
        </p>


        <a
          href="/writing"
          className="primary-button"
        >
          Explore more of my work →
        </a>

      </section>

    </main>
  );
}

export default Experience;