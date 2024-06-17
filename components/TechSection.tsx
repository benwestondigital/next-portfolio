import { TechType } from '@/types/Tech';
import { TechIconsAndNames } from '@/utils';

type IProps = {
  tech: TechType;
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
          {technologies.map((item: TechIconsAndNames) => {
            const Icon = item.icon;
            return (
              <div
                key={item.techName}
                className="mx-2 flex w-20 flex-col items-center justify-start"
              >
                <Icon className="m-3 h-10 w-10 rounded-md bg-gray-600 p-1 text-gray-100 shadow-xl hover:bg-gray-800" />
                <p className="text-center text-gray-400 text-sm md:text-base">
                  {item.techName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
