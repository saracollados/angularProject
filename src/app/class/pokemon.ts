import { Sprites } from "./sprites";
import { Stats } from "./stats";
import { Types } from "./types";

export class Pokemon{
    sprites: Sprites;
    name:string;
    id:number;
    types:Array<Types>;
    height: number;
    weight: number;
    stats: Array<Stats>;
}