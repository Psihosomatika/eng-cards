// import React, { useState, useEffect } from 'react';
// import styles from './Main.module.css'; 

// const Main = ({ onCheckButton, onNextCard }) => {
//   const [word, setWord] = useState(null);
//   const [showTranslation, setShowTranslation] = useState(false);

//   useEffect(() => {
//     fetchWord();
//   }, []);

//   const fetchWord = async () => {
//     try {
//       const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
//       const data = await response.json();
//       const randomIndex = Math.floor(Math.random() * data.length);
//       setWord(data[randomIndex]);
//     } catch (error) {
//       console.error('Error fetching word:', error);
//     }
//   };

//   const handleCheckButton = () => {
//     setShowTranslation(true);
//   };

//   const handleNextCard = () => {
//     setShowTranslation(false);
//     fetchWord();
//   };

//   return (
//     <div className={styles.card}>
//       <h2>Карточка с новым словом</h2>
//       {word && (
//         <div>
//           <h2>{word.english}</h2>
//           <p>{showTranslation ? word.russian : '???'}</p>
//           <button onClick={handleCheckButton}>Check Translation</button>
//           <button onClick={handleNextCard}>Next Word</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';

const Main = () => {
  const [word, setWord] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setWord(data[randomIndex]);
      setShowTranslation(false); // Скрыть перевод при загрузке нового слова
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.card}>

      {word && (
        <div className={styles.SmallCard}>
                <h2 onClick={fetchWord} className={styles.MainCardHeader}>Карточка с новым словом</h2>
          <h2>{word.english}</h2>
          {word.transcription && <p className={styles.transcription}>{word.transcription}</p>}
          {showTranslation && <h2 className={styles.green}>{word.russian}</h2>}
          {!showTranslation && <button onClick={toggleTranslation}>Показать перевод</button>}
        </div>
      )}
    </div>
  );
};

export default Main;
