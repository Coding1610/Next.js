export default function Docs({params}:{
    params:{
        slug:string[];
    };
}) {

    if( params.slug?.length === 2 ){
        return (
            <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"> Document about {params.slug[0]} and topic is {params.slug[1]}.</div>
        )
    }

    else if( params.slug?.length === 1 ){
        return (
            <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"> Document about {params.slug[0]}.</div>
        )
    }
    return (
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"> Document Page</div>
    )

  }