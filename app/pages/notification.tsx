import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

export default function NotifyMagic({
  status,
  setStatus,
}: {
  status: null | string;
  setStatus: () => void;
}) {
  return (
    <div className="absolute flex justify-center w-full pt-5">
      <AnimatedList delay={5000} setStatus={setStatus}>
        <figure
          className={cn(
            "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
            // animation styles
            "transition-all duration-200 ease-in-out hover:scale-[103%]",
            // dark styles
            "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
          )}
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="flex size-10 items-center justify-center rounded-2xl"
              style={{
                backgroundColor: status == "success" ? "#15B392" : "#C62E2E", // Green for success, red for failure
              }}
            >
              <span className="text-lg">💬</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
                {status === "success" ? (
                  <span className="text-sm sm:text-lg">
                    Submitted SuccessFully!
                  </span>
                ) : (
                  <span className="text-sm sm:text-lg">Submission Failed!</span>
                )}
                {/* <span className="mx-1">·</span> */}
                {/* <span className="text-xs text-gray-500">5sec ago</span> */}
              </figcaption>
              <p className="text-sm font-normal text-white/60">Sent Success</p>
            </div>
          </div>
        </figure>
      </AnimatedList>
    </div>
  );
}
