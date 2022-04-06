
const TechSection = ({ techType, type }) => {
  return (
    <section className='my-10'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-xl text-indigo-600 font-semibold'>
          {techType}
        </h2>
        <div className='flex flex-1 flex-wrap shrink justify-center items-start'>
          {type[techType].map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.techName}
                className='flex flex-col w-20 justify-start items-center mx-2'
              >
                <Icon
                  className='w-10 h-10 bg-gray-600 hover:bg-gray-800 text-gray-100 m-3 p-1 shadow-xl rounded-md'
                />
                <p className='md:text-base text-gray-400 text-center sm:text-sm'>
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
