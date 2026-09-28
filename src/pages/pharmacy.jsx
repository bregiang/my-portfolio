import "./pharmacy.css";
import jatcImage from "../images/jatc.jpg";

function Pharmacy() {
  return (
    <main className="pharmacy-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="pharmacy-hero">
        <div className="pharmacy-hero-inner">

          <p className="pharmacy-eyebrow">
            PHARMACY • 2021 — PRESENT
          </p>

          <h1>
            Where my
            <br />
            professional
            <br />
            story began.
          </h1>

          <p className="pharmacy-intro">
            Before Information Systems, UX, writing, and technology became
            part of my story, there was pharmacy.
          </p>

          <p className="pharmacy-intro secondary">
            I began exploring pharmacy through education and competition,
            then turned that interest into more than five years of
            professional experience across retail, hospital, and university
            pharmacy environments.
          </p>

          <div className="pharmacy-scroll">
            <span>↓</span>
            <p>Scroll through the story</p>
          </div>

        </div>
      </section>


      {/* =========================================
          EDUCATION
      ========================================= */}

      <section className="pharmacy-education">

  <div className="education-content">

    <p className="pharmacy-eyebrow">
      01 • PHARMACY EDUCATION
    </p>

    <h2>
      It started
      <br />
      in the
      <br />
      classroom.
    </h2>

    <div className="education-school">

      <h3>
        Jordan Applied Technology Center
      </h3>

      <p>
        Pharmacy Technician Program
      </p>

    </div>

    <div className="education-copy">

      <p>
        My introduction to pharmacy began through my education
        at JATC, where I learned the fundamentals of medications,
        pharmacy operations, prescription fulfillment, and the
        responsibilities involved in working in a pharmacy environment.
      </p>

      <p>
        This program gave me the technical foundation and confidence
        to take the next step — and it's where my pharmacy journey
        truly began.
      </p>

    </div>

  </div>


  <div className="education-photo-area">

    <div className="photo-year">
      2021
    </div>

    <div className="photo-frame">

      <img
        src={jatcImage}
        alt="Pharmacy technician class at JATC"
      />

    </div>

    <div className="photo-note">
      <span>JATC</span>
      <span>Pharmacy Technician Program</span>
    </div>

  </div>

</section>


      {/* =========================================
          HOSA COMPETITION
      ========================================= */}

      <section className="hosa-section">

  <div className="hosa-photo-side">

    <div className="hosa-botanical botanical-left">
      ♧
    </div>

    <div className="hosa-photo-wrapper">

      <img
        src="/src/images/hosa.jpeg"
        alt="HOSA competition in 2022"
        className="hosa-photo"
      />

    </div>

    <div className="hosa-photo-caption">
      <span>HOSA COMPETITION</span>
      <span className="caption-line"></span>
      <span>2022</span>
    </div>

  </div>


  <div className="hosa-content">

    <p className="pharmacy-eyebrow">
      02 • COMPETITION
    </p>

    <h2>
      Putting what
      <br />
      I learned
      <br />
      to the test.
    </h2>

    <p>
      In 2022, I competed in two HOSA events:
      Pharmacology and Pharmacy Science.
    </p>

    <p>
      Competing gave me an opportunity to take the knowledge
      I had developed through my pharmacy education and apply
      it in a competitive environment alongside other students
      interested in healthcare.
    </p>


    <div className="hosa-divider"></div>


    <div className="hosa-events">

      <div className="hosa-event">

        <div className="hosa-event-icon">
          ✦
        </div>

        <div>
          <h3>
            Pharmacology
          </h3>

          <p>
            HOSA competitive event
          </p>
        </div>

      </div>


      <div className="hosa-event">

        <div className="hosa-event-icon">
          ♧
        </div>

        <div>
          <h3>
            Pharmacy Science
          </h3>

          <p>
            HOSA competitive event
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* =========================================
          TIMELINE INTRO
      ========================================= */}

      <section className="timeline-intro">

        <p className="pharmacy-eyebrow">
          03 • THE CAREER
        </p>

        <h2>
          From first job
          <br />
          to five years
          <br />
          of experience.
        </h2>

        <p>
          My pharmacy career grew alongside my education. Each workplace
          introduced me to a different environment, different workflows,
          and new responsibilities.
        </p>

      </section>


      {/* =========================================
          TIMELINE
      ========================================= */}

      <section className="pharmacy-timeline">


        {/* 2021 */}
        <div className="timeline-item">

          <div className="timeline-year">
            <span>
              2021
            </span>

            <small>
              — 2022
            </small>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <p className="card-eyebrow">
              ASSOCIATED FOOD STORES
            </p>

            <h3>
              Pharmacy Technician
              <br />
              in Training
            </h3>

            <p className="timeline-date">
              Aug 2021 — May 2022
            </p>

            <p className="timeline-description">
              My first professional experience in pharmacy. I learned
              about medications, dispensed prescriptions, and processed
              insurance claims while developing the fundamentals of
              working in a pharmacy.
            </p>

            <div className="timeline-tags">
              <span>Medication Knowledge</span>
              <span>Prescription Fulfillment</span>
              <span>Insurance Claims</span>
            </div>

          </div>

        </div>


        {/* 2021 */}
        <div className="timeline-item featured">

          <div className="timeline-year">
            <span>
              2022
            </span>

            <small>
              — PRESENT
            </small>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <p className="card-eyebrow">
              ASSOCIATED FOOD STORES
            </p>

            <h3>
              Certified Pharmacy
              <br />
              Technician
            </h3>

            <p className="timeline-date">
              Mar 2021 — Present
            </p>

            <p className="timeline-description">
              After beginning my career as a technician in training, I
              continued with Associated Food Stores as a Certified
              Pharmacy Technician.
            </p>

            <div className="timeline-highlight">

              <strong>
                Certified
              </strong>

              <p>
                A new stage in my pharmacy career, with increased
                responsibility across pharmacy operations.
              </p>

            </div>

            <div className="timeline-tags">
              <span>Inventory</span>
              <span>Insurance</span>
              <span>Prescription Fulfillment</span>
              <span>Customer Service</span>
            </div>

          </div>

        </div>


        {/* 2022 */}
        <div className="timeline-item dark">

          <div className="timeline-year">
            <span>
              2022
            </span>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <p className="card-eyebrow">
              INTERMOUNTAIN HOSPITAL
            </p>

            <h3>
              Central Pharmacy
            </h3>

            <p className="timeline-date">
              Jul 2022 — Dec 2022
            </p>

            <p className="timeline-description">
              Working in a hospital central pharmacy introduced me to a
              more complex and highly controlled environment.
            </p>

            <div className="hospital-skills">

              <div>
                <strong>
                  Inventory
                </strong>

                <span>
                  Central pharmacy inventory management
                </span>
              </div>

              <div>
                <strong>
                  Fulfillment
                </strong>

                <span>
                  High-volume prescription fulfillment
                </span>
              </div>

              <div>
                <strong>
                  Compounding
                </strong>

                <span>
                  Sterile and nonsterile compounding
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* 2023 */}
        <div className="timeline-item">

          <div className="timeline-year">
            <span>
              2023
            </span>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <p className="card-eyebrow">
              WALMART
            </p>

            <h3>
              Certified Pharmacy
              <br />
              Technician
            </h3>

            <p className="timeline-date">
              Jul 2023 — Aug 2023
            </p>

            <p className="timeline-description">
              My time at Walmart strengthened my retail pharmacy
              experience, particularly customer service, communication,
              prescription fulfillment, and insurance processing.
            </p>

            <div className="timeline-tags">
              <span>Customer Service</span>
              <span>Insurance</span>
              <span>Phone Communication</span>
            </div>

          </div>

        </div>


        {/* 2025 */}
        <div className="timeline-item latest">

          <div className="timeline-year">
            <span>
              2025
            </span>

            <small>
              — PRESENT
            </small>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <p className="card-eyebrow">
              UNIVERSITY OF UTAH
            </p>

            <h3>
              Certified Pharmacy
              <br />
              Technician
            </h3>

            <p className="timeline-date">
              Apr 2025 — Present
            </p>


            <p className="timeline-description">
              My current role brings together many of the skills I've
              developed throughout my pharmacy career: communication,
              problem-solving, data tracking, and navigating operational
              systems.
            </p>


            <div className="pharmacy-stats">

              <div className="pharmacy-stat">

                <strong>
                  100+
                </strong>

                <span>
                  inbound calls
                  <br />
                  per shift
                </span>

              </div>


              <div className="pharmacy-stat">

                <strong>
                  &lt; 4
                </strong>

                <span>
                  minute average
                  <br />
                  resolution time
                </span>

              </div>


              <div className="pharmacy-stat">

                <strong>
                  DATA
                </strong>

                <span>
                  tracking & workflow
                  <br />
                  experience
                </span>

              </div>

            </div>


            <div className="university-description">

              <p>
                I use customer relationship workflows and data tracking
                to resolve inquiries efficiently.
              </p>

              <p>
                I also collaborate with pharmacy management and other
                stakeholders to troubleshoot complex operational issues.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHAT PHARMACY TAUGHT ME
      ========================================= */}

      <section className="lessons-section">

        <div className="lessons-heading">

          <p className="pharmacy-eyebrow">
            04 • WHAT I TOOK WITH ME
          </p>

          <h2>
            Skills that
            <br />
            followed me.
          </h2>

          <p>
            Pharmacy has been more than a job. It has shaped how I
            communicate, solve problems, work with systems, and approach
            responsibility.
          </p>

        </div>


        <div className="lessons-grid">

          <div className="lesson-card">

            <span>
              01
            </span>

            <h3>
              Communication
            </h3>

            <p>
              Working with patients, customers, pharmacists, technicians,
              and coworkers taught me to communicate clearly and patiently.
            </p>

          </div>


          <div className="lesson-card">

            <span>
              02
            </span>

            <h3>
              Attention to Detail
            </h3>

            <p>
              Pharmacy taught me to slow down, pay attention, and take
              responsibility for the details of my work.
            </p>

          </div>


          <div className="lesson-card">

            <span>
              03
            </span>

            <h3>
              Adaptability
            </h3>

            <p>
              Working across retail, hospital, and university environments
              taught me how to adjust to new teams and workflows.
            </p>

          </div>


          <div className="lesson-card">

            <span>
              04
            </span>

            <h3>
              Problem Solving
            </h3>

            <p>
              Pharmacy taught me to look beyond an immediate issue and
              understand the process and people surrounding it.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CONNECTION TO FUTURE
      ========================================= */}

      <section className="pharmacy-future">

        <p className="pharmacy-eyebrow">
          WHERE I AM NOW
        </p>

        <h2>
          Pharmacy is where
          <br />
          my story started.
        </h2>

        <p>
          Today, I'm exploring Information Systems, writing, UX, marketing,
          and technology. Those interests may look different from pharmacy,
          but the foundation is still there.
        </p>

        <p>
          I enjoy solving problems, communicating with people, learning
          new things, and finding ways to make experiences better.
        </p>

        <div className="future-links">

          <a href="/education">
            Information Systems →
          </a>

          <a href="/writing">
            Writing →
          </a>

          <a href="/marketing">
            Marketing →
          </a>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="pharmacy-closing">

        <span>
          ✦
        </span>

        <h2>
          Five years
          <br />
          is part of my story.
        </h2>

      </section>

    </main>
  );
}

export default Pharmacy;