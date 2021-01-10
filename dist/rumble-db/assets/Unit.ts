import { Type } from "./Enums";
import { Class, Style } from "src/assets/Enums";
import { RumbleAbilities } from "./RumbleAbilities";

export interface Unit {
        id: number;
        icon: any;
        artwork: any;
        unitName: string;
        name2: string;
        altnames: Array<any>;
        class: Class;
        classIcon: any;
        class2: Class;
        class2Icon: any;
        type: Type;
        rumble: RumbleAbilities;
}