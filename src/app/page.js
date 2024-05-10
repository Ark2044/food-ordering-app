import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to SLEEPZ PIZZA, where passion for both sleep and pizza
            collide to create an extraordinary dining experience. Our journey
            began with a simple idea: why not combine two of life&apos;s greatest
            pleasures into one delicious concept? At SLEEPZ PIZZA, we believe in
            crafting more than just a meal; we strive to deliver an indulgent
            fusion of comfort and flavor that leaves you craving more.
          </p>
          <p>
            Our story is one of innovation and dedication. We&apos;ve meticulously
            perfected our recipes, blending the finest ingredients with a
            sprinkle of creativity to offer pizzas that not only tantalize your
            taste buds but also evoke a sense of warmth and relaxation. Each
            bite is a journey to culinary bliss, promising a slice of happiness
            with every box.
          </p>
          <p>
            But it&apos;s not just about the pizza. At SLEEPZ PIZZA, we understand
            the importance of rest and rejuvenation in today&apos;s fast-paced world.
            That&apos;s why we&apos;re not just a pizzeria; we&apos;re a haven for those
            seeking a moment of solace amidst the chaos. Whether you&apos;re grabbing
            a quick bite on your lunch break or unwinding after a long day, our
            cozy ambiance and friendly service ensure that every visit feels
            like coming home.
          </p>
          <h2>
            Join us on a quest to redefine the way you experience pizza.
            <br /> At SLEEPZ PIZZA, we don&apos;t just serve food; we serve dreams on
            a crust.
          </h2>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+917381231230"
          >
            +91 73812 31230
          </a>
        </div>
      </section>
    </>
  );
}
