import { useEffect, useState } from "react";
import categoryData from 'api/categories';
import Category from "./ui/Category";

const Categories = () => {

  const[categories, setCategories] = useState([]);

  useEffect(()=>{
    //İstek
    setCategories(categoryData);
  },[])

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
          {}
          {categories && categories.map((category, i)=> 
            <Category key={i} category={category} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories