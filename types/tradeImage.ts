
export type ImageType = 'premarket' | 'htf' | 'ltf'
export interface TraedImage{
    id:number;
    image_type: ImageType;
    file_path: string
}