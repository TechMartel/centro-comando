import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [apiMessage, setApiMessage] = useState('Cargando mensaje...');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Vite expone las variables de entorno en el objeto especial `import.meta.env`.
    // En desarrollo, `import.meta.env.VITE_API_URL` no existirá, por lo que se usará la URL local.
    // Al construir para producción, Vite reemplazará esto con el valor de tu archivo `.env.production`.
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/';

    axios.get(apiUrl)
      .then(response => {
        setApiMessage(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError("Error al conectar con la API");
      });
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez, al montar el componente.


  return (
    <>
      <h1>Centro de Comando</h1>
      <div className="card">
        <h2>Mensaje desde el Backend:</h2>
        <p>
          {error ? error : apiMessage}
        </p>
      </div>
    </>
  )
}

export default App