import Header from './components/Header';
import PlayerChoiceDisplay from './components/PlayerChoiceDisplay';
import RoundPlayedDisplayBoard from './components/RoundPlayedDisplayBoard';
import Score from './components/Score';
import UserChoice from './components/UserChoice';

function App() {
  return (
    <div className="App">
      <Header />
      <Score />
      <PlayerChoiceDisplay />
      <RoundPlayedDisplayBoard />
      <UserChoice />
    </div>
  );
}

export default App;
