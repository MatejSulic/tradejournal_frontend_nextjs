
import NavigationButton from "@/components/NavigationButton";
import { categoryService } from "@/services/api";
import { CategoryList } from "@/components/CategoryList";
import { CategoryCreateForm } from "@/components/CategoryCreateForm";


export default async function CategoryPage() {
  const categoryList = await categoryService.getCategories();

  return (
    <main className="p-8">
    <NavigationButton adress="/" text="Go to Dashboard" />
    
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Series</h1>
    </div>
    <div className="flex">
    <div className="m-4 w-1/2">
    <CategoryList CategotyList={categoryList}></CategoryList>

    </div>
    <div className="m-4 w-1/2">
    <CategoryCreateForm/>
    </div>
    </div>
  

    
    </main>
  );
}
