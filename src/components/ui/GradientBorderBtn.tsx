
const GradientBorderButton = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="relative">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-orange via-primary-pink to-primary-purple"
      />
            <button 
        className="relative rounded-full px-2 py-1 font-bold text-sm bg-white m-1"
      >
        WE CAN HELP YOU
      </button>
    </div>
  </div>
  );
};

export default GradientBorderButton;