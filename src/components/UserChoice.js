import { useContext } from 'react';
import { Store, ComputerChoice } from '../Store';

export default function UserChoice() {
  const { setUserCh } = useContext(Store);
  const { setComputerCh } = useContext(ComputerChoice);
  const handleClick = (e) => {
    setUserCh(e.target.id);
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
      setComputerCh('rock');
    } else if (randomChoice === 2) {
      setComputerCh('scissors');
    } else {
      setComputerCh('paper');
    }
  };

  return (
    <div className="user-choice">
      <div className="user-choice-buttons">
        <div className="rock">
          <img
            src="./images/rock.png"
            onClick={handleClick}
            id="rock"
            alt="rock"
          />
        </div>
        <div className="scissors">
          <img
            src="./images/scissors.png"
            onClick={handleClick}
            id="scissors"
            alt="scissors"
          />
        </div>
        <div className="paper">
          <img
            src="./images/paper.png"
            onClick={handleClick}
            id="paper"
            alt="paper"
          />
        </div>
      </div>
      <h2>Make Your Move</h2>
    </div>
  );
}
