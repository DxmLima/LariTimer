
import Timer from './Timer'

function Hero() {
  return (
    <div className='bg-black'>
        
        <h1 className='text-white text-5xl font-bold p-24'> Em Breve</h1>
        <h2 className='text-white text-3xl  font-light pl-24'>O Tempo está correndo, em breve confira uma <br /> mensagem especial para uma pessoa mais que <br /> especial !</h2>


        <Timer />

     
    </div>
  )
}

export default Hero

