import { SeriesList } from "@/components/SeriesList";
import {CategoryList} from "@/components/CategoryList"
import { categoryService, seriesService, statsService } from "@/services/api";
import { StatsBar } from "@/components/StatsBar";
import NavigationButton from "@/components/NavigationButton";

export default async function Home() {
  const stats = await statsService.getStats();
  const seriesList = await seriesService.getSeries();
  const categoryList = await categoryService.getCategories();

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
        <NavigationButton adress="/trades" text="View Trades" />
        <NavigationButton adress="/series" text="View Series" />
        <NavigationButton adress="/categories" text="View Categories"/>
        </div>
      </div>

      <div className="mb-4">
        <StatsBar stats={stats} />
      </div>

    </main>
  );
}