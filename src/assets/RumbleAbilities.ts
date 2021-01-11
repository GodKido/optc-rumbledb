import { Tags } from "./characters/Tags";
import { Style } from "./Enums";

export class RumbleAbilities {
    constructor(
        public special = {
            content: '',
            tags: Array<any>()
        },
        public skill= {
            content: '',
            tags: Array<any>()
        },
        public target: string,
        public pattern: string,
        public resistance: string,
    ) { }
}