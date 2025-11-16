import { notFound, redirect } from "next/navigation";

export default async function ReviewPage({
    params
} : {
    params: Promise<{id: string, reviewId: string}>
}) {
    const {id, reviewId} = await params;
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect('/products');
    }
    return (
        <div>
            <p>Review {reviewId} for product {id}</p>
        </div>
    )
}
