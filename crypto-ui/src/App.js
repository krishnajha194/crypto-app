import React, { useState } from 'react';
import axios from 'axios';
import logo from './assets/honeywell.png';

function App() {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const api = "http://localhost:8080/api/";

  const handleEncrypt = async () => {
    try {
      const res = await axios.post(`${api}encrypt`, {
        username,
        text,
      });
      setCipherText(res.data.text);
    } catch (err) {
      alert('Encryption failed');
    }
  };
  
  const handleDecrypt = async () => {
    try {
      const res = await axios.post(`${api}decrypt`, {
        username,
        text: cipherText,
      });
      setDecryptedText(res.data.text);
    } catch (err) {
      alert('Decryption failed');
    }
  };
  

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <img src={logo} alt="Honeywell Logo" style={styles.logo} />
      </header>

      <div style={styles.formContainer}>
        <label style={styles.label}>Username (used as salt):</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Plain Text:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          style={styles.textarea}
        />

        <div style={styles.buttonGroup}>
          <button onClick={handleEncrypt} style={styles.encryptBtn}>
            Encrypt
          </button>
          <button onClick={handleDecrypt} style={styles.decryptBtn}>
            Decrypt
          </button>
        </div>
      </div>

      {cipherText && (
        <div style={styles.resultBox}>
          <strong>Encrypted Text:</strong>
          <p>{cipherText}</p>
        </div>
      )}
      {decryptedText && (
        <div style={styles.resultBox}>
          <strong>Decrypted Text:</strong>
          <p>{decryptedText}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: 600,
    margin: '40px auto',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  logo: {
    maxWidth: 150,
    height: 'auto',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 14,
  },
  textarea: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 14,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  encryptBtn: {
    flex: 1,
    marginRight: 10,
    padding: 12,
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
  decryptBtn: {
    flex: 1,
    marginLeft: 10,
    padding: 12,
    backgroundColor: '#28a745',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    wordBreak: 'break-word',
  },
};

export default App;
