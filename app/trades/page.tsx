import { TradeCard } from "@/components/TradeCard";
import { StatsBar } from "@/components/StatsBar";
import { tradeService, statsService} from "@/services/api";
import NavigationButton from "@/components/NavigationButton";

export default async function TradesPage() {
  const trades = await tradeService.getAllTrades();
  const stats = await statsService.getStats();

  if (!trades || trades.length === 0) {
    return (
      <main className="p-8 space-y-4">
        <p className="text-muted-foreground">No logged trades.</p>
        <NavigationButton adress="/" text="Go to Dashboard" />
      </main>
    );
  }

  return (
      <main className="p-8 space-y-6">
        <StatsBar stats={stats} />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trades Log</h1>
        <NavigationButton adress="/" text="Go to Dashboard" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
        {trades.map((trade) => (
          <TradeCard key={trade.id} trade={trade} />
        ))}
      </div>
    </main>
  );
}