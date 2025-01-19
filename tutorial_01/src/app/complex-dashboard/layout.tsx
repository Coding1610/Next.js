type Props = {
    children:React.ReactNode,
    user:React.ReactNode,
    revenue:React.ReactNode,
    notification:React.ReactNode,
    login:React.ReactNode,
}

export default function page(props:Props){

    const isLoggedIn = false;

  return isLoggedIn ? (
    <>
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            {props.children}
            <div className="flex">
                <div className="flex flex-col justify-center items-center">
                    {props.user}
                    {props.revenue}
                </div>
                <div className="flex flex-1 justify-center items-center">
                    {props.notification}
                </div>
            </div>
        </div>
    </>
  )
  : (
    <>
    {props.login}
    </>
    );
}