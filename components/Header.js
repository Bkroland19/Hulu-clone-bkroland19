import {
  HomeIcon,
  BadgeCheckIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
  UserIcon,
  CheckIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://st4.depositphotos.com/16030310/25211/v/600/depositphotos_252113512-stock-illustration-vector-illustration-golden-letters.jpg"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
