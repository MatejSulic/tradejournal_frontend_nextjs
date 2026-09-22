import { Category } from "@/types/category";

interface CategoryListProps {
  
    CategotyList: Category[];
}

export function CategoryList({ CategotyList }: CategoryListProps) {
  if (CategotyList.length === 0) {
    return <p className="text-gray-500">No categories yet.</p>;
  }

  return (
    <div className="space-y-2">
      {CategotyList.map((item) => (
        <div 
          key={item.id} 
          className="p-4 border rounded-lg shadow-sm hover:border-gray-400 transition"
        >
          <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.category_type}</p>
        </div>
      ))}
    </div>
  );
}