import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_84%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#F893D0_25%,#FFDD99_50%,#C3F0B2_75%,#2FD8FE_100%)] text-transparent bg-clip-text [-webkit-background-clip-text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
            One task <br />
            at a Time
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black rounded-lg py-3 px-5 font-medium">
            Get for free
          </button>
        </div>
      </div>
      <div className="absolute h-[375px] w-[750px] sm:w-[1537px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:top-[calc(100%-120px)"></div>
    </div>
  );
};
