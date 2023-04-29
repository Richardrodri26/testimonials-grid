import "./App.css";

function App() {
  return (
    <div className="container min-h-screen mx-auto">
      <div className="text-white py-5 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-ModerateViolet py-5 px-4 flex flex-col gap-4 relative rounded-lg lg:col-span-2 lg:order-1">
          <img className="absolute top-0 right-7 -z-0" src="/src/assets/images/bg-pattern-quotation.svg" alt="" />
          <div className="flex gap-3 z-10">
            <img src="/src/assets/images/image-daniel.jpg" className="h-10 rounded-full border-2 border-white" alt="img" />
            <div className="font-BarlowSemiCondensed font-medium text-sm">
              <p className="font-semibold">Daniel Clifford</p>
              <p className="opacity-70 -mt-1">Verified Graduate</p>
            </div>
          </div>
          <p className="z-10 font-BarlowSemiCondensed text-2xl font-semibold">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className="z-10 font-BarlowSemiCondensed font-[13px] text-sm opacity-70 leading-tight">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
        <div className="bg-VeryDarkGrayishBlue py-5 px-4 flex flex-col gap-4 rounded-lg lg:order-2">
          <div className="flex gap-3 z-10">
          <img src="/src/assets/images/image-jonathan.jpg" className="h-10 rounded-full border-2 border-white" alt="img" />
            <div className="font-BarlowSemiCondensed font-medium text-sm">
            <p className="font-semibold">Jonathan Walters</p>
              <p className="opacity-70 -mt-1">Verified Graduate</p>
            </div>
          </div>
          <p className="z-10 font-BarlowSemiCondensed text-xl font-semibold">The team was very supportive and kept me motivated</p>
          <p className="z-10 font-BarlowSemiCondensed text-sm opacity-70">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
        <div className="bg-WhiteCustom py-5 px-4 flex flex-col gap-4 rounded-lg text-VeryDarkGrayishBlue lg:order-4">
          <div className="flex gap-3 z-10">
          <img src="/src/assets/images/image-jeanette.jpg" className="h-10 rounded-full border-2 border-white" alt="img" />
            <div className="font-BarlowSemiCondensed font-medium text-sm">
            <p className="font-semibold">Jeanette Harmon</p>
              <p className="opacity-70 -mt-1">Verified Graduate</p>
            </div>
          </div>
          <p className="z-10 font-BarlowSemiCondensed text-xl font-semibold">An overall wonderful and rewarding experience</p>
          <p className="z-10 font-BarlowSemiCondensed text-sm opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
        <div className="bg-VeryDarkBlackishBlue py-5 px-4 flex flex-col gap-4 rounded-lg lg:col-span-2 lg:order-5">
          <div className="flex gap-3 z-10">
          <img src="/src/assets/images/image-patrick.jpg" className="h-10 rounded-full border-2 border-white" alt="img" />
            <div className="font-BarlowSemiCondensed font-medium text-sm">
            <p className="font-semibold">Patrick Abrams</p>
              <p className="opacity-70 -mt-1">Verified Graduate</p>
            </div>
          </div>
          <p className="z-10 font-BarlowSemiCondensed text-xl font-semibold">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className="z-10 font-BarlowSemiCondensed text-sm opacity-70">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
        <div className="bg-WhiteCustom py-5 px-4 flex flex-col gap-4  rounded-lg text-VeryDarkGrayishBlue lg:order-3 lg:row-span-2">
          <div className="flex gap-3 z-10">
          <img src="/src/assets/images/image-kira.jpg" className="h-10 rounded-full border-2 border-white" alt="img" />
            <div className="font-BarlowSemiCondensed font-medium text-sm">
            <p className="font-semibold">Kira Whittle</p>
              <p className="opacity-70 -mt-1">Verified Graduate</p>
            </div>
          </div>
          <p className="z-10 font-BarlowSemiCondensed text-xl font-semibold">Such a life-changing experience. Highly recommended!</p>
          <p className="z-10 font-BarlowSemiCondensed text-sm opacity-70">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
