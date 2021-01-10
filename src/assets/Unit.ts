import { Type } from "./Color";
import { Class, Style } from "src/assets/Enums";
import { RumbleAbilities } from "./RumbleAbilities";

export interface Unit {
        id: number;
        icon: any;
        artwork: any;
        unitName: string;
        name2: string;
        altnames: Array<any>;
        class: Class[];
        type: Type;
        rumble: RumbleAbilities;
}