import { Element, Link } from 'react-scroll';
import { Hero } from './Hero';

export const About = () => (
  <Element
    id="about"
    name="about"
    className="flex flex-col items-center justify-center px-2"
  >
    <Hero />
    <section className="mt-10 flex flex-1 flex-col items-center justify-center md:w-4/5">
      <Link
        activeClass="projects"
        to="projects"
        smooth={true}
        offset={-100}
        duration={500}
        className="btn cursor-pointer"
      >
        See My Projects
      </Link>
      <div className="prose mb-5 flex-wrap px-2 dark:prose-invert lg:prose-xl">
        <p className="pt-16">
          I work as a Frontend Software Engineer in the Payments team for
          Holland & Barrett. The website receives over £10m revenue per month,
          so there is a strong emphasis on releasing safe code, and including
          error handling and robust logging for observability using Datadog.
        </p>
        <p>
          My role involves creating React components for our UI, and managing a
          backend-for-frontend Node Express service that interacts with our
          Payment Orchestration service, other internal micro-services, and
          external APIs.
        </p>
        <p>
          I have strong TypeScript skills and like to work in a type-safe
          manner. On an average day I may be working on a new React component
          via Storybook, debugging an Express middleware chain, extracting some
          logic into a custom hook, or styling a component based on Figma
          designs.
        </p>
        <p>
          Some of the projects I have done are adding new payment methods such
          as Riverty, upgrading the Saved Payments functionality to use
          Adyen&apos;s &apos;sessions&apos; architecture, redesigning the Mini
          Basket for a brand refresh.
        </p>
        <p>
          I actively contribute to the squad dynamic and share my opinions in
          team meetings. By planting a seed of an idea, I may help someone to
          imagine a new feature.
        </p>
      </div>
    </section>
  </Element>
);
