import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Meteors } from "@/components/ui/meteors";
import { MarqueeDemo } from "@/components/MarqueeDemo";
import { TextAnimate } from "@/components/ui/text-animate";
function LandingPage() {
  return (
    <div className="landing-page w-full min-h-screen overflow-hidden gap-2 mt-2 flex flex-col">
      {/* <Meteors /> */}
      <div className="top-gradient-btn w-full h-10 flex justify-center items-center">
        <AnimatedGradientText className="border-1  py-1 px-6 rounded-full  text-sm font-semibold font-gilroy-bold">
          We Care Your Mood 🎧
        </AnimatedGradientText>
      </div>
      <div className="w-full h-40 flex flex-col gap-2 text-white hero-text-area text-[4rem] font-apple-bold">
        <div className="top-text-area w-full h-[33%] flex justify-center items-start">
          <h1 className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
            Every Feeling.
          </h1>
        </div>
        <div className="bottom-text-area w-full flex justify-center items-start">
          <h1 className="bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Moodify Finds Yours.
          </h1>
        </div>
      </div>
      <div className="description-text-area w-full py-2 flex flex-col items-center font-apple-medium text-[1.2rem]">
        <p className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
          Moodify offers instant, mood-powered music discovery with seamless.
        </p>
        <p className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-700 bg-clip-text text-transparent">
          playlist curation, vibe matching, and real-time recommendations.
        </p>
      </div>
      <div className="button-area w-full h-10 mt-2 font-apple-bold flex justify-center">
        <RainbowButton variant="" className="">
          Get Started <FaArrowRightLong />
        </RainbowButton>
      </div>
      <div className="marque-container w-full mt-5">
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default LandingPage;
