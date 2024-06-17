import { Element } from 'react-scroll';
import { TechSection } from './TechSection';
import { technologyNamesAndIcons } from '../utils';

export const MySkills = () => (
  <Element id="tech" name="tech" className="scroll-mt-24">
    <section className="my-32 flex h-auto flex-col items-center justify-center px-2">
      <h1 className="text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl">
        My Skills
      </h1>
      <p className="prose my-5 flex-wrap text-center dark:prose-invert md:w-2/3 lg:prose-xl lg:w-1/2">
        Through my employer I have had access to Udemy and Frontend Masters, so
        I have continued to study a number of courses on topics such as CI/CD
        pipelines, Postman, TypeScript, automated testing and more. Here are
        some of the courses I have completed:
        <br />
        <a
          className="font-semibold no-underline hover:text-indigo-300 hover:underline"
          href="https://frontendmasters.com/courses/testing-practices-principles/"
          target="_blank"
          rel="noreferrer"
        >
          JavaScript Testing Practices and Principles by Kent C. Dodds
        </a>{' '}
        from Frontend Masters, and{' '}
        <a
          className="font-semibold no-underline hover:text-indigo-300 hover:underline"
          href="https://www.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/"
          target="_blank"
          rel="noreferrer"
        >
          GitLab CI: Pipelines, CI/CD and DevOps for Beginners
        </a>{' '}
        &{' '}
        <a
          className="font-semibold no-underline hover:text-indigo-300 hover:underline"
          href="https://www.udemy.com/course/understanding-typescript/"
          target="_blank"
          rel="noreferrer"
        >
          Understanding TypeScript
        </a>{' '}
        from Udemy.
      </p>

      {technologyNamesAndIcons.map((tech) => {
        return <TechSection key={tech.domain} tech={tech} />;
      })}
    </section>
  </Element>
);
