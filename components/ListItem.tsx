"use client";

import Image from "next/image";
import {FaPlay} from "react-icons/fa"
import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href,
}) => {
  const router = useRouter();
  const onClick = () => {
    // Add authentication before push 
    router.push(href);
  }
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          src={image}
          className="object-contain"
          fill
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">
        {name}
      </p>
      <div
        className="absolute transition rounded-full flex justify-center items-center right-5 opacity-0 bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110"
      >
        <FaPlay className="text-black" />
      </div>
    </button>

  )
}

export default ListItem