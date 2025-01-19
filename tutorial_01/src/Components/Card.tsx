type Props = {
    children:React.ReactNode,
}

export default function Card(props:Props) {
  return (
    <div className="p-[100px] m-[10px] border-2 border-blue-300 flex flex-col justify-center items-center">
        {props.children}
    </div>
  )
}