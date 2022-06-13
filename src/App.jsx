import React from 'react';
import fetchData from './services/api';
import Card from './components/Card';
function App() {

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log (fetchData('fortaleza'));
      
    }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit = { handleSubmit }>
        <input 
        type="text" 
        placeholder='cidade' 
        className='p-3 rounded-lg outline-none'
        />
        <button 
        type="submit"
        className='bg-blue-600 p-3  rounded-lg ml-3 text-white font-bold'
        >Pesquisar</button>
      </form>

      <Card />

    </div>
  )
}
  


export default App;
