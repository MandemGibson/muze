const Fader = ({ fixedTo }: { fixedTo: string }) => {
  return (
    <div
      className={`h-[70%] fixed ${fixedTo}-0 w-10 z-10 rounded-full blur-[10px] bg-[#666]`}
    ></div>
  );
};

export default Fader;
