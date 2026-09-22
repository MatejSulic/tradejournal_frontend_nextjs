
export interface Series{
    id: number;
    name: string;
    description:string | null;
}

export interface CreateSeries{
    name:string;
    description: string | null;
}