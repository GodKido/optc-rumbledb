import { Style } from "./Enums";

export class RumbleAbilities {
    constructor(
        public style: Style,
        public styleIcon: any,
        public special: string,
        public skill: string,
        public target: string,
        public pattern: string,
        public resistance: string
    ) { }
}