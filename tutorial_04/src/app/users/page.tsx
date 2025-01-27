export default async function Users() {

    type User = {
        id: number;
        name: string;
        username: string;
        email: string;
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        next:{
            revalidate:10,
        }
    });
    const users:User[] = await response.json();
    // console.log(users);

    return (
        <>
            {/* <h1>Users Page</h1> */}
            <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-wrap gap-4 p-4">
            {
                users.map((user)=>{
                    return (
                        <div className="bg-gray-600 text-white p-4 w-[40%] rounded-lg" key={user.id}>
                            <h1>{user.id}</h1>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
            </div>
        </>
    )

}
