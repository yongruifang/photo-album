export type ImageType = string | ArrayBuffer;

export interface IPictureModel {
    Image: ImageType;
    Name: string;
    Description: string;
    Tags: string;
}

export class PictureModel implements IPictureModel {
    Image: ImageType;
    Name: string;
    Description: string;
    Tags: string;
    constructor() {
        this.Image = "";
        this.Name = "";
        this.Description = "";
        this.Tags = "";
    }
}