import React from 'react';

const TechSection = ({techType, tech}) => {
  return (
    <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-xl text-indigo-600 font-semibold'>{techType[0].type}</h2>
        <div className='flex justify-center items-center cursor-pointer'>
          {techType.map((item, index) => {
            const Icon = tech[index].icon;
            return (
              <div
                key={item.techName}
                className='flex flex-col justify-center items-center mx-2'
              >
                <Icon
                  className={`w-10 h-10 bg-${item.colour}-400 text-gray-100 m-3 p-1 shadow-xl rounded-md`}
                />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  {item.techName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
