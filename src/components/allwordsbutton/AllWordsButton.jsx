import React, { useState, useEffect } from 'react';
import styles from './AllWordsButton.module.css'; 

const WordList = () => {
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetchWordList();
  }, []);

  const fetchWordList = async () => {
    try {
      const response = await fetch('https://itgirlschool.justmakeit.ru/api/words');
      if (!response.ok) {
        throw new Error('Failed to fetch word list');
      }
      const data = await response.json();
      setWordList(data);
    } catch (error) {
      console.error('Error fetching word list:', error);
    }
  };

  return (
    <div className={styles.AddWordBox}>
      <h2 className={styles.AddWordHeader}>Список слов</h2>
      <table className={styles.wordListTable}>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Тег</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word, index) => (
            <tr key={index}>
              <td>{word.english}</td>
              <td>{word.transcription}</td>
              <td>{word.russian}</td>
              <td>{word.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;

