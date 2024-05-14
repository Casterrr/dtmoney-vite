import entradasIcon from '../assets/entradas.svg';
import saidasIcon from '../assets/saidas.svg';
import totalIcon from '../assets/total.svg';

export function Summary() {
  return (
    <div className='flex flex-row w-screen -mt-12 justify-center'>
      <div className='bg-white rounded-sm w-80 mx-4 p-8'>
        <header className='flex flex-row justify-between'>
          <p className='text-gray-700'>Entradas</p>
          <img src={entradasIcon} alt="Entradas"></img>
        </header>
        <h1 className='text-3xl font-medium text-gray-700 mt-2'>R$ 6.000,00</h1>
      </div>
      <div className='bg-white rounded-sm w-80 mx-4 p-8'>
        <header className='flex flex-row justify-between'>
          <p className='text-gray-700'>Saídas</p>
          <img src={saidasIcon} alt="Saídas"></img>
        </header>
        <h1 className='text-3xl font-medium text-gray-700 mt-2'>-R$ 11.000,00</h1>
      </div>
      <div className='bg-greenmoney rounded-sm w-80 mx-4 p-8'>
        <header className='flex flex-row justify-between'>
          <p className='text-gray-700'>Total</p>
          <img src={totalIcon} alt="Total"></img>
        </header>
        <h1 className='text-3xl font-medium text-gray-700 mt-2'>-R$ 5.000,00</h1>
      </div>
    </div>
  )
}