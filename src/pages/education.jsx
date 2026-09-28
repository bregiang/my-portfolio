import "./education.css";
import collegePhoto from "../images/uofu.jpeg";
import hanbok from "../images/hanbok.jpg";
import incheon from "../images/incheoncampus.jpg";
import cooking from "../images/cookingclass.jpg";
import educationHero from "../images/education-hero.png";

function Education() {
  return (
    <main className="education-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="education-hero">

  <img
    src={educationHero}
    alt="University of Utah campus with the Wasatch Mountains"
    className="education-hero-image"
  />

  <div className="education-hero-overlay">

    <div className="education-hero-content">

      <p className="education-eyebrow">
        EDUCATION
      </p>

      <h1>
        Learning how
            <br />
            technology
            <br />
            meets people.
      </h1>

      <p className="education-intro">
            My education at the University of Utah has given me
            the opportunity to explore both the technical and
            human sides of technology — from computer science
            to information systems, business, design, and beyond.
          </p>

    </div>

<div className="education-scroll">
            <span>↓</span>
            <p>My academic journey</p>
          </div>
  </div>

</section>


      {/* =========================================
          UNIVERSITY
      ========================================= */}

      <section className="education-introduction">

        <div className="education-number">
          01
        </div>

        <div className="education-introduction-content">

          <p className="education-eyebrow">
            THE UNIVERSITY OF UTAH
          </p>

          <h2>
            One school,
            <br />
            a lot of directions.
          </h2>

          <p>
            My time at the University of Utah has allowed me
            to explore what I actually enjoy about technology.
            Rather than focusing on just one side of the field,
            I've been able to build a foundation across business,
            technology, information systems, and computer science.
          </p>

          <p>
            That combination has shaped the kind of work I want
            to pursue: work where technology is important, but
            understanding people and communicating ideas clearly
            is just as important.
          </p>

        </div>

        <div className="education-badge">

          <span>
            U
          </span>

          <p>
            UNIVERSITY
            <br />
            OF UTAH
          </p>

        </div>

      </section>


      {/* =========================================
          DEGREES / PROGRAMS
      ========================================= */}

      <section className="education-programs">

        <div className="education-program-heading">

          <p className="education-eyebrow light">
            02 · WHAT I'M STUDYING
          </p>

          <h2>
            Two fields.
            <br />
            One direction.
          </h2>

        </div>


        <div className="program-cards">

          <div className="program-card">

            <span className="program-number">
              01
            </span>

            <p className="program-type">
              MAJOR
            </p>

            <h3>
              Information
              <br />
              Systems
            </h3>

            <p>
              My Information Systems education has helped me
              understand how organizations use technology,
              data, systems, and people to solve problems.
            </p>

            <div className="program-status">
              BS · EXPECTED DEC 2026
            </div>

          </div>


          <div className="program-card program-card-light">

            <span className="program-number">
              02
            </span>

            <p className="program-type">
              MINOR
            </p>

            <h3>
              Computer
              <br />
              Science
            </h3>

            <p>
              My Computer Science minor gives me a stronger
              technical foundation and helps me understand
              the systems and code behind the technology I work
              with.
            </p>

            <div className="program-status">
              COMPUTER SCIENCE MINOR
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          EDUCATION + TECHNOLOGY
      ========================================= */}

      <section className="education-bridge">

        <div className="bridge-content">

          <p className="education-eyebrow">
            THE CONNECTION
          </p>

          <h2>
            I don't want to
            <br />
            choose between
            <br />
            technical and human.
          </h2>

          <p>
            Studying both Information Systems and Computer
            Science has shown me that technology isn't just
            about writing code or managing systems.
          </p>

          <p>
            It's also about understanding the people who use
            those systems, identifying what they need, and
            communicating solutions clearly.
          </p>

        </div>


        <div className="bridge-words">

          <span>TECHNOLOGY</span>
          <span>BUSINESS</span>
          <span>DATA</span>
          <span>PEOPLE</span>
          <span>COMMUNICATION</span>
          <span>PROBLEM SOLVING</span>

        </div>

      </section>


      {/* =========================================
          COLLEGE LIFE / PHOTO GALLERY
      ========================================= */}

      <section className="education-gallery">

        <div className="gallery-heading">

          <p className="education-eyebrow">
            03 · COLLEGE LIFE
          </p>

          <h2>
            The things
            <br />
            I did along
            <br />
            the way.
          </h2>

          <p>
            My education has happened both inside and outside
            the classroom. This is a place for the experiences,
            activities, projects, travels, and people that have
            made college meaningful to me.
          </p>

        </div>


        <div className="education-photo-grid">

          <div className="education-photo photo-large">

        <img
          src={collegePhoto}
          alt="A college experience at the University of Utah"
        />

    <div className="photo-caption">
       <span>LARRY H. MILLER SCHOLAR</span>

       <p>
         A special moment as a Larry H. Miller Scholar,
         pictured alongside Gail Miller.
        </p>
     </div>

      </div>


          <div className="education-photo">

        <img
          src={incheon}
          alt="A college experience at the University of Utah"
        />

 <div className="photo-caption">
    <span>STUDY ABROAD · KOREA</span>

    <p>
      Studying abroad at the University of Utah Asia Campus
      in Incheon, South Korea.
    </p>
  </div>

      </div>


          <div className="education-photo">

            <img
          src={hanbok}
          alt="A college experience at the University of Utah"
        />

          <div className="photo-caption">
    <span>KOREA · CULTURAL EXPERIENCE</span>

    <p>
      Experiencing Korean culture through a traditional
      hanbok experience during my study abroad.
    </p>
  </div>

      </div>


          <div className="education-photo photo-wide">

            <img
    src={cooking}
    alt="Cooking class experience in Tokyo, Japan"
  />

  <div className="photo-caption">
    <span>JAPAN · CULTURAL EXPERIENCE</span>

    <p>
      Taking part in a traditional cooking class in Tokyo
      during my study abroad experience in Japan.
    </p>
  </div>
 </div>

        </div>

      </section>


      {/* =========================================
          CURRENT CHAPTER
      ========================================= */}

      <section className="education-current">

        <div className="current-number">
          04
        </div>

        <div className="current-content">

          <p className="education-eyebrow">
            CURRENT CHAPTER
          </p>

          <h2>
            Still learning.
            <br />
            Still figuring it out.
          </h2>

          <p>
            I'm continuing my Information Systems education
            while building the technical and communication
            skills I want to carry into my career.
          </p>

          <div className="current-details">

            <div>
              <strong>
                UNIVERSITY
              </strong>

              <span>
                University of Utah
              </span>
            </div>

            <div>
              <strong>
                DEGREE
              </strong>

              <span>
                BS Information Systems
              </span>
            </div>

            <div>
              <strong>
                EXPECTED
              </strong>

              <span>
                Dec 2026
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="education-closing">

        <span>
          ✦
        </span>

        <h2>
          There's still
          <br />
          plenty to learn.
        </h2>

        <p>
          And that's probably my favorite part.
        </p>

      </section>

    </main>
  );
}

export default Education;