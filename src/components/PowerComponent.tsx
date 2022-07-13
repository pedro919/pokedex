type PowerProps = {
    name: string
  }

  const colours = {
    "grass" : "#4ade80",
    "poison" : "#818cf8",
    "fire" : "#f87171",
    "water" : "#93c5fd",
    "bug" : "#166534",
    "normal" : "#6b7280",
    "electric" : "#facc15",
    "fairy" : "#f9a8d4",
    "fighting" : "#f97316",
    "psychic": "#db2777",
    "rock" : "#a8a29e",
    "steel" : "#4b5563",
    "ice" : "#3b82f6",
    "ghost" : "#4338ca",
    "dark" : "gray-800",


}

const twoColours = {
    "flying": ["#60a5fa", "#9ca3af"],
    "dragon": ["#2563eb", "#ef4444"],
    "ground": ["#facc15", "#a8a29e"],
}
  export const Power = (props: PowerProps) => {
    if (props.name in colours){
        return ( <div className="h-6 w-28 rounded-md flex flex-row items-center justify-center text-xs text-white" style={{backgroundColor: colours[props.name as keyof typeof colours]}}>      
                        {props.name} 
                </div> );
        }
    else if (props.name in twoColours){
        return (<div className={"h-6 w-28 rounded-md text-xs relative z-0 text-white"}>
                    <div className="w-full h-3 rounded-t-md" style={{backgroundColor: twoColours[props.name as keyof typeof twoColours][0]}}></div>
                    <div className="w-full h-3 rounded-b-md" style={{backgroundColor: twoColours[props.name as keyof typeof twoColours][1]}}></div>
                    <div className="absolute inset-0 flex justify-center items-center z-10">    
                        {props.name}
                    </div>
                </div>)

        }
    
    else {
        return (<h1> </h1>)
    }
  }