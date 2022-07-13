import { Power } from './PowerComponent';

type CardProps = {
    name: string
    number: string
    powers: Array<string>
    imgSource: string
  }

  export const Card = (props: CardProps) => {
    const powers:Array<string> = []
    const power1 = props.powers[0]["type"]["name"]
    powers.push(power1)
    if (props.powers.length === 2){
        const power2 = props.powers[1]["type"]["name"]
        powers.push(power2)}
    
    return (
        <div className="sm:max-w-xs sm:max-h-xs">
            <div className="sm:max-w-xs sm:max-h-xs bg-gray-200 flex flex-row items-center justify-center">
                <img src={props.imgSource} className="sm:max-w-xs sm:max-h-xs h-52" alt={props.name}/>
            </div>
            <p className="text-gray-500 font-bold text-sm">N.°{props.number}</p>
            <h2 className="text-gray-800 font-medium">{props.name}</h2>
            <div className="mt-2 flex flex-row justify-start gap-x-2">
                {powers.map(power => (
                    <Power name={power} key={power}/>
                ))}
            </div>
        </div>
      );
  }