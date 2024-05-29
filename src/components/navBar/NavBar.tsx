
function Navbar() {
 
  

  return (
    <>
     <div className='w-full flex justify-center py-2 px-3 text-white bg-gradient-to-l from-red-500 to-yellow-500'>
          <div className="container flex justify-between items-center text-lg">
          <div><img src="https://ik.imagekit.io/4kqnwi1lux/Generation/a0zcXqK.png?updatedAt=1716987976570" 
                           alt="Logo" className="w-1/2 object-cover"/></div>
            <div className='flex gap-4 font-semibold'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar