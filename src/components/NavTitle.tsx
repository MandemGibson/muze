import { FC } from "react";

type NavTitleProps = {
  title: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
};

const NavTitle: FC<NavTitleProps> = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`mx-auto flex p-[10px] rounded-full space-x-[5px] items-end ${
        isActive
          ? "bg-[#1e1e1e]/60 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.25)]"
          : ""
      } hover:cursor-pointer transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      <img src={icon} alt="play icon" />
      <h3 className="text-white text-[12px]">{title}</h3>
    </div>
  );
};

export default NavTitle;
