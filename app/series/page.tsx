
import NavigationButton from "@/components/NavigationButton";
import { SeriesList } from "@/components/SeriesList";
import { seriesService } from "@/services/api";
import { SeriesCreateForm } from "@/components/SeriesCreateForm";


export default async function SeriesPage() {
  const seriesList = await seriesService.getSeries();

  return (
    <main className="p-8">
    <NavigationButton adress="/" text="Go to Dashboard" />
    
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Series</h1>
    </div>
    <div className="flex">
    <div className="m-4 w-1/2">
      <SeriesList seriesList={seriesList} />
    </div>
    <div className="m-4 w-1/2">
    <SeriesCreateForm/>
    </div>
    </div>
  

    
    </main>
  );
}
