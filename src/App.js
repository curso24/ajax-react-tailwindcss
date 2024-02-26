import Tabla from './Tabla'
function App() {
  // hacer llamada API
  // para evitar que se renderice varias veces, se hace en un useEffect

  // inserta una llamada api
  const [categorias, setCategorias] = React.useState([])
  const [platos, setPlatos] = React.useState([])
  const [restaurantes, setRestaurantes] = React.useState([])

  React.useEffect(() => {
    fetch('https://platzi-avo.vercel.app/api/categorias')
      .then((res) => res.json())
      .then((categorias) => setCategorias(categorias))

    fetch('https://platzi-avo.vercel.app/api/platos')
      .then((res) => res.json())
      .then((platos) => setPlatos(platos))

    fetch('https://platzi-avo.vercel.app/api/restaurantes')
      .then((res) => res.json())
      .then((restaurantes) => setRestaurantes(restaurantes))
  }, [])

  return (
    <div>
      <h1>Lista de Restaurantes</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Tabla
        restaurantes={restaurantes}
        platos={platos}
        categorias={categorias}
      />
    </div>
  )
}

export default App
