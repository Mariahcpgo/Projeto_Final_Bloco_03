
import './Home.css';


function Home() {
    return (
        <>
        <div className="flex justify-center py-4 bg-gray-200">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-6 items-center justify-center">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Seu bem-estar é a nossa prioridade</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-gradient-to-l from-red-500 to-yellow-500 text-white py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://ik.imagekit.io/4kqnwi1lux/Generation/HheNdw7.png?updatedAt=1716987976609" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;