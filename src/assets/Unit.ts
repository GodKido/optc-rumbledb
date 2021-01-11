import { Type } from "./Enums";
import { Class, Style } from "src/assets/Enums";
import { Tags } from "./characters/Tags";

export interface Unit {
        id: number;
        isExpanded: boolean;
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
        style: Style,
        styleIcon: any,
        rumbleSpecial: string,
        rumbleSkill: string,
        rumblePattern: string,
        rumbleTarget: string,
        rumbleResistances: string,
        tags: Tags[]
}