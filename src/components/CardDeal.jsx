import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Learn a better way  <br className="sm:block hidden" /> to trade like a Pro.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Access to adanced order types suchs a trigger orders, bracket order, spreads and many more. Use this on your favorite DEX or CEX, 
        support for both is what we aim. Dex's, do more than swap and for less.CEX's, faster execution with better BPS.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
