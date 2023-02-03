import garlic from "../../assets/garlic-compressed.jpg";
import todd from "../../assets/todd.jpg";
import { GR_EMAIL } from "../../config";
import "./About.css";

const About = ({ photoRight, contactRef }) => {
  return (
    <div className="About">
      <h1 className="About-title">
        Permaculture design and garden consultation.
      </h1>
      <div className="About-content">
        {photoRight && (
          <img className="About-photo" src={garlic} alt="garlic" />
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
          healthy soil on your hands, the vitality associated with nutritious
          food, the pacing of the natural world, and delicious meals composed of
          the fruits (and vegetables) of your labor are just a few examples of
          the benefits that await those who will take action.
        </p>
        <p>
          I offer practical and productive garden and edible landscape design,
          along with experienced problem solving based upon old-time knowledge
          from our shared agricultural heritage, proven low-till/no-till market
          gardening techniques, and applied Permaculture principles. My goal is
          to clarify the relationship between the client and their land, what
          the wants and needs are of both, and then design a course of action
          that will bring about abundance, health, and resilience.
        </p>
        <ul>
          <li>
            From backyard gardening to self-sufficient homesteading, I can help
            guide you at each step: seed starting, planting, growing, harvesting
            and storing your own vegetables.
          </li>
          <li>
            Human-Scale Food Production, no machines required. All you need are
            a few simple hand tools, time, and a willingness to get dirty.
          </li>
          <li>
            Coaching, working and learning together, remotely or in-person.
            There is always more to know and, further, creative ways to apply
            understanding.
          </li>
          <li>Site Assessment and planting recommendations.</li>
        </ul>
        {!photoRight && (
          <img className="About-photo" src={garlic} alt="garlic" />
        )}
        <div ref={contactRef}>
          <div className="About-divider" />
          <p>
            Contact me at{" "}
            <a className="About-link" href={`mailto:${GR_EMAIL}`}>
              gr.permaculture@gmail.com
            </a>{" "}
            to set up a consultation.
          </p>
          <p>
            In the meantime, check out{" "}
            <a className="About-link" href="/guides">
              my free guides
            </a>{" "}
            or the{" "}
            <a className="About-link" href="/podcast">
              Growing Resilience Podcast
            </a>
            .
          </p>
          <div className="About-divider" />
        </div>
        <div className="About-bio-container">
          <img className="About-bio-photo" src={todd} alt="todd-dwyer" />
          <div className="About-bio-text-container">
            <h3>Todd Dwyer</h3>
            <p className="About-bio-text">
              After years of spending every free moment in the natural world,
              and a career in high-end professional kitchens interacting with
              farmers as they dropped off their vegetables, fruits, and animals,
              I knew these men and women were onto something. Upon completing
              the Permaculture Design Course at the Bullock Brothers Farmstead
              on Orcas Island in 2011, I cut the mooring lines, bought an
              untouched piece of land, and moved to the woods. I quickly
              realized how little I knew, and began a series of successes and
              failures as I settled into a new life. A lot has changed since
              then, and now I help others learn more efficiently how to achieve
              their dreams of autonomy, better design their existing properties,
              and grow their own food.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
