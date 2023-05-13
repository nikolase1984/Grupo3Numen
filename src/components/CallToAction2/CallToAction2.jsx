import React from 'react';

const CallToAction2 = () => {
  return (
    <div className="w-full px-4 py-12 my-20 bg-yellow sm:px-6 lg:py-16 lg:px-8 md:my-40">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-red ">¡Haz tu pedido ahora!</h2>
          <p className="mb-4 text-lg font-bold text-violet">No te pierdas la oportunidad de disfrutar de nuestras deliciosas pastas frescas</p>
          <div className="flex justify-center">
            <button className="w-full px-4 py-2 font-bold text-white rounded-md bg-violet md:hover:scale-105 hover:transition md:w-auto">
              Hacer pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CallToAction2;