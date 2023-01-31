import peppers from "../../assets/peppers.jpg";
import todd from "../../assets/todd.jpeg";
import "./About.css";

const About = ({ photoRight }) => {
  return (
    <div className="About">
      <h1 className="About-title">
        Permaculture design and garden consultation.
      </h1>
      <div className="About-content">
        {photoRight && (
          <img className="About-photo" src={peppers} alt="peppers" />
        )}
        <p>
          As the old saying goes, the best time to plant a tree was 20 years
          ago. The next best time is today.
        </p>
        <p>
          The world continues to change at a pace that many of us have never
          experienced before, and the importance of providing healthy food for
          ourselves, our families and our local communities is becoming
          increasingly apparent.
        </p>
        <p>
          Ideally, growing your own food is not based out of a fear of the
          unknown, but rather an intentional engagement with Reality that allows
          one to experience what is good, true and beautiful. The feel of
          healthy soil on your hands, the healthful vitality associated with
          nutritious food, the pacing of the natural world, and delicious meals
          composed of the fruits (and vegetables) of your labor are just a few
          examples of the benefits that await those who will participate.
        </p>
        <p>
          I offer practical and productive garden and edible landscape design,
          along with experienced problem solving based upon old-time knowledge
          from our shared agricultural heritage, proven low-til/no-til market
          gardening techniques, and applied Permaculture principles. My focus
          begins with building healthy soil, sourced from readily available
          components and organic amendments, that will lead to resilient and
          abundant harvests.
        </p>
        <ul>
          <li>
            From backyard gardening to self-sufficient homesteading, I can help
            guide you at each step: seed starting, planting, growing, harvesting
            and storing your own vegetables.
          </li>
          <li>
            Human-Scale Food Production, no machines required. All you need are
            a few simple hand tools, time, and a willingness to get a little
            dirty.
          </li>
          <li>
            Coaching, working and learning together, remotely or in-person.
            There is always more to know and, further, to understand.
          </li>
          <li>Site Assessment and planting recommendations.</li>
        </ul>
        {!photoRight && (
          <img className="About-photo" src={peppers} alt="peppers" />
        )}
        <div className="About-divider" />
        <p>
          Contact me at{" "}
          <a className="About-link" href="mailto:gr.permaculture@gmail.com">
            gr.permaculture@gmail.com
          </a>{" "}
          to set up a consultation.
        </p>
        <p>
          In the meantime,{" "}
          <a className="About-link" href="/guides">
            download one of my free PDF guides
          </a>{" "}
          or check out the{" "}
          <a className="About-link" href="/podcast">
            Growing Resilience Podcast
          </a>
          .
        </p>
        <div className="About-divider" />
        <div className="About-bio-container">
          <img className="About-bio-photo" src={todd} alt="todd-dwyer" />
          <p className="About-bio-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
