
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
    const data = new Date().getFullYear()

  return (
    <>
        <div className="flex justify-center text-gray-600">
          <div className="container flex flex-col items-center py-4">
            <p className='text-1xl font-semibold'>Farmácia - Generation | Copyright: Mariah Garcia &copy; {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-4 text-black'>
              <LinkedinLogo size={35} weight='bold' />
              <InstagramLogo size={35} weight='bold' />
              <FacebookLogo size={35} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer