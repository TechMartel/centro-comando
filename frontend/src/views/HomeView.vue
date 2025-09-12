<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const apiMessage = ref('Cargando mensaje...')
const error = ref(null)

// Función para obtener datos de la API
const fetchApiData = async () => {
  try {
    // En Vue con Vite, las variables de entorno se acceden con import.meta.env
    const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/'
    
    const response = await axios.get(apiUrl)
    apiMessage.value = response.data.message
  } catch (err) {
    console.error("Error fetching data: ", err)
    error.value = "Error al conectar con la API"
  }
}

onMounted(() => {
  fetchApiData()
})
</script>

<template>
  <main>
    <h1>Centro de Comando</h1>
    <div class="card">
      <h2>Mensaje desde el Backend:</h2>
      <p>
        {{ error || apiMessage }}
      </p>
    </div>
  </main>
</template>

<style scoped>
/* Puedes agregar aquí los estilos del App.css original */
.card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem 0;
}

h1 {
  text-align: center;
  color: #333;
}

h2 {
  color: #555;
}

p {
  font-size: 1.1rem;
}
</style>