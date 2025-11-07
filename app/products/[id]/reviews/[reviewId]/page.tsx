export default async function ReviewPage({
    params
} : {
    params: Promise<{id: string, reviewId: string}>
}) {
    const {id, reviewId} = await params;
    return (
        <div>
            <p>Review {reviewId} for product {id}</p>
        </div>
    )
}
