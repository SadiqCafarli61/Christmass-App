import React, { useState } from 'react'

const countries = [
   {id: 1, name: 'Russia', price: "$150"},
   {id: 2, name: 'China,', price: "$100", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702020394/country2_tys85r.jpg"},
   {id: 3, name: "Switzerland", price: "$250", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702047166/country3_uznxix.jpg"},
   {id: 4, name: "Germany", price: "$500"},
   {id: 5, name: "USA", price: "$1000", url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702018322/country1_he1fn1.jpg"},
   {id: 6, name: "Canada", price: "$450"},
   {id: 7, name: "Australia", price: "$300"}
]

const data  = countries.sort((a,b) => {
  return a.price.localeCompare(b.price)
})
console.log(data)


const ExploreSeasons = () => {

    const [country, setCountry] = useState("")
  return (
    <div className='  mt-24 d-flex bg-cover bg-fixed  items-center justify-center flex-column  explore-world'>
 <div className="explore">
    <h1 className='text-center text-white font-bold italic text-4xl'>Explore the World</h1>

    <h6 className='text-center font-bold text-white italic pt-6 text-2xl'>Free Company for travel countries</h6>
 </div>

 <div className=" d-grid  gric-constructor(props) {
   super(props);
   
 }
  mt-16 searching-countries">
    <form >
      <label className='text-white text-2xl text-center' htmlFor="">Select Country</label>
      <br />
     <select name="country" 
      value={country}
      className='  bg-transparent shadow-none'
      onChange={(e) =>setCountry(e.target.value)}
     id="country">
      <option>USA</option>
    {
      data.map(country => (
         <>
         <option key={country._id} value={country.name} >{country.name}</option>
         </>
      ))
    }
     </select>
    </form>
    
 </div>
 <div className="  carts-countries">
      {
         countries.filter((ctr) =>ctr.name === country)
         .map((ctr) => (
            <>
            <div className="cart" key={ctr.id}>
   <div className="cart__top">
      <img src={ctr.url} alt="" />
   </div>
   <div className=" text-center pt-2 cart__bottom">
      <h5 className='text-white text-2xl font-bold'>{ctr.name}</h5>
      <p className='text-white font-semibold italic text-xl'>{ctr.price}</p>
      <button className='btn btn-outline-light  w-6/12  mb-2'>Apply! </button>
   </div>
            </div>
            </>
         ))
      }
    </div>
    </div>
  )
}

export default ExploreSeasons