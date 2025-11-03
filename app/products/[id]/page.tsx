export default async function page({ 
    params 
} : {
    params: Promise<{id: string}>
}) {
    let {id} = await params
    return (
        <div>
            Product id is {id}
        </div>
    )
}