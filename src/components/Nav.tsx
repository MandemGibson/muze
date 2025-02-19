import playIcon from "../assets/gridicons_play.svg";
import browseIcon from "../assets/gg_stack.svg";
import radioIcon from "../assets/icon-park-outline_waves-left.svg";
import playlistIcon from "../assets/ri_music-fill.svg";
import NavTitle from "./NavTitle";
import { useState } from "react";

const navItems = [
  { title: "Listen Now", icon: playIcon },
  { title: "Browse", icon: browseIcon },
  { title: "Radio", icon: radioIcon },
  { title: "Playlists", icon: playlistIcon },
];

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div
      className="mx-auto flex items-center bg-gradient-to-b rounded-full border-t border-white/60
       from-[#999999]/60 from-0% to-[#999999]/30 to-100% backdrop-blur-[90px] p-[5px] space-x-[20px]"
    >
      {navItems.map((item, index) => (
        <NavTitle
          {...item}
          isActive={index == activeIndex}
          onClick={() => handleNavClick(index)}
        />
      ))}
    </div>
  );
};

export default Nav;
