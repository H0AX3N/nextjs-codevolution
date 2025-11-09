import { notFound } from "next/navigation";

export default async function ReviewPage({
    params
} : {
    params: Promise<{id: string, reviewId: string}>
}) {
    const {id, reviewId} = await params;
    if(parseInt(reviewId) > 1000){
        notFound();
    }
    return (
        <div>
            <p>Review {reviewId} for product {id}</p>
        </div>
    )
}
