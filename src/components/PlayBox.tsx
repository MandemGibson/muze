import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from "react";
import searchIcon from "../assets/mynaui_search.svg";
import avatar from "../assets/Avatar Image.svg";
import nextUpIcon from "../assets/majesticons_next-circle.svg";
import heartIcon from "../assets/mdi_heart.svg";
import moreIcon from "../assets/weui_more-filled.svg";
import forwardIcon from "../assets/uiw_forward.svg";
import pauseIcon from "../assets/material-symbols_pause.svg";
import playIcon from "../assets/si_play-fill.svg";
import commentIcon from "../assets/fluent-mdl2_comment-solid.svg";
import menuIcon from "../assets/f7_menu.svg";
import speakerfullIcon from "../assets/subway_sound.png";
import speaker1Icon from "../assets/subway_sound-1.svg";
import speaker2Icon from "../assets/subway_sound-2.svg";
import muteIcon from "../assets/material-symbols_no-sound.svg";
import { albumImages, popular, songs } from "../constants";
import Tooltip from "./Tooltip";
import Modal from "./Modal";

const PlayBox = () => {
  const [volume, setVolume] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [duration, setDuration] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const audioRef = useRef(new Audio(currentSong.audioSrc));

  const getSpeakerIcon = () => {
    if (volume === 0) return muteIcon;
    if (volume <= 33) return speaker2Icon;
    if (volume <= 66) return speaker1Icon;
    return speakerfullIcon;
  };

  const handleOpenModal = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    audioRef.current.src = currentSong.audioSrc;
    audioRef.current.volume = volume / 100;

    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    const setAudioDuration = () => setDuration(audioRef.current.duration);

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener("timeupdate", updateTime);
      audioRef.current.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleSongClick = async (song: (typeof songs)[0]) => {
    await setCurrentSong(song);
    await setIsPlaying(true);

    if (audioRef.current.paused) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col mx-auto max-w-[55%] max-h-[70%] rounded-[35px] z-10 relative responsive-container">
      {/* Top Section */}
      <div className="w-full h-full rounded-t-[35px] bg-gradient-to-b from-[#999999]/80 to-[#737373] backdrop-blur-[10px] shadow-[0_1_4_0_rgba(0,0,0,0.25)] border-t border-t-white/40 border-l border-l-white/50 border-r border-r-white/40 border-b border-b-[#999999]/50 flex flex-col overflow-visible">
        <div className="flex w-full items-center justify-between p-[16px]">
          <div className="group flex items-center bg-[#1e1e1e]/40 shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.25)] rounded-full space-x-[5px] p-[10px] min-w-[300px]">
            <img src={searchIcon} alt="search Icon" className="group-hover:text-white" />
            <input
              type="text"
              placeholder="Search by artist, title or album..."
              className="text-[12px] w-full h-full bg-transparent focus:outline-none placeholder:text-[#fff]/50 items-center text-white"
            />
          </div>
          <Tooltip text="Profile" position="bottom">
            <img src={avatar} alt="avatar" width={40} height={40} className="hover:cursor-pointer" />
          </Tooltip>
        </div>

        <div className="space-x-2 relative flex flex-row overflow-x-auto max-w-full h-full items-center px-2 scrollbar-hide">
          {albumImages.map(({ id, image }) => (
            <div key={id} className="min-w-[105px] h-[105px] rounded-[15px] transform overflow-clip transition duration-300">
              <img src={image} alt="album" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-h-[60%] bg-gradient-to-b from-[#1e1e1e]/20 to-[#1e1e1e]/40 backdrop-blur-[30px] rounded-b-[35px] border-l border-l-white/40 border-b border-b-[#999999]/50 border-r border-r-[#999999]/50 flex flex-row items-center justify-evenly overflow-clip responsive-bottom">
        {/* Left Section - Next Up */}
        <div className="w-full h-full overflow-y-auto scrollbar-hide p-5 pb-10 space-y-2 text-white">
          <div className="flex items-center space-x-[5px]">
            <img src={nextUpIcon} alt="next up" />
            <h3 className="text-[14px]">Next Up</h3>
          </div>
          <div className="space-y-2 overflow-y-auto overflow-hidden">
            {songs.map(({ id, image, duration, artist, album, title, audioSrc }) => (
              <div
                key={id}
                className={`flex flex-row p-1 hover:bg-[#1e1e1e]/10 rounded-md items-center justify-between hover:cursor-pointer ${
                  currentSong.id === id ? "bg-[#1e1e1e]/20" : ""
                } z-20`}
                onClick={() => handleSongClick({ id, image, duration, artist, album, title, audioSrc })}
              >
                <div className="flex flex-1 flex-row space-x-2 items-center">
                  <img src={image} alt={album} className="w-[35px] h-[35px] rounded-md object-cover" />
                  <div className="flex flex-col">
                    <h2 className="text-[12px]">{title}</h2>
                    <h3 className="text-[10px] text-white/70">{artist} - {album}</h3>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-[10px]">
                  <h3 className="text-[12px]">{formatTime(duration)}</h3>
                  <Tooltip text="Add to Favourites">
                    <img src={heartIcon} alt="heart" onClick={handleOpenModal} />
                  </Tooltip>
                  <Tooltip text="More Options">
                    <img src={moreIcon} alt="more" onClick={handleOpenModal} />
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Popular */}
        <div className="w-full h-full overflow-y-auto scrollbar-hide p-5 pb-10 space-y-2 text-white">
          <div className="flex items-center space-x-[5px]">
            <img src={nextUpIcon} alt="next up" />
            <h3 className="text-[14px]">Popular</h3>
          </div>
          {popular.map(({ id, title, artist, album, image }) => (
            <div
              key={id}
              className="flex flex-row p-1 hover:bg-[#1e1e1e]/10 rounded-md items-center justify-between hover:cursor-pointer"
            >
              <div className="flex flex-row space-x-2 items-center">
                <img src={image} alt={album} className="w-[35px] h-[35px] rounded-md object-cover" />
                <div className="flex flex-col">
                  <h2 className="text-[12px]">{title}</h2>
                  <h3 className="text-[10px] text-white/70">{artist} - {album}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player Controls */}
      <div className="absolute -bottom-10 mx-auto flex flex-col items-center bg-gradient-to-b rounded-[10px] border-t border-white/60 from-[#999999]/60 from-0% to-[#999999]/30 to-100% backdrop-blur-[90px] px-[20px] pb-[5px] left-0 right-0 w-[70%] responsive-controls">
        <div className="w-full p-0 m-0">
          <input
            type="range"
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleProgressChange}
            className="w-full h-[2px] bg-gray-600 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #ffffff ${
                (currentTime / duration) * 100
              }%, #4b4b4b ${(currentTime / duration) * 100}%)`,
            }}
          />
        </div>

        <div className="flex items-center space-x-[20px] w-full justify-between responsive-controls-inner">
          <div className="flex items-center space-x-[15px]">
            <Tooltip text="Seek 10s Backward" position="bottom">
              <img src={forwardIcon} alt="forward" className="hover:cursor-pointer" onClick={skipBackward} />
            </Tooltip>
            <Tooltip text={isPlaying ? "Pause" : "Play"} position="bottom">
              <img
                src={isPlaying ? pauseIcon : playIcon}
                alt="pause"
                className="hover:cursor-pointer"
                width={24}
                height={24}
                onClick={togglePlayPause}
              />
            </Tooltip>
            <Tooltip text="Seek 10s Forward" position="bottom">
              <img src={forwardIcon} alt="play" className="rotate-180 hover:cursor-pointer" onClick={skipForward} />
            </Tooltip>
          </div>

          <div className="p-[5px] bg-[#1e1e1e]/40 rounded-lg flex-1">
            <div className="flex flex-row items-center justify-between text-white">
              <div className="flex flex-row space-x-2 items-center">
                <img src={currentSong.image} alt={currentSong.album} className="w-[35px] h-[35px] rounded-md object-cover" />
                <div className="flex flex-col">
                  <h2 className="text-[12px] max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">{currentSong.title}</h2>
                  <h3 className="text-[10px] text-white/70 max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {currentSong.artist} - {currentSong.album}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-[10px]">
                <h3 className="text-[12px]">{formatTime(currentTime)}</h3>
                <img src={heartIcon} alt="heart" className="hover:cursor-pointer" />
                <img src={moreIcon} alt="more" className="hover:cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-[15px]">
            <Tooltip text="Comment" position="bottom">
              <img src={commentIcon} alt="comment" className="hover:cursor-pointer" onClick={handleOpenModal} />
            </Tooltip>
            <Tooltip text="Menu" position="bottom">
              <img src={menuIcon} alt="menu" className="hover:cursor-pointer" onClick={handleOpenModal} />
            </Tooltip>
            <div className="relative group flex items-center">
              <img src={getSpeakerIcon()} alt="speaker" className="hover:cursor-pointer" width={16} height={16} />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center">
                <div className="bg-[#1e1e1e]/80 rounded-md p-2 shadow-lg">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-24 w-[4px] bg-gray-500 rotate-180 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to bottom, #1DA1F2 ${volume}%, #4b4b4b ${volume}%)`,
                      writingMode: "vertical-lr",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default PlayBox;