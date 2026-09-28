import "./writing.css";
import tribunePreview from "../images/tribune.jpg";
import cerbatPreview from "../images/cerbat.jpg";

function Writing() {
  return (
    <main className="writing-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="writing-hero">

        <div className="writing-hero-inner">

          <p className="writing-eyebrow">
            WRITING • A STORY IN PROGRESS
          </p>

          <h1>
            I started writing
            <br />
            because I wanted
            <br />
            to inspire people.
          </h1>

          <p className="writing-hero-intro">
            My biggest passion during the entirety
            of my life has always been to be a writer.
            I love to write stories, craft essays, and
            shape words into something people can't forget.
          </p>

          <div className="writing-scroll">
            <span>↓</span>
            <p>Follow the story</p>
          </div>

        </div>

      </section>


      {/* =========================================
          THE BEGINNING
      ========================================= */}

      <section className="writing-beginning">

        <div className="beginning-number">
          01
        </div>

        <div className="beginning-content">

          <p className="writing-eyebrow">
            WHERE IT STARTED
          </p>

          <h2>
            A very specific
            <br />
            kind of obsession.
          </h2>

          <p>
            When I was younger, I wanted to be a cowgirl.
            That dream eventually grew into a fascination
            with horses, and horses became the first subject
            I could talk about, read about, and write about
            endlessly.
          </p>

          <p>
            It might seem like a small beginning, but it taught
            me something important: I love learning about a
            subject deeply enough that I want to explain it
            to someone else.
          </p>

        </div>


        <div className="beginning-note">

          <span className="horse-mark">
            ♞
          </span>

          <p>
            My first writing niche:
          </p>

          <strong>
            HORSES
          </strong>

        </div>

      </section>


      {/* =========================================
          JOURNALISM
      ========================================= */}

      <section className="writing-journalism">

        <div className="journalism-content">

          <p className="writing-eyebrow light">
            02 • JOURNALISM
          </p>

          <h2>
            Then I learned
            <br />
            to write for
            <br />
            other people.
          </h2>

          <p>
            Journalism changed the way I thought about writing.
            Instead of writing only about the things I personally
            loved, I learned how to listen, ask questions, research
            a subject, and turn someone else's story into something
            a reader could understand.
          </p>

          <p>
            As a news writer, I interviewed people, worked on
            article projects, organized information, and learned
            how much work can happen behind a finished story.
          </p>

        </div>


        <div className="journalism-card">

          <span className="journalism-card-number">
            01
          </span>

          <div className="newspaper-lines"></div>

          <h3>
            Journalism
          </h3>

          <p>
            Research
            <br />
            Interviews
            <br />
            Storytelling
            <br />
            Editing
          </p>

          <div className="journalism-caption">
            UNIVERSITY OF UTAH
          </div>

        </div>

      </section>


      {/* =========================================
          WIKIPEDIA
      ========================================= */}

      <section className="writing-wikipedia">

        <div className="wikipedia-heading">

          <p className="writing-eyebrow">
            03 • WIKIPEDIA
          </p>

          <h2>
            Writing for
            <br />
            the internet.
          </h2>

          <p>
            Wikipedia gave me a different kind of writing
            challenge: how do you take information, research it
            carefully, and turn it into something useful for
            someone who may know absolutely nothing about the
            subject?
          </p>

          <p>
            I have written and contributed to Wikipedia articles,
            developing experience with research, sourcing,
            organization, neutral writing, and explaining
            information clearly.
          </p>

        </div>


        <div className="wikipedia-feature">

          <div className="wiki-symbol">
            W
          </div>

          <div>

            <p className="wiki-label">
              FEATURED WRITING
            </p>

            <h3>
              A few articles I've worked on
            </h3>

            <p>
              I have written many Wikipedia articles and
              contributions. Here are a few I'd like to
              highlight.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURED ARTICLES
      ========================================= */}

      <section className="featured-writing">

        <div className="featured-heading">

          <p className="writing-eyebrow">
            SELECTED WORK
          </p>

          <h2>
            A few pieces
            <br />
            worth reading.
          </h2>

        </div>


        <div className="article-grid">

         <a
  href="https://www.sltrib.com/amplify-utah/2023/04/28/university-utah-an-arab-student/"
  target="_blank"
  rel="noopener noreferrer"
  className="article-card article-card-image"
>
  <div className="article-preview">
    <img
      src={tribunePreview}
      alt="Preview of Breanna's article in The Salt Lake Tribune"
    />

    <div className="preview-overlay">
      <span>VIEW ARTICLE →</span>
    </div>
  </div>

  <div className="article-card-content">

    <span>
      01
    </span>

    <p className="article-type">
      JOURNALISM · THE SALT LAKE TRIBUNE
    </p>

    <h3>
      At University of Utah, an Arab student group aims to build community
    </h3>

    <p>
      A reported story exploring the University of Utah's Arab
      Student Association and the community its members found
      through the organization.
    </p>

    <strong>
      READ ARTICLE →
    </strong>

  </div>
</a>


         <a
  href="https://en.wikipedia.org/wiki/Cerbat_mustang"
  target="_blank"
  rel="noopener noreferrer"
  className="article-card article-card-image"
>
  <div className="article-preview">
    <img
      src={cerbatPreview}
      alt="Preview of the Cerbat mustang Wikipedia article"
    />

    <div className="preview-overlay">
      <span>VIEW ARTICLE →</span>
    </div>
  </div>

  <div className="article-card-content">

    <span>
      02
    </span>

    <p className="article-type">
      WIKIPEDIA · FIRST ARTICLE
    </p>

    <h3>
      Cerbat mustang
    </h3>

    <p>
      The first Wikipedia article I ever wrote. I took the
      initiative to research and create the page after seeing
      that people in the Wikipedia community were looking
      to establish one.
    </p>
<p className="article-story">
  Written when I was 10 years old.
</p>
    <strong>
      READ ARTICLE →
    </strong>

  </div>
</a>


          <a
            href="#"
            className="article-card"
          >

            <span>
              03
            </span>

            <p className="article-type">
              JOURNALISM
            </p>

            <h3>
              Journalism Article
            </h3>

            <p>
              Add a short description of your published
              journalism work here.
            </p>

            <strong>
              READ ARTICLE →
            </strong>

          </a>


          <a
            href="#"
            className="article-card article-card-special"
          >

            <span>
              04
            </span>

            <p className="article-type">
              CREATIVE
            </p>

            <h3>
              A Story of My Own
            </h3>

            <p>
              A space for one of your creative writing
              projects, stories, or excerpts.
            </p>

            <strong>
              EXPLORE →
            </strong>

          </a>

        </div>

      </section>


      {/* =========================================
          CREATIVE WRITING
      ========================================= */}

      <section className="creative-writing">

        <div className="creative-decoration">
          “
        </div>

        <div className="creative-content">

          <p className="writing-eyebrow">
            04 • CREATIVE WRITING
          </p>

          <h2>
            Sometimes I write
            <br />
            because a story
            <br />
            won't leave me alone.
          </h2>

          <p>
            Journalism taught me to write about the world around
            me. Creative writing gives me a place to build worlds
            of my own.
          </p>

          <p>
            I enjoy experimenting with characters, ideas, and
            stories that don't necessarily have to fit into a
            particular format. Some of these projects are still
            works in progress, which is part of the fun.
          </p>

          <button className="writing-button">
            VIEW CREATIVE WORK →
          </button>

        </div>

      </section>


      {/* =========================================
          TECHNICAL WRITING
      ========================================= */}

      <section className="technical-writing">

        <div className="technical-heading">

          <p className="writing-eyebrow">
            05 • WHERE I AM NOW
          </p>

          <h2>
            And now I'm
            <br />
            learning how to
            <br />
            explain technology.
          </h2>

        </div>


        <div className="technical-content">

          <p>
            Today, I'm studying Information Systems and becoming
            increasingly interested in technical writing.
          </p>

          <p>
            It feels like a natural intersection of the things
            I've always enjoyed: learning something deeply,
            organizing information, understanding technology,
            and finding a way to explain it clearly to another
            person.
          </p>

          <p>
            I'm especially interested in writing that makes
            complicated systems feel approachable — whether
            that's documentation, user guides, technical
            explanations, or content that helps people use
            technology with confidence.
          </p>

        </div>


        <div className="technical-words">

          <span>RESEARCH</span>
          <span>EXPLAIN</span>
          <span>ORGANIZE</span>
          <span>CREATE</span>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="writing-closing">

        <span>
          ✦
        </span>

        <h2>
          I'm still figuring
          <br />
          out what I'll write next.
        </h2>

        <p>
          But I know I'll probably want to tell the story.
        </p>

      </section>

    </main>
  );
}

export default Writing;