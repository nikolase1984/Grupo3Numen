import React from 'react'
import Card from './Card'
import '../stylesheet/CardList.css'



const db = [
    {
    titulo: 'De nuestra cocina a tu casa',
    descripcion: 'Trabajamos con la mejor materia prima del mercado. El mejor equipo de Chefs Internacionales combinan saberes y sabores a la hora de cocinar cada plato.',
    backgroundColor: 'purple'
  },
  {
    titulo: 'La materia prima',
    descripcion: 'los principales ingredientes son harina de trigo, huevos, agua y sal. También pueden incorporar ingredientes adicionales para crear variedades de pasta con sabores y colores diferentes, como espinacas, tomates secos, pimientos, ajo, queso, entre otros.',
    backgroundColor: 'red'
  },
  {
    titulo: 'Pedidos por encargos',
    descripcion: 'el personal de El Tano pastas se esfuerza por cumplir con los plazos de entrega. Se toman las mejores medidas para garantizar que las pastas se mantengan frescas y seguros durante el transporte',
    backgroundColor: 'beige'
  },
  {
    titulo: 'Menu del dia',
    descripcion: 'Se consideran las preferencias y sugerencias de los clientes para crear un menú que satisfaga sus gustos y necesidades.',
    backgroundColor: 'lightbrown'
  }
]

const CardList = () => (
  <section className='card-icon'>
    {db.map(destino => <Card
     destino={destino} />)}
  </section>
)

export default CardList