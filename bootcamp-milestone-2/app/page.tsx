
export default function Home() {
  return (
    <main>
      <h1 className="page-title">Hello, world!</h1>
      <div className = "about">
        <div className = "about-image">
          <img src ="images/calpoly.jpeg" alt="An image of the Cal Poly sign"/>
        </div>
        <div className = "about-text">
          <p>
            I'm <strong>Parnika Singh</strong> and I'm from Bengaluru, India. I'm currently a freshman at <em>Cal Poly</em>, majoring in <strong>Computer Science</strong>
          </p>
          <p>
            I'm super interested in joining various tech clubs (especially Hack4Impact) and I'm also on the lookout for on-campus jobs!
          </p>
        </div>
      </div>
    </main>
  );
}
