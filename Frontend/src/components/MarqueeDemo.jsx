import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rahul",
    username: "@rahul",
    body: "Moodify ne mera Monday saver kar diya. Perfect playlist every time!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "Sad mood mein exactly wahi songs aate hain jo dil chahta hai.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Aryan",
    username: "@aryan",
    body: "Gym playlist was never this good. Energy mode is insane!",
    img: "https://avatar.vercel.sh/aryan",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "Finally an app that understands my vibe. Love Moodify!",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Karan",
    username: "@karan",
    body: "Late night chill sessions hit different with Moodify.",
    img: "https://avatar.vercel.sh/karan",
  },
  {
    name: "Aisha",
    username: "@aisha",
    body: "Party mode playlist was absolutely fire. 10/10!",
    img: "https://avatar.vercel.sh/aisha",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a]"></div>
    </div>
  );
}
