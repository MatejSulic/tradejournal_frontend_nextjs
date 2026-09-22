import { SeriesList } from "@/components/SeriesList";
import {CategoryList} from "@/components/CategoryList"
import { categoryService, seriesService, statsService } from "@/services/api";
import Link from "next/link";

export default async function Home() {
  const stats = await statsService.getStats();
  const seriesList = await seriesService.getSeries();
  const categoryList = await categoryService.getCategories();

  return (
    <main className="p-8">
      <p className="text-lg font-bold">Stats</p>
      <p className="text-lg">Winrate: {(stats.winrate * 100).toFixed(2)}%</p>
      <p className="text-lg">Average RR: {stats.average_rr.toFixed(2)} RR</p>
      <p className="text-lg">Total Trades: {stats.total_trades}</p>
      <p className="text-lg">Average Risk: {stats.average_risk.toFixed(2)} $</p>

      <p className="text-lg font-bold mt-4">Win/Loss/BE:</p>
      <p className="text-lg">Win: {stats.win_loss_be.win}</p>
      <p className="text-lg">Loss: {stats.win_loss_be.loss}</p>
      <p className="text-lg">BE: {stats.win_loss_be.be}</p>

      <div className="m-6">
        <h2>Series</h2>
        <SeriesList seriesList={seriesList} />
      </div>

      <div className="m-6">
        <h2>Categories</h2>
        <CategoryList CategotyList={categoryList}></CategoryList>
      </div>

      <Link href="/trades" className="text-blue-500 underline">
        All Trades
      </Link>
    </main>
  );
}