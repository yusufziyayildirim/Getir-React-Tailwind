
const Category = ({category}) => {
  return (
    <a href="" className="flex flex-col items-center gap-y-2 p-4 group hover:bg-[#f3f0fe] transition-colors">
        <img src={category.image} alt={category.title} className="w-12 h-12 border border-gray-200 rounded " />
        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">{category.title}</span>
        
    </a>
  )
}

export default Category;