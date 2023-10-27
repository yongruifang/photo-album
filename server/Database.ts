import mongoose, { Schema } from "mongoose";

export class Mongo {
    constructor(private url: string = "mongodb+srv://fangyongruifyr:fang13360398779@cluster0.idpmdbk.mongodb.net/?retryWrites=true&w=majority") {
    }

    public Connect(): void {
        mongoose.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true } as any)
            .then(() => {
                console.log(`Connected to the database`);
            })
            .catch((e: any) => {
                console.log(`Unable to connect ` + e);
            });
    }
}

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
});

export const Picture = mongoose.model('picture', PictureSchema);