export default function Blog() {
  return (
    <>
      <main>
        <h1 className="page-title">Resumé</h1>
        <a href="/resume.pages" download>Download Resume</a>
        <div className="resume">
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="entry">
              <h3 className="entry-title">
                California Polytechnic State University, San Luis Obispo
              </h3>
              <p className="entry-info">
                Bachelor of Science in Computer Science | Expected Graduation - <em>May 2029</em>
                <br />
              </p>
            </div>

            <div className="entry">
              <h3 className="entry-title">National Public School Koramangala, Bengaluru</h3>
              <p className="entry-info">
                Senior Secondary Education (Grade12), CBSE - <em>March 2025</em>
                <br />
                Percentage: 92%
                <br />
                Relevant Coursework: Computer Science (CS101 from Stanford University), Mathematics, Physics, Chemistry, English, Robotics.
              </p>
            </div>

            <div className="entry">
              <h3 className="entry-title">Geethanjali Vidyalaya, Bengaluru</h3>
              <p className="entry-info">
                High School (Grade10), CBSE - <em>March 2023</em>
                <br />
                Percentage: 91%
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Coursework</h2>
            <ul className="course-list">
              <li>Intro to Computer Science</li>
              <li>Calculus I</li>
              <li>Writing and Rhetoric</li>
              <li>Western Art History</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="entry">
              <h3 className="entry-title">Personal Website --- HTML, CSS</h3>
              <div className="entry-info">
                <ul>
                  <li>Designed and built a personal website using HTML and CSS</li>
                  <li>Implemented multiple pages using HTML and CSS</li>
                  <li>Focused on Semantic HTML design</li>
                  <li>Used best practices for Git and GitHub</li>
                </ul>
              </div>
            </div>

            <div className="entry">
              <h3 className="entry-title">Encryption & Decryption Ciphers --- C++</h3>
              <div className="entry-info">
                <ul>
                  <li>Implemented 4 encryption/decryption algorithms: <b>Caesar, Vignère, ZigZag, XOR.</b></li>
                  <li>Developed file encryption/decryption system with .enc and .dec file support.</li>
                  <li>Designed user credential storage with password recovery.</li>
                  <li>Added logging system to track operations with timestamps.</li>
                  <li>Built interactive console menu for text/file encryption and algorithm learning.</li>
                </ul>
              </div>
            </div>

            <div className="entry">
              <h3 className="entry-title">IoT Projects --- Arduino Uno</h3>
              <div className="entry-info">
                <ul>
                  <li><b>Vertical Farming System</b> - automated irrigation for optimized plant growth.</li>
                  <li><b>Bluetooth-Controlled Car</b> - mobile-controlled vehicle using Arduino + HC-05.</li>
                  <li><b>Overhead Water Tank Alarm</b> - sensor-based water monitoring system.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Activities</h2>
            <div className="entry">
              <h3 className="entry-title">Graphic Design Roles</h3>
              <p className="entry-info">
                Designed logos, brochures, T-shirts, and social media layouts for SWE, inter-school fests & class magazines.
              </p>
            </div>

            <div className="entry">
              <h3 className="entry-title">Event Head</h3>
              <p className="entry-info">
                Organized and led the art event at NPS Koramangala's annual fest, managing a student team.
              </p>
            </div>

            <div className="entry">
              <h3 className="entry-title">Madilu Sevashrama Trust, Bengaluru</h3>
              <p className="entry-info">
                Sponsor meals for underprivileged children three times annually.
              </p>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Awards and Honors</h2>
            <ul className="awards-list">
              <li><b>All India Rank 78</b> - HPE CodeWars (2024) out of 19,000 participants.</li>
              <li><b>Rank 1</b> - Inter-house Art Event (2024)</li>
              <li><b>Gold Medal</b> - SOF International Mathematics Olympiad (2022)</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skills-list">
              <li><b>Programming:</b> Python, C++, Arduino IDE, CircuitPython</li>
              <li><b>Design tools:</b> Canva, Blender</li>
              <li><b>Languages:</b> German (A2 level), English, Hindi</li>
              <li><b>Other:</b> Visual Arts (Certified Grade 5), Carnatic Violin (Diploma), Robotics</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Interests</h2>
            <ul className="interests-list">
              <li>Coding</li>
              <li>Visual Arts</li>
              <li>Carnatic Violin</li>
              <li>Crochet & Knitting</li>
              <li>Digital Art</li>
              <li>Reading</li>
              <li>Baking</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">References</h2>
            <p>Available upon request.</p>
          </section>
        </div>
      </main>
      <footer className="footer">
        © 2025 Parnika's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
