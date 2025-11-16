'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"


export default function OrderProduct() {
    const router = useRouter();
    return (
        <div>
            <Button onClick={() => router.push('/')}>Go Home</Button>
        </div>
    )
}
