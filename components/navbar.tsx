import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCartIcon, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white h-16 flex items-center justify-between drop-shadow-lg z-50">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">
                  <h1 className="font-bold text-xl">Boat Logo</h1>
                </Link>
              </li>
              <li>
                <Link href="/">Boats</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <Search />
            <ShoppingCartIcon />
            {/* <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar> */}
            <Button>Sign in</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
