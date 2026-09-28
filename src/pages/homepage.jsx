import "./homepage.css";
import heroImage from "../images/hero.jpg";
import informationSystemsImage from "../images/information-systems.jpg";
import photographyImage from "../images/photography.jpg";
import marketingImage from "../images/marketing.jpg";
import writingImage from "../images/writing.jpg";

import skinIdentifierImage from "../images/skinidentifier.png";
import japanImage from "../images/studyabroad.jpg";
import marketingWorkImage from "../images/socialmedia.jpg";
import writingWorkImage from "../images/writingimage.png";
import pharmacyComp from "../images/pharmacycomp.jpg";
import serviceImage from "../images/service.jpg";

function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-eyebrow">HELLO, I'M BRE</p>

          <h1>
            Technology,
            <br />
            creativity,
            <br />
            and people.
          </h1>

          <p className="hero-description">
            I'm an Information Systems student at the University of Utah
            interested in technology, writing, design, marketing, and creating
            things that help people.
          </p>

          <div className="hero-buttons">
            <a href="/experience" className="primary-button">
              Explore my work →
            </a>

            <a href="/writing" className="secondary-button">
              Read my writing
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Mountain landscape"
        />

          <div className="hero-note">
            big dreams
            <br />
            + real impact ♡
          </div>
        </div>

      </section>


      {/* INTERESTS */}
      <section className="interests">

        <p className="section-label">WHAT I DO</p>

        <div className="section-heading-row">
          <h2>A little bit of everything.</h2>

          <p className="handwritten">
            different interests,
            <br />
            same purpose ♡
          </p>
        </div>

        <div className="interest-grid">

         <a href="/education" className="interest-card">
  <div className="card-icon">🎓</div>

  <h3>Education</h3>

  <p>
    Exploring technology, business, computer science, and the
    experiences that have shaped my education at the University of Utah.
  </p>

  <img
    src={informationSystemsImage}
    alt="Education at the University of Utah"
  />

  <span className="card-arrow">→</span>
</a>
            


          <a href="/writing" className="interest-card">
            <div className="card-icon">✍️</div>

            <h3>Writing</h3>

            <p>
              Journalism, creative writing, and learning how to explain ideas
              clearly and thoughtfully.
            </p>

            <img
              src={writingImage}
              alt="Notebook and writing"
            />

            <span className="card-arrow">→</span>
          </a>


          <a href="/photography" className="interest-card">
            <div className="card-icon">📷</div>

            <h3>Photography</h3>

            <p>
              A creative outlet for noticing details, documenting experiences,
              and telling stories visually.
            </p>

            <img
            src={photographyImage}
            alt="Flowers in nature"
            />

            <span className="card-arrow">→</span>
          </a>


          <a href="/marketing" className="interest-card">
            <div className="card-icon">📣</div>

            <h3>Marketing</h3>

            <p>
              Branding, social media, visual communication, and finding ways to
              connect ideas with people.
            </p>

            <img
            src={marketingImage}
            alt="Nature and greenery"
            />

            <span className="card-arrow">→</span>
          </a>

        </div>
      </section>


      {/* SELECTED WORK */}
      <section className="selected-work">

        <div className="work-heading">

          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>
              Projects, experiences,
              <br />
              and things I'm proud of.
            </h2>
          </div>

          <a href="/experience" className="work-link">
            View all work →
          </a>

        </div>


        <div className="work-grid">

          <a href="/experience" className="work-card">
            <img src={skinIdentifierImage} alt="SkinIdentifier project" />            <div className="work-label">
              <strong>SkinIdentifier</strong>
              <span>Django + AI Skincare Project</span>
            </div>
          </a>

          <a href="/experience" className="work-card">
            <img src={pharmacyComp} alt="Pharmacy comp" />
            <div className="work-label">
              <strong>Pharmacy Competition</strong>
              <span>HOSA State Comp</span>
            </div>
          </a>

          <a href="/experience" className="work-card">
            <img src={serviceImage} alt="Business analysis project" />
            <div className="work-label">
              <strong>National Honor Society</strong>
              <span>Service and Leadership</span>
            </div>
          </a>

          <a href="/writing" className="work-card">
            <img src={writingWorkImage} alt="Published writing" />
            <div className="work-label">
              <strong>Published Writing</strong>
              <span>Journalism & Storytelling</span>
            </div>
          </a>

          <a href="/marketing" className="work-card">
            <img src={marketingWorkImage} alt="Marketing work" />
            <div className="work-label">
              <strong>Marketing Experience</strong>
              <span>Branding & Social Media</span>
            </div>
          </a>

          <a href="/experience" className="work-card">
            <img src={japanImage} alt="Japan study tour" />
            <div className="work-label">
              <strong>Japan Global Study Tour</strong>
              <span>Culture & Global Perspective</span>
            </div>
          </a>

        </div>
      </section>

    </main>
  );
}

export default Home;