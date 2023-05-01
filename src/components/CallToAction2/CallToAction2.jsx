import React from 'react';

const CallToAction2 = () => {
  return (
    <div className="px-4 py-12 bg-yellow sm:px-6 lg:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-red ">¡Haz tu pedido ahora!</h2>
          <p className="mb-4 text-lg font-bold text-violet">No te pierdas la oportunidad de disfrutar de nuestras deliciosas pastas frescas.</p>
          <div className="flex justify-center">
            <button className="w-full px-4 py-2 font-bold text-white rounded-full bg-violet hover:violet-700 md:w-auto">
              Hacer pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CallToAction2;