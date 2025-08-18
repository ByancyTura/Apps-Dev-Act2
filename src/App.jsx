import React, { useState } from 'react'
import ProductCard from './component/ProductCard';
import Ads from './component/ads';
import Sidebar from './component/sidebar';

function App() {

  const [Search, setSearch] = useState("");
  
  const product = [
    {
      id: 1,
      image: "./1.jpg",
      name: "Hawk",
      price: "₱999.00",
      description: " known for their durability, quality craftsmanship, and unique designs, often incorporating features like anti-microbial protection and weather resistance.",
    },
    {
      id: 2,
      image: "./2.jpg",
      name: "Habagat",
      price: "₱1540.00",
      description: "A main compartment with a bladder pouch and a hydration port a secondary compartment for necessities and a tertiary compartment with compression straps for additional cargo such as jackets or helmets make the Dihedral a trusty companion in school, in the office, or outdoors."
    },
    {
      id: 3,
      image: "./3.jpg",
      name: "Jansport",
      price: "₱2990.00",
      description: "One large main compartment Side water bottle pocket Internal padded sleeve fits 15 inch laptop 600 Denier Polyester Iconic straight-cut, padded shoulder straps Front utility pocket with organizer Fully padded back panel Web haul handle Cord zipper pulls"
    },
    {
      id: 4,
      image: "./4.jpg",
      name: "Champion",
      price: "₱1100.57",
      description: "Front zip pocket, Internal organizer, Side water bottle pocket, Slip laptop sleeve, Padded strap and back."
    },
    {
      id: 5,
      image: "./5.jpg",
      name: "Reebok",
      price: "₱600.00",
      description: "Constructed with high-quality, weather-resistant materials, this backpack offers reliability and protection for your belongings against the elements."
    },
    {
      id: 6,
      image: "./6.jpg",
      name: "Converse",
      price: "₱1500.00",
      description: "Featuring an easy-access back laptop sleeve, two side water bottle pockets, and two front pockets—you'll keep it all within reach."
    }
  ];

  const prodData = product.filter((prod) => {
    return prod.name.toLowerCase().includes(Search.toLocaleLowerCase()) || prod.price.toLowerCase().includes(Search.toLocaleLowerCase())
  })


  return (
    <div className='w-auto h-auto flex items-center justify-center'>
      <div className='absolute left-15 top-50 fixed'>
            <Sidebar Search={Search} setSearch={setSearch}/>
          </div>
      <div className='flex flex-wrap gap-8 w-1/2 justify-center p-0 m-10'>
        {prodData.map((proditem) => (
          <ProductCard key={proditem.id} image={proditem.image} name={proditem.name} price={proditem.price} description={proditem.description} onBuy={() => console.log(`Thank you for buying: ${product.name}`)} />
        ))}
      </div>
          <div className='absolute right-5 fixed top-10'>
            <Ads/>
          </div>
          
    </div>

  )
}

export default App
