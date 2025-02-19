import Nav from "./components/Nav";
import searchIcon from "./assets/mynaui_search.svg";
import avatar from "./assets/Avatar Image.svg";

function App() {
  return (
    <main className="relative w-screen h-screen">
      <div className="absolute z-0 w-screen h-screen bg-[#1e1e1e]/60" />
      <div className="flex flex-col space-y-3 items-center justify-center w-screen h-screen">
        <Nav />
        <div className="flex flex-col mx-auto w-[55%] h-[65%] rounded-[35px] overflow-visible z-10 relative">
          <div
            className="w-full h-[45%] rounded-t-[35px] bg-gradient-to-b from-[#999999]/80 to-[#737373]
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
              className=" space-x-2 bottom-0 flex flex-row z-50
            overflow-x-auto max-w-full h-full items-center justify-center scrollbar-hide"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <div
                  className="min-w-[105px] h-[105px] rounded-lg transform 
                 hover:translate-y-[-15px] transition duration-300 bg-white"
                ></div>
              ))}
            </div>
          </div>

          <div
            className="flex-1 bg-gradient-to-b from-[#1e1e1e]/20
        to-[#1e1e1e]/40 backdrop-blur-[30px] rounded-b-[35px]
        border-l border-l-white/40 border-b border-b-[#999999]/50 border-r
         border-r-[#999999]/50"
          >
            1
          </div>
          <div className="absolute bottom-0 left-[50%] right-[50%]">2</div>
        </div>
      </div>
    </main>
  );
}

export default App;
