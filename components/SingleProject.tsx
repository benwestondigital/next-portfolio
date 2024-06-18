import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

type IProps = {
  project: Project;
};

export const SingleProject = ({
  project: { slug, image, title, type, description },
}: IProps) => (
  <Link
    href={`/projects/${slug}`}
    passHref
    className="flex flex-col items-center justify-start rounded p-2 transition delay-150 ease-in-out  hover:bg-gray-50 hover:drop-shadow-lg dark:hover:bg-gray-800 sm:w-96 md:hover:scale-105"
  >
    <Image
      src={`/${image}`}
      alt={title}
      width={359}
      height={432}
      className="cursor-pointer rounded-lg drop-shadow-md"
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectPosition: 'top',
      }}
    />
    <h3 className="mx-2 mt-6 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
      {type}
    </h3>
    <h2 className="my-2 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
      {title}
    </h2>
    <p className="mx-2 mb-5 flex-wrap text-center text-base text-gray-700 dark:text-white">
      {description}
    </p>
    <div className="flex items-center">
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-blue-600 hover:underline dark:text-gray-300">
        See Project Details
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-600 dark:text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m13 7 5 5m0 0-5 5m5-5H6"
        />
      </svg>
    </div>
  </Link>
);
