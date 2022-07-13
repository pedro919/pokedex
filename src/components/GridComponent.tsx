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
        }
        setPokemon(pokemonsList)
        }

    useEffect(() => {
        console.log('Entrando al use effect')
        if (lastBrought === 0){
            loadMorePokemonsHandler().then(res => {console.log('Todo listo')})
        }      
        console.log('Saliendo del use effect')
    })

    const loadMorePokemonsHandler = async() => {
        console.log('Entrando al handler')
        setLoading(true)
        await bring12PokemonsFromApi('normal')        
        console.log(pokemons.length)        
        console.log('Saliendo del handler')
        setLastBrought(lastBrought+12)
        setLoading(false)
    }

    if (!loading) {

    return (
                <div className="">
                    <span>{pokemons.length}</span>
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
