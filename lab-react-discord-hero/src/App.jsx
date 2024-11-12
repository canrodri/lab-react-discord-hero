import './App.css';
import Button from './components/button/button';
import Text from './components/text/text';
import Img from './components/img/img';
import Heading from './components/text/heading';
import bgImage from "./assets/bg.png";
import logo from "./assets/logo.png";
import menu from "./assets/menu.png"

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Img className="logo" src={logo} alt="discord-logo" width={150} height={45} />
          <Img className="menu" src={menu} alt="menu" width={35} height={40} />
          <div>
            <Heading text="imagine a place where..." />
            <Text text="...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often." />

          </div>
          <div>
            <Img className="bg" src={bgImage} alt="background-photo" width={550} height={350} />
          </div>
        </div>
        <Button type="download" text="Download for Mac" />
        <Button type="discord" text="Open Discord in your browser" />
      </div>

    </>
  );
}

export default App;
