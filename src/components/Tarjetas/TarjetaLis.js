
import React from 'react';
import { db }  from './PastCard';


function tarjetaList  () {
  return (
    <div className="flex flex-row justify-around w-full overflow-hidden border-2 border-sky-500 items-around h-96 bg-yellow min-w-xs hover:shadow-lg">
      {db.map((tarjetadb) => (
        <div
          key={tarjetadb.id}
          className="w-32 h-32 border-2"
        >
          
            <div className="border-2 border-sky-500 ">
              <img src={tarjetadb.imagen} alt="Pastas" />
              <h2 className="mb-4 font-extrabold text-violet-950">
                {tarjetadb.nombre}
              </h2>
              <p className="mb-4 font-medium text-violet-600">
                {tarjetadb.sabor}
              </p>
              <p className="mb-4 font-bold text-violet-600">
                {tarjetadb.precio}
              </p>
            </div>
          </div>

      ))}
    </div>
  );
}
export default tarjetaList;
