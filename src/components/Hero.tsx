import ArrowWIcon from '../assets/icons/arrow-w.svg';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_84%)] py-[72px]">
      <div className="container">
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
        <h1 className='text-7xl font-bold tracking-tighter text-center'>One task at a Time</h1>
        <p className='text-center text-xl mt-8'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className='flex justify-center mt-8'></div>
        <button className='bg-white text-black rounded-lg py-3 px-5 font-medium'>Get for free</button>
      </div>
    </div>
  );
};
