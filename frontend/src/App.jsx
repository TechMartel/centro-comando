import { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Importamos Axios
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // 2. Usamos useState para crear una "variable de estado"
  //    'apiMessage' guardará el mensaje de la API.
  //    Inicialmente, está vacío.
  const [apiMessage, setApiMessage] = useState('');

  // 3. Usamos useEffect para ejecutar código cuando el componente se carga por primera vez.
  //    El array vacío `[]` al final asegura que solo se ejecute una vez.
  useEffect(() => {
    // Definimos la URL de nuestro backend
    const apiUrl = 'http://127.0.0.1:8000/';

    // 4. Usamos Axios para hacer una petición GET a nuestra API
    axios.get(apiUrl)
      .then(response => {
        // Si la petición es exitosa, actualizamos el estado con el mensaje recibido
        setApiMessage(response.data.message);
      })
      .catch(error => {
        // Si hay un error (ej. CORS bloqueado), lo mostramos en la consola
        console.error('¡Hubo un error al llamar a la API!', error);
        setApiMessage('Error al conectar con la API');
      });
  }, []); // El array vacío significa "ejecutar solo una vez al montar"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* 5. Mostramos el mensaje de la API en la pantalla */}
        <h2>Mensaje desde el Backend:</h2>
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          {apiMessage || "Cargando mensaje..."}
        </p>
      </div>
    </>
  );
}

export default App;