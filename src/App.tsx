import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((currentCount) => currentCount++);
  };

  return (
    <>
      <h1 className="c-headline-1">Sommer '23</h1>
      <h2 className="c-headline-2">React kurs</h2>
      <button>Knappen er klikket {count} ganger</button>
    </>
  );
}

export default App;
