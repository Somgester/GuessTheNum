import { useState } from 'react';

const NumberGuessGame = () => {
  const [guess, setGuess] = useState('');
  const [targetNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('black');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
    // setBackgroundColor('linear-gradient(to bottom, #ff7f50, #1e90ff)');
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess);
  
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else if (userGuess === targetNumber) {
      setMessage(`Congratulations! You've guessed the correct number.`);
      setBackgroundColor('green');
      setTimeout(() => setBackgroundColor('black'), 3000);
    } else {
      setMessage(userGuess < targetNumber ? 'Try a higher number.' : 'Try a lower number.');
      setBackgroundColor('red');
      setTimeout(() => setBackgroundColor('black'), 2000);
    }
    setGuess('');
  };

  const styles = {
    container: {
      display: 'flex',
      border: '1px solid black',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: backgroundColor,
      backgroundImage: `linear-gradient(to bottom, #ff7f50, #1e90ff)`,
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
      filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2)', 
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    input: {
      margin: '5px 0',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      backgroundColor: '#f5f5f5',
      color: 'black',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <h1>NumGuess Game</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
        style={styles.input}
      />
      <button onClick={handleGuess} style={styles.button}>
        Guess
      </button>
    </div>
  );
};

export default NumberGuessGame;
