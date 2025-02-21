import Nav from "./components/Nav";
import PlayBox from "./components/PlayBox";

function App() {
  return (
    <main className="relative w-screen h-screen">
      <div className="absolute z-0 w-screen h-screen bg-[#1e1e1e]/60" />
      <div className="flex flex-col space-y-3 items-center justify-center w-screen h-screen">
        <Nav />
        <PlayBox />
      </div>
    </main>
  );
}

export default App;
