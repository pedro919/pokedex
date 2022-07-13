import { Power } from './PowerComponent';

type CardProps = {
    name: string
    number: string
    powers: Array<string>
    imgSource: string
  }
  const colours = {
    "grass" : ["#4ade80"],
    "poison" : ["#818cf8"],
    "fire" : ["#f87171"],
    "water" : ["#93c5fd"],
    "bug" : ["#166534"],
    "normal" : ["#6b7280"],
    "electric" : ["#facc15"],
    "fairy" : ["#f9a8d4"],
    "fighting" : ["#f97316"],
    "psychic": ["#db2777"],
    "rock" : ["#a8a29e"],
    "steel" : ["#4b5563"],
    "ice" : ["#3b82f6"],
    "ghost" : ["#4338ca"],
    "dark" : ["gray-800"],
    "flying": ["#60a5fa", "#9ca3af"],
    "dragon": ["#2563eb", "#ef4444"],
    "ground": ["#facc15", "#a8a29e"],
}



  export const Card = (props: CardProps) => {
    const powers:Array<string> = []
    const power1 = props.powers[0]["type"]["name"]
    powers.push(power1)
    if (props.powers.length === 2){
        const power2 = props.powers[1]["type"]["name"]
        powers.push(power2)}
    
    return (
        <div>
            <div className=" bg-gray-200 flex flex-row items-center justify-center">
                <img src={props.imgSource} className=" h-52" alt={props.name}/>
            </div>
            <p className="text-gray-500 font-bold text-sm">N.°{props.number}</p>
            <h2 className="text-gray-800 font-medium">{props.name}</h2>
            <div className="mt-2 flex flex-row justify-start gap-x-2">
                {powers.map(power => (
                    <Power name={power} key={power} colours={colours[power]}/>
                ))}
            </div>
        </div>
      );
  }