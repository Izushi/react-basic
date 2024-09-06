import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import BadCounter from "./components/BadCounter";
import ToggleButton from "./components/ToggleButton";
import './App.css';

function App() {
  return (
    <div>
      <Article
        title={'新・日本一分かりやすいReact入門'}
        content={'importとexportを使いこなそう'}
      />
      <TextInput />
      <Counter />
      <BadCounter />
      <ToggleButton />
    </div>
  );
}

export default App;
