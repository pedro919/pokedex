type PowerProps = {
    name: string
    colours: Array<string>
  }

  export const Power = (props: PowerProps) => {
    if (props.colours.length === 1){
        return ( <div className="h-6 w-28 rounded-md flex flex-row items-center justify-center text-xs text-white" style={{backgroundColor: props.colours[0]}}>      
                        {props.name} 
                </div> );
        }
    else if (props.colours.length > 1){
        return (<div className={"h-6 w-28 rounded-md text-xs relative z-0 text-white"}>
                    <div className="w-full h-3 rounded-t-md" style={{backgroundColor: props.colours[0]}}></div>
                    <div className="w-full h-3 rounded-b-md" style={{backgroundColor: props.colours[1]}}></div>
                    <div className="absolute inset-0 flex justify-center items-center z-10">    
                        {props.name}
                    </div>
                </div>)

        }
    
    else {
        return (<h1> </h1>)
    }
  }