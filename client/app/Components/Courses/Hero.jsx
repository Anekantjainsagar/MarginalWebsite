const HeroCourse = () => {
  return (
    <div className="pt-[18vw] md:pt-[12vh] pb-[6vw] flex items-center justify-center text-white">
      <div className="h-[30vh] md:h-[85vh] px-[5vw] md:px-[3vw] w-full mainBg flex flex-col justify-center">
        <h4 className="text-xl md:text-3xl font-semibold md:mb-2 text-white">
          Our <span className="text-textGreen">Toppers</span>
        </h4>
        <p className="text-sm text-gray-200 md:text-xl md:w-4/12 leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras poseure,
          nisl eget fringilla pretium, massa sem consequat sapien, sit amet
          bibendum ante nunc ac nulla. Sed eget ultricies magna. Phasellus
          sapien felis, commodo vitae suscipit molestie, molestie in purus.
        </p>
      </div>
    </div>
  );
};

export default HeroCourse;
