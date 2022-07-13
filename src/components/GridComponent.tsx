import {Card} from './CardComponent';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

type Pokemon = {
    name: string
    number: string
    powers: Array<string>
    imgSource: string
  }

export default function Grid () {

    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemon] = useState<Array<Pokemon>>([]);
    const [lastBrought, setLastBrought] = useState<number>(0)

    const bringPokemonFromApi = (id: number, pokemonsList: Array<Pokemon>) => {        
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.json())
        .then(data => pokemonsList.push( { name: data["name"], number:data["id"].toString(), powers: data["types"], imgSource: data["sprites"]["other"]["dream_world"]["front_default"] } ));
        return
    }

    const bring12PokemonsFromApi = async(direction: string) => {
        const pokemonsList = pokemons
        if (direction === "normal"){
            for (let i = lastBrought+1; i <= lastBrought + 12; i++){
                await bringPokemonFromApi(i, pokemonsList);
            }
            setPokemon(pokemonsList)
        }
        
    }

    useEffect(() => {
        if (lastBrought === 0){
            loadMorePokemonsHandler()
        }
    })

    const loadMorePokemonsHandler = async() => {
        setLoading(true)
        await bring12PokemonsFromApi('normal')
        setLastBrought(lastBrought+12)
        setLoading(false)
    }

    if (!loading) {

    return (
        <div>
            <nav className="mt-10 mb-10">
                <div className="flex flex-col items-center lg:flex-row lg:justify-between 2xl:mr-10 gap-y-8 gap-x-10">
                    <button className="bg-[#2596be] h-12 w-80 text-white rounded-md flex flex-row items-center justify-center"> <Icon icon="ic:sharp-loop" className="mr-3" />¡Sorpréndeme!</button>
                    <div className="h-12 w-80 bg-[#383434] flex flex-row items-center justify-start rounded-md">
                        <select className="block w-full h-full rounded-lg bg-transparent text-white hover:bg-red">
                            <option className="text-gray-900"> Ordenar por...</option>
                            <option className="text-gray-900">Número inferior</option>
                            <option className="text-gray-900">Número superior</option>
                            <option className="text-gray-900">A-Z</option>
                            <option className="text-gray-900">Z-A</option>
                        </select>
                    </div>
                </div>
            </nav>                    
            {pokemons &&
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10 justify-center items-stretch">
                {pokemons.map(pokemon => (
                    <Card key={pokemon.number} name={pokemon.name} number={pokemon.number} powers={pokemon.powers} imgSource={pokemon.imgSource}/>
                ))}
            </div>}
            <div className="flex flex-row justify-center mt-14 mb-14">
                <button className="bg-[#2596be] text-white h-12 w-72 rounded-md flex flex-row items-center justify-center" onClick={loadMorePokemonsHandler} >Cargar más Pokémon <Icon icon="mdi:pokeball" className="ml-2"/></button>
            </div>
        </div>
                
        );
    }

    else {return (<div>CARGANDO</div>)}
  }
