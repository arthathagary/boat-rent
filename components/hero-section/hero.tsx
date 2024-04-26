import CardWrapper from "@/components/card-wrapper";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <CardWrapper className="h-96 flex justify-center items-center bg-gradient-to-r from-violet-600 to-blue-300">
      <div className="text-white space-y-8 ">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-300 to-fuchsia-100 inline-block text-transparent bg-clip-text">
          Want to hire a boat in Trincomalee?
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Button size="lg" variant="secondary">
            Book now
          </Button>
          <Button size="lg" variant="default">
            Contact us
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default HeroSection;
