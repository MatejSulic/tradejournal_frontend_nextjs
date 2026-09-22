import { Series } from "@/types/series"; 

interface SeriesListProps {
  seriesList: Series[];
}

export function SeriesList({ seriesList }: SeriesListProps) {
  if (seriesList.length === 0) {
    return <p className="text-gray-500">No series</p>;
  }

  return (
    <div className="space-y-2">
      {seriesList.map((item) => (
        <div 
          key={item.id} 
          className="p-4 border rounded-lg shadow-sm hover:border-gray-400 transition"
        >
          <h3 className="font-bold text-lg">{item.name}</h3>
          {item.description && (
            <p className="text-sm text-gray-600">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}