import { TechIconsAndNames } from '@/types/Tech';

type IProps = {
  item: TechIconsAndNames;
};

export const IndividualTech = ({ item: { icon, techName } }: IProps) => {
  const Icon = icon;
  return (
    <div className="mx-2 flex w-20 flex-col items-center justify-start">
      <Icon className="m-3 h-10 w-10 rounded-md bg-gray-600 p-1 text-gray-100 shadow-xl hover:bg-gray-800" />
      <p className="text-center text-gray-400 text-sm md:text-base">
        {techName}
      </p>
    </div>
  );
};
