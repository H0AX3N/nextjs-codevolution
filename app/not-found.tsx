import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <h1 className="text-9xl font-bold tracking-tighter text-foreground">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Page Not Found
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-6">
                    <Button asChild>
                        <Link href="/">Go back home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
