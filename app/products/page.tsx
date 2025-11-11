import Link from 'next/link'

export default function ProductList() {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" },
    ];

    return (
        <div className='flex flex-col items-center'>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <ul className="space-y-2">
                {products.map((product, index) => (
                    <li key={product.id}>
                        <Link
                            href={`/products/${product.id}`}
                            className="hover:underline"
                            replace={index === 0}
                        >
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
