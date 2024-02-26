import { useState, useEffect } from 'react'
import Tabla from './Tabla'
import API from './api'
function App() {
  // hacer llamada API
  // para evitar que se renderice varias veces, se hace en un useEffect

  // inserta una llamada api
  const [categorias, setCategorias] = useState([])
  const [platos, setPlatos] = useState([])
  const [restaurantes, setRestaurantes] = useState([])

  // useEffect (function, [dependencies]). Si no hay dependencias
  // se ejecuta una sola vez

  useEffect(() => {
    fetch(API.CATEGORIES_URL)
      .then((res) => res.json())
      .then((categorias) => setCategorias(categorias))
    fetch(API.DISHES_URL)
      .then((res) => res.json())
      .then((platos) => setPlatos(platos))
    fetch(API.RESTAURANTS_URL)
      .then((res) => res.json())
      .then((restaurantes) => setRestaurantes(restaurantes))
  }, []) //El corchete vacío es para una única llamada a la API

  const datosCargados = Boolean(
    restaurantes.length && platos.length && categorias.length
  )

  return (
    <div>
      <h1>Lista de Restaurantes</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {datosCargados && (
        <Tabla
          restaurantes={restaurantes}
          platos={platos}
          categorias={categorias}
        />
      )}
      {!datosCargados && <p>Cargando datos...</p>}
    </div>
  )
}

export default App
