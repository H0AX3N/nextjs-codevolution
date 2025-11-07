export default async function page({
    params
} : {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;
    if(slug?.length === 2) {
        return <p>Review {slug[0]} for product {slug[1]}</p>
    } else if(slug?.length === 1) {
        <p>Product {slug[0]}</p>
    }
    return (
        <div>
            slug page
        </div>
    )
}
