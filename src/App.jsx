import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css'
import Main from './components/main/Main.jsx';
import NewWord from './components/newword/NewWord.jsx';
import AllWordsButton from './components/allwordsbutton/AllWordsButton';

const App = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handleCheckButton = () => {
    setShowTranslation(true);
  };

  const handleNextCard = () => {
    setShowTranslation(false);
    setCurrentWordIndex(currentWordIndex + 1);
  };

  return (
    <div>
      <Navigation />
      <div><AllWordsButton /></div>
      <Main
        word={words[currentWordIndex]}
        showTranslation={showTranslation}
        onCheckButton={handleCheckButton}
        onNextCard={handleNextCard}
      />
      <NewWord/>
      <Footer />
    </div>
  );
};

export default App;