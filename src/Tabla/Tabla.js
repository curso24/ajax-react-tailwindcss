import FilaTabla from'./FilaTabla'
function Tabla({  platos}) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Plato</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
            <th scope="col">Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {platos.map((plato, index) => (
          <FilaTabla
           key={plato.platoID} 
           plato={plato}
           index={index}
            />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
