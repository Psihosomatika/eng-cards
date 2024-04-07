import React, { useState } from 'react';
import styles from './NewWord.module.css';

const NewWord = ({ onAddWord }) => {
  const [newWord, setNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
    tag: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWord(newWord);
    setNewWord({
      english: '',
      transcription: '',
      russian: '',
      tags: ''
    });
  };

  return (
    <div className={styles.NewWord}>
      <h2>Добавить новое слово</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="english"
          value={newWord.english}
          onChange={handleChange}
          placeholder="слово на англ.яз"
        />
        <input
          type="text"
          name="transcription"
          value={newWord.transcription}
          onChange={handleChange}
          placeholder="транскрипция"
        />
        <input
          type="text"
          name="russian"
          value={newWord.russian}
          onChange={handleChange}
          placeholder="перевод"
        />
        <input
          type="text"
          name="tag"
          value={newWord.tag}
          onChange={handleChange}
          placeholder="тег"
        />
        <button type="submit" className={styles.button}>Добавить</button>
      </form>
    </div>
  );
};

export default NewWord;
