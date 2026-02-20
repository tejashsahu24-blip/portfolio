import { motion } from "framer-motion";

function Header() {
  return (
<section className="hero">
  <img src="/profile.jpg" className="hero-bg" />

  <div className="hero-content">
    <h1>Tejeshwar Sahu</h1>
    <p>React Developer</p>
    <button>Download CV</button>
  </div>
 </section>


  );
}

export default Header;
