import "./marketing.css";

function Marketing() {
  return (
    <main className="marketing">

      <section className="marketing-hero">
        <p className="section-label">MARKETING</p>

        <h1>
          Creative work
          <br />
          with a purpose.
        </h1>

        <p>
          My marketing experience has given me a chance to combine
          communication, creativity, technology, and strategy. I enjoy
          figuring out how an idea can become something people actually
          notice and connect with.
        </p>
      </section>


      <section className="marketing-intro">

        <div>
          <p className="section-label">WHAT I DO</p>

          <h2>
            Making ideas
            <br />
            easier to see.
          </h2>
        </div>

        <p>
          I've worked with branding, email communication, visual content,
          and social media. I especially enjoy the creative side of
          marketing — taking an idea and turning it into something
          understandable, appealing, and useful.
        </p>

      </section>


      <section className="marketing-skills">

        <article>
          <span>01</span>
          <h3>Branding</h3>
          <p>
            Helping create a consistent visual identity and voice.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Content</h3>
          <p>
            Creating visuals and written content that communicate clearly.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Social Media</h3>
          <p>
            Reviewing and supporting social content and online presence.
          </p>
        </article>

        <article>
          <span>04</span>
          <h3>Communication</h3>
          <p>
            Writing emails and communicating ideas with different audiences.
          </p>
        </article>

      </section>


      <section className="marketing-work">

        <p className="section-label">SELECTED WORK</p>

        <h2>Things I've helped create.</h2>

        <div className="marketing-gallery">

          <div className="marketing-placeholder">
            <span>PROJECT 01</span>
          </div>

          <div className="marketing-placeholder">
            <span>PROJECT 02</span>
          </div>

          <div className="marketing-placeholder">
            <span>PROJECT 03</span>
          </div>

        </div>

      </section>


      <section className="marketing-closing">

        <h2>
          Good marketing
          <br />
          starts with understanding people.
        </h2>

      </section>

    </main>
  );
}

export default Marketing;