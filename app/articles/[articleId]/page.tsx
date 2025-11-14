'use client';
import Link from 'next/link';
import { use } from 'react';

export default function NewsArticle({
    params, searchParams
} : {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" }>;
}) {
    const { articleId } = use(params); // client components cannot use async await functions. so for that we have use hook that is provided by react
    const { lang = "en" } = use(searchParams);

    return (
        <>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div className='flex gap-4 mt-4'>
                <Link href={`${articleId}?lang=en`} className='underline'>English</Link>
                <Link href={`${articleId}?lang=es`} className='underline'>Spanish</Link>
            </div>
        </>
    )
}
