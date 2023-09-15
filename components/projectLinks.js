export default function Buttons(props){
    return(
        <div className="flex justify-between w-64 mt-5">
            <a href={props.github}  target="blank"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800">Github</button></a>
            <a href={props.demo} target="blank"><button className="border-2 border-black rounded-md p-2 hover:bg-zinc-300 hover:text-slate-800">Demo</button></a>
        </div>
    )
}