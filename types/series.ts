
export interface Series{
    id: number;
    name: string;
    description:string | null;
}

export interface SeriesCreate{
    name:string;
    description: string | null;
}