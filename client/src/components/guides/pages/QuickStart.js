import { GUIDE_EMAIL } from "../../../config";
import { getEmailBody, getEmailSubject } from "../../../utils";
import photo from "../../../assets/quick-start-guide.jpg";
import "../Guide.css";

const QuickStart = ({ photoRight, guideTitle }) => {
  return (
    <div>
      <h1 className="Guide-title">
        Todd Dwyer's Quick Start, No-Till, Weed-Free Garden Guide
      </h1>
      <div className="Guide-content">
        {photoRight && (
          <img className="Guide-photo" src={photo} alt="quick-start-garden" />
        )}
        <div className="Guide-link-container">
          <a className="Guide-link" href={"/guides"}>
            Back to Guides
          </a>
          <br />
          <a
            className="Guide-link"
            href={`mailto:${GUIDE_EMAIL}?subject=${getEmailSubject(
              guideTitle
            )}&body=${getEmailBody(guideTitle)}`}
          >
            Request this guide as a PDF
          </a>
        </div>
        {!photoRight && (
          <img className="Guide-photo" src={photo} alt="quick-start-garden" />
        )}
        <ul className="Guide-p">
          <li>
            None of this can be attributed to me. I am only presenting the
            brilliant techniques that have long been used by those far more
            clever than I. My methods may vary, but the principles remain tried
            and true.
          </li>
          <li>
            I will use a 32'x50' rectangle (referred to as a "block") for my
            example below.
          </li>
          <li>
            Tools and materials needed: min. 100' tape measure, heavy
            hammer/hand sledge, 38 2"x2"x16" wooden stakes, mason's line,
            32'x50' polyethylene silage tarp (black side up- DO NOT use any
            other kind of tarp), a LOT of weights to keep the tarp down (smooth
            rocks, concrete pavers, sand bags, large rounds of wood, etc), 2x6
            lumber, saw, and fasteners.
          </li>
        </ul>
        <ol className="Guide-p">
          <li>
            Mark the corners of your garden block with 2"x2"x16" stakes pounded
            into the ground with approximately 6" remaining above ground. You
            will need at least a 100' tape measure and a heavy hammer for this
            this work.
          </li>
          <li>
            Make sure the rectangle is equal (square). Do this by pulling a
            diagonal and make sure the measurements are identical. Recall your
            Pythagoras- a&#178;+b&#178;=c&#178;. For example, a 32'x50'
            rectangle will have a diagonal measurement of 59.36'.
          </li>
          <li>
            Lay out each of your garden beds within the block. I use a 30" wide
            bed, at 48' long. There is a 1' space (well, 9" on the side but I
            will widen it a bit) around the entire garden block to allow for a
            wheel hoe to keep encroaching weeds and grass at bay. From
            center-to-center of each bed is 48", with an 18" path between each
            30" bed. I use a marked 2"x2"x8' as a template for laying out
            beds/paths. You can use a tape measure as well.
          </li>
          <li>
            Use the same stake size for the bed corners as you did for the
            block, 2"x2"X16". Leave 2" above ground. Any taller and you will
            trip on them, tear your tarp, hit with a mower, etc. They need to be
            high enough to allow you to tie mason's line to them for designating
            the edges of the beds.
          </li>
          <li>
            All of your dimensions are now marked. Now make sure all stakes are
            buried to depth, with no more than 2" above ground.
          </li>
          <li>
            Mow the entire block as short as the exposed stakes will allow (if
            you left them sticking out too far, the mower will let you know).
            Water thoroughly. I soak the entire space for at least 6 hours. Your
            location and soil will dictate how long you should water. The tarp
            will be in place for 1 year (no less), so no water will get to that
            space. Act accordingly.
          </li>
          <li>
            If you have the resources available, adding organic matter
            (particularly manure) at this point is very helpful. Only add this
            precious material to the beds, not the paths. Do not use bulky
            material that will lift the tarp.
          </li>
          <li>
            Spread the tarp, black side up, and secure with your weights. Weight
            the corners first to align the tarp, then the edges. Keep the tarp
            as high as you can, but don't get carried away. Once the edges are
            all weighted, place weights along the paths. “How many weights do I
            need?" Answer: always more than you expect. You can not have too
            much, but you certainly can have too few. A loose tarp is not doing
            it's job, and it's incredibly frustrating. I place weights no more
            than 3-4' apart in any direction, closer on the edges that catch
            prevailing winds.
          </li>
          <li>
            Voila! Now wait no less than 365 days. Seriously. Do not think less
            time will work- it won't, and all of your time will be wasted.
            Patience, grasshopper.
          </li>
          <li>
            After 365 days, uncover, broad fork all of the beds, amend
            appropriately, and pull all perennial weeds with roots systems
            intact. Cultivate weekly. More on all this below.
          </li>
          <li>
            Congratulations- you now have your very own no-till garden space.
            Get to growing.
          </li>
        </ol>
        <p className="Guide-p">SUPER TOP SECRET SHORT-CUT TO GROW NOW:</p>
        <ol className="Guide-p">
          <li>
            Follow all of the above steps, but leave a 1-4 rows uncovered. Only
            leave the minimum amount of beds uncovered.
          </li>
          <li>
            Build low raised beds with 2x6s (stacked 2-3 high on edge = 11" (2)
            or 16 1/2" (3) high) 8' long, with a 2' wide gap between beds on
            end. Rip 2x6 in half (now 2 3/4" wide) for stakes to secure bed. At
            least 12" of the support take should be in the ground.
          </li>
          <li>
            Lay plain, uncolored cardboard, or unbleached Kraft paper, or Kraft
            paper feed bags on the bottom of the wooden frame for your raised
            beds. You are making a 3 sheet mulch (see the Internet for more
            information). This will minimize weed pressure while simultaneously
            beginning to decompose the weeds that are now covered.
          </li>
          <li>
            Fill your raised beds with the same soil/amendments/compost that you
            will be using on the mature garden.
          </li>
          <li>
            Cover the pathways with unbleached cardboard, Kraft paper, or weed
            barrier to keep the unwanted plants down.
          </li>
          <li>
            Plant into your temporary raised beds. Have your successes,
            failures, and delicious meals from these small beginnings.
          </li>
          <li>
            At the end of the growing season, pull the wooden beds apart, rake
            the soil along the length of your beds, and now pull the tarp over
            this area. Now your whole block is tarped.
          </li>
          <li>
            If you tarp in the Spring (this is best), you will pull the tarp
            back at the beginning the next growing season to reveal the portion
            that has been covered for 365 days. No cheating. Hop on your broad
            fork, and get to work. A soil test will tell you what your soil
            needs specifically, but you'll never go wrong adding organic
            compost.
          </li>
          <li>
            Weed pressure is greatly reduced, but not over. Nature abhors a
            vacuum, and perennial weeds are persistent. You will need to pull
            the perennials out with their roots. A cobra head weeder is
            fantastic for this tough work, as are quality knee pads or a cushion
            to make crawling around on you hands and knees less miserable.
          </li>
          <li>
            Cultivate the soil regularly (the top 1" - 1 1/2") Thread-stage
            weeds are easy to return to the undifferentiated Tao, mature plants
            less so. Never let weeds flower and seed. Never ever.
          </li>
          <li>
            At the end of the growing season, put the tarp back over the entire
            garden. At this point, you will have grown on each bed, and each bed
            will have been covered for at least 365 contiguous days. Leave the
            tarp on for the off-season.
          </li>
          <li>
            Spring (Year 3) has arrived. Uncover the entire garden, broad fork
            all of the beds, amend all the beds. Now the entire block is on the
            same time and fertility program.
          </li>
          <li>
            Wipe the sweat from your virtuous brow and start growing. Well done.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default QuickStart;
