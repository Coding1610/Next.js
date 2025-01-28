type User = {
    id:number,
    name:string,
}

export default async function MockUser() {

    const response = await fetch("https://679912e3be2191d708b1e4f9.mockapi.io/users/users");
    const result = await response.json();
    console.log(result);

    async function addUser(formData:FormData){
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://679912e3be2191d708b1e4f9.mockapi.io/users/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name})
        });
        const newUser = await res.json();
        console.log(newUser);
    }

    return (
        <>
        <div className="w-[100vw] h-[100vh] bg-yellow-300"> 
        <form action={addUser} >
            <input type="text" name="name" className="p-4 text-black" />
            <button type="submit" className="bg-blue-600 p-4"> add user </button>
        </form>
        {
            result.map((user:User) => {
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            })
        }
        </div>
        </>
    )

} 