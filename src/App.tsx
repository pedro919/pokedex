import './App.css';
import Grid from './components/GridComponent';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="sm:mx-16 md:mx-24 lg:mx-52 font-semibold">
      <nav className="mt-10 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between 2xl:mr-10 gap-y-8 gap-x-10">
          <button className="bg-[#2596be] h-12 w-80 text-white rounded-md flex flex-row items-center justify-center"> <Icon icon="ic:sharp-loop" className="mr-3" />¡Sorpréndeme!</button>
          <div className="h-12 w-80 bg-[#383434] flex flex-row items-center justify-start rounded-md">
            <select className="block w-full h-full rounded-lg bg-transparent text-white hover:bg-red">
               <option className="text-gray-900">
                Ordenar por...
              </option>
              <option className="text-gray-900">Número inferior</option>
              <option className="text-gray-900">Número superior</option>
              <option className="text-gray-900">A-Z</option>
              <option className="text-gray-900">Z-A</option>
            </select>
          </div>
        </div>
      </nav>
      <Grid/>
    </div>
  );
}

export default App;
