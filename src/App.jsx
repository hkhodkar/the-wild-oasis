import GlobalStyled from "./styles/Global-Style";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";

function App() {
  return (
    <>
      <GlobalStyled />
      <div>
        <Heading>Hello world</Heading>
        <Button>
          Check In
        </Button>
        <Button variations="secondary" size="small">
          Check Out
        </Button>
        <Input placeholder="Number of guests" />
        <Input placeholder="Number of guests" />
      </div>
    </>
  );
}

export default App;
