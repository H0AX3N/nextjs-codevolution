import Link from "next/link"

export default async function page({ 
    params 
} : {
    params: Promise<{id: string}>
}) {
    let {id} = await params
    return (
        <div className="flex flex-col">
            Product id is {id}
            <Link href="/">Home</Link>
        </div>
    )
}