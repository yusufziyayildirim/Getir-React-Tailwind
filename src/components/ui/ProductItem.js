import { AiOutlinePlus } from 'react-icons/ai';

const ProductItem = ({ product }) => {
    return (
        <div className="relative bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3">
            <button className='absolute bg-white top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-50 rounded-lg text-brand-color shadow-md hover:border-brand-color transition-colors'>
                <AiOutlinePlus />
            </button>
            <img src={product.image} alt={product.title} />
            <div className="text-brand-color">{product.price}</div>
            <div className="text-gray-900">{product.title}</div>
            <div className="text-gray-500">{product.alt}</div>
        </div>
    )
}

export default ProductItem