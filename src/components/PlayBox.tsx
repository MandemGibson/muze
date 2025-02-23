import searchIcon from "../assets/mynaui_search.svg";
import avatar from "../assets/Avatar Image.svg";
import nextUpIcon from "../assets/majesticons_next-circle.svg";
import heartIcon from "../assets/mdi_heart.svg";
import moreIcon from "../assets/weui_more-filled.svg";
import forwardIcon from "../assets/uiw_forward.svg";
import pauseIcon from "../assets/material-symbols_pause.svg";
import commentIcon from "../assets/fluent-mdl2_comment-solid.svg";
import menuIcon from "../assets/f7_menu.svg";
import speakerIcon from "../assets/subway_sound-2.svg";

const PlayBox = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[55%] max-h-[70%] rounded-[35px] z-10 relative">
      <div
        className="w-full h-full rounded-t-[35px] bg-gradient-to-b from-[#999999]/80 to-[#737373]
        backdrop-blur-[10px] shadow-[0_1_4_0_rgba(0,0,0,0.25)] border-t border-t-white/40 
        border-l border-l-white/50 border-r border-r-white/40 border-b border-b-[#999999]/50
        flex flex-col overflow-visible"
      >
        <div className="flex w-full items-center justify-between p-[16px]">
          <div
            className="group flex items-center bg-[#1e1e1e]/40 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.25)]
            rounded-full space-x-[5px] p-[10px]"
          >
            <img
              src={searchIcon}
              alt="search Icon"
              className="group-hover:text-white"
            />
            <input
              type="text"
              placeholder="Search by artist, title or album..."
              className="text-[12px] w-full h-full bg-transparent focus:outline-none
            placeholder:text-[#fff]/50 items-center text-white"
            />
          </div>
          <img src={avatar} alt="avatar" width={40} height={40} />
        </div>

        <div
          className="space-x-2 bottom-0 flex flex-row z-50
            overflow-x-auto max-w-full h-full items-center justify-center scrollbar-hide"
        >
          {[...Array(16)].map(() => (
            <div
              className="min-w-[105px] h-[105px] rounded-lg transform 
                hover:translate-y-[-15px] transition duration-300 bg-white"
            ></div>
          ))}
        </div>
      </div>

      <div
        className="max-h-[60%] bg-gradient-to-b from-[#1e1e1e]/20
        to-[#1e1e1e]/40 backdrop-blur-[30px] rounded-b-[35px] 
          border-l border-l-white/40 border-b border-b-[#999999]/50 border-r
        border-r-[#999999]/50 flex flex-row items-center justify-evenly overflow-clip"
      >
        <div className="w-full h-full overflow-y-auto scrollbar-hide p-5 space-y-2 text-white">
          <div className="flex items-center space-x-[5px]">
            <img src={nextUpIcon} alt="next up" />
            <h3 className="text-[14px]">Next Up</h3>
          </div>
          <div className="space-y-2 overflow-y-auto">
            {[...Array(16)].map(() => (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="w-[35px] h-[35px] bg-white rounded-md"></div>
                  <div className="flex flex-col">
                    <h2 className="text-[12px]">Perfect</h2>
                    <h3 className="text-[10px] text-white/70">
                      Ed Sheeran - Divide
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-[10px]">
                  <h3 className="text-[12px]">3:31</h3>
                  <img src={heartIcon} alt="heart" />
                  <img src={moreIcon} alt="more" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full overflow-y-auto p-5 space-y-2 text-white">
          <div className="flex items-center space-x-[5px]">
            <img src={nextUpIcon} alt="next up" />
            <h3 className="text-[14px]">Popular</h3>
          </div>
          {[1, 1, 1].map(() => (
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2 items-center">
                <div className="w-[35px] h-[35px] bg-white rounded-md"></div>
                <div className="flex flex-col">
                  <h2 className="text-[12px]">Perfect</h2>
                  <h3 className="text-[10px] text-white/70">
                    Ed Sheeran - Divide
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute -bottom-7 mx-auto flex items-center bg-gradient-to-b rounded-full border-t
         border-white/60 from-[#999999]/60 from-0% to-[#999999]/30 to-100% backdrop-blur-[90px]
          px-[20px] py-[5px] space-x-[20px] left-0 right-0 w-[70%] justify-between"
      >
        <div className="flex items-center space-x-[15px]">
          <img
            src={forwardIcon}
            alt="forward"
            className="hover:cursor-pointer"
          />

          <img src={pauseIcon} alt="pause" className="hover:cursor-pointer" />

          <img
            src={forwardIcon}
            alt="play"
            className="rotate-180 hover:cursor-pointer"
          />
        </div>
        <div className="p-[5px] bg-[#1e1e1e]/40 rounded-lg flex-1">
          <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-[35px] h-[35px] bg-white rounded-md"></div>
              <div className="flex flex-col">
                <h2 className="text-[12px]">Perfect</h2>
                <h3 className="text-[10px] text-white/70">
                  Ed Sheeran - Divide
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-[10px]">
              <h3 className="text-[12px]">3:31</h3>
              <img
                src={heartIcon}
                alt="heart"
                className="hover:cursor-pointer"
              />
              <img src={moreIcon} alt="more" className="hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[15px]">
          <img
            src={commentIcon}
            alt="comment"
            className="hover:cursor-pointer"
          />

          <img src={menuIcon} alt="menu" className="hover:cursor-pointer" />

          <img
            src={speakerIcon}
            alt="speaker"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayBox;
