import Accordion from "./components/Accordion/Accordion";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Accordion header="Accordion 1">
        <div>Content for Accordion 1</div>
      </Accordion>
      <Accordion header="Accordion 2">
        <div>Content for Accordion 2</div>
      </Accordion>
      <Accordion header="Accordion 3">
        <div>Content for Accordion 3</div>
      </Accordion>
      <ThemeToggle />
    </ThemeProvider>
    </>
  );
};

export default App;