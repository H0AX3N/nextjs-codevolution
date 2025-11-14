import Link from 'next/link';

export default async function NewsArticle({
    params, searchParams
} : {
    params: Promise<{ articleId: string }>;
    
}) {
    return (
        <>
            <h1>News article id</h1>
            <p>Reading in language</p>
            <div>
                <Link href='articles/id?lang=en' className='underline'>English</Link>
                <Link href='articles/id?lang=sn'>Spanish</Link>
            </div>
        </>
    )
}
