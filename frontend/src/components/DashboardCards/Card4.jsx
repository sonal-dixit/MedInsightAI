const Card4 = ({ heading, images, names, readmore }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl flex flex-col gap-6 p-8">
      <h1 className="text-2xl font-bold text-[#040354]">{heading}</h1>
      <div className="flex gap-10 w-full max-xl:grid-cols-2 max-xl:grid items-center">
        {images.map((image, index) => (
          <div className="flex flex-col gap-4 items-center" key={index}>
            {/* add images instead of div later */}
            <div key={index} className="bg-gray-300 rounded-xl w-48 h-32" />
            {names && names[index] && (
              <span className="font-semibold">{names[index]}</span>
            )}
          </div>
        ))}
        {readmore && <a className="font-semibold underline ml-10">Read More</a>}
      </div>
    </div>
  );
};

export default Card4;
