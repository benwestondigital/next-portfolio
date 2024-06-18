import { TechCategory } from '@/types/Tech';
import { IndividualTech } from './IndividualTech';

type IProps = {
  tech: TechCategory;
};

export const TechSection = ({ tech }: IProps) => {
  if (!tech) return;

  const { domain, technologies } = tech;

  return (
    <section className="my-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-500">
          {domain}
        </h2>
        <div className="flex flex-1 shrink flex-wrap items-start justify-center">
          {technologies.map((item) => (
            <IndividualTech key={item.techName} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
