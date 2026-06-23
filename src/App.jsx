import "./App.css";
import profile from "./assets/pic_site.jpg";
import { useState } from "react";

export default function App() {
  const [expandedPaper, setExpandedPaper] = useState(null);
  const papers = [
    {
      title: "Modeling the Spread of Epidemics",
      subtitle: "Course Final Research Paper",
      preview: "This paper studies the spread of epidemics through the use of mathematical models, focusing on compartment models such as SIS and SIR, along with stochastic formulations on networks.",
      fullDescription: "This paper studies the spread of epidemics through the use of mathematical models, focusing on compartment models such as SIS and SIR, along with stochastic formulations on networks. Using differential equations, we analyze short and long term behavior of infection dynamics, including threshold phenomena governed by the basic reproduction number. We also take a closer look at SIR models and their connection to branching processes and infection digraphs, which provide a probabilistic perspective on the spread of epidemics in large populations.",
      pdf: "/papers/Epidemics.pdf",
    },
    {
      title: "Variational Inference and Bayesian Posterior Approximation",
      subtitle: "Course Final Research Paper",
      preview: "This paper studies two major approaches to approximating intractable Bayesian posteriors: Markov Chain Monte Carlo (MCMC) and Variational Inference (VI).",
      fullDescription: "This paper studies two major approaches to approximating intractable Bayesian posteriors: Markov Chain Monte Carlo (MCMC) and Variational Inference (VI). We cover two important variational inference algorithms: Coordinate Ascent Variational Inference (CAVI) and Stein Variational Gradient Descent (SVGD). We further discusses the role of the Kullback–Leibler (KL) divergence, the Evidence Lower Bound (ELBO), mean-field assumptions, and particle-based updates, while highlighting both the computational advantages and the approximation biases of variational methods in modern Bayesian statistics.",
      pdf: "/papers/VI.pdf",
    },
    {
      title: "Random Graphs, Giant Components, and Preferential Attachment",
      subtitle: "Course Final Research Paper",
      description: "A concise description of the argument, topic, or result.",
      preview: "This paper studies two crucial topics in random graph theory: the emergence of giant components in the configuration model and the preferential attachment mechanism underlying scale-free networks.",
      fullDescription: "This paper studies two crucial topics in random graph theory: the emergence of giant components in the configuration model and the preferential attachment mechanism underlying scale-free networks. We first review branching process heuristics and the sprinkling argument used to characterize the existence and uniqueness of giant components in sparse random graphs, including the Erdos-Renyi model and the configuration model. We then take a closer look at the Barabasi-Albert framework, analyzing how preferential attachment produces heavy-tailed degree distributions and asymptotic power-law behavior. Together, these topics illustrate how probabilistic methods explain large-scale structural phenomena in network models.",
      pdf: "/papers/Graphs.pdf",
    },
  ];

  const classGroups = [
    {
      category: "Computer Science",
      courses: [
        "CS 61A — Intro to CS",
        "CS 61B — Algorithms & Data Structures",
        "CS 61C — Computer Architecture & Machine Structures",
        "CS 180 — Computer Vision",
        "CS 184 — Computer Graphics",
        "CS 189 — Machine Learning",
        "CS 294 — Graduate Network Theory",
        "EECS 183 —  Natural Language Processing",
        "DATA C100 — Principles of Data Science",
      ],
    },
    {
      category: "Statistics/Mathematics",
      courses: [
        "CS 70 — Discrete Mathematics & Probability Theory",
        "STAT 20 — Intro to Statistics",
        "STAT 135 — Statistical Theory",
        "STAT 238 — Graduate Bayesian Statistics",
        "EECS 126 — Probability and Random Processes",
        "MATH 51 — Precalculus",
        "MATH 52 — Calculus",
        "MATH 53 — Multivariate Calculus",
        "MATH 54 — Linear Algebra & Differential Equations",
      ],
    },
  ];

  return (
    <div className="site">
      <div className="wrapper">
        <header className="topbar">
          <div className="site-name">Ayush Mahale</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#papers">Papers</a>
            <a href="#classes">Classes</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section id="about" className="intro">
            <div className="intro-left">
            <img src={profile} alt="Ayush Mahale" className="profile-img" />
            <p className="image-caption">Busted... Cookie Monster</p>
            </div>

            <div className="intro-right">
              <h1>About Me</h1>
              <p>
              Hi, I’m Ayush Mahale, a rising senior at UC Berkeley majoring in Computer Science and Statistics.
              </p>

              <p>
              I’m broadly interested in Machine Learning, CS Theory, and Bayesian Statistics. I enjoy thinking about both the mathematical foundations of these fields and how they translate into real-world systems.
              </p>

              <p>
              I'm spending the summer as an Agentic AI MTS intern at Nutanix, where I'm working at the intersection of AI infrastructure and enterprise software. Previously, I interned at SciFin Inc., where I worked on building ELT data pipelines and data infrastructure, gaining experience with scalable systems and data engineering workflows.
              I also interned at HSBC, focusing on investment banking and asset management. As part of the internship, I developed financial models for an online gaming company, Skillz, and pitched to HSBC’s Head of Business Model Innovation, Peter Dingle.
              </p>
            </div>
          </section>

          <section id="papers" className="section">
  <h2>Research & Writing</h2>
  <div className="list">
    {papers.map((paper, index) => (
      <article key={paper.title} className="list-item">
        <h3>{paper.title}</h3>
        <p className="muted">{paper.subtitle}</p>

        <p>
          {expandedPaper === index ? paper.fullDescription : paper.preview}
        </p>

        <div className="paper-links">
          <button
            className="text-button"
            onClick={() =>
              setExpandedPaper(expandedPaper === index ? null : index)
            }
          >
            {expandedPaper === index ? "Show less" : "Read more"}
          </button>

          <a href={paper.pdf} target="_blank" rel="noreferrer" className="pdf-link">
            View PDF
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

        <section id="classes" className="section">
        <h2>Relevant Coursework</h2>

        <div className="course-groups">
          {classGroups.map((group) => (
          <div key={group.category} className="course-group">
           <h3>{group.category}</h3>
           <ul className="class-list">
              {group.courses.map((course) => (
               <li key={course}>{course}</li>
              ))}
           </ul>
          </div>
        ))}
        </div>
        </section>

        <section id="contact" className="section">
       <h2>Contact</h2>

       <div className="contact-links">
       <a
         href="mailto:ayushmahale@berkeley.edu"
         className="contact-link"
        >
          Email
          </a>

         <a
         href="https://www.linkedin.com/in/ayush-mahale-1826b5238/"
         target="_blank"
         rel="noreferrer"
          className="contact-link"
         >
         LinkedIn
          </a>

           <a
              href="/resume.pdf"
            target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Resume
            </a>
            </div>
        </section>
        </main>

        <footer className="footer">© 2026 Ayush Mahale</footer>
      </div>
    </div>
  );
}
