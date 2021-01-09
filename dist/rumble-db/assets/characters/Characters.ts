import { DomSanitizer } from "@angular/platform-browser";
import { Class, Style } from "../Enums";
import { Unit } from "../Unit";

export let characters: Array<Unit> = [
    {
        id: 1445,
        icon: '',
        artwork: '',
        unitName: 'Boa Hancock',
        name2: 'Snake Princess',
        altnames: ['6+', 'Boa', 'Legend', 'QCK', 'V1'],
        class: [Class.SHT, Class.FSP],
        rumble: {
            style: Style.HLR,
            styleIcon: '',
            special: 'test',
            skill: 'test',
            target: 'test',
            pattern: 'test',
            resistance: 'test'
        }
    },
    {
        id: 2034,
        icon: '',
        artwork: '',
        unitName: 'Borsalino',
        name2: 'Navy HQ Greatest Military Power',
        altnames: ['Kizaru', '6+', 'Legend', 'PSY'],
        class: [Class.SLA, Class.SHT],
        rumble: {
            style: Style.SUP,
            styleIcon: '',
            special: '',
            skill: '',
            target: '',
            pattern: '',
            resistance: ''
        }
    },
    {
        id: 2400,
        icon: '',
        artwork: '',
        unitName: 'Monkey D. Luffy',
        name2: 'The Great Snake Surpassing The Future',
        altnames: ['V2', 'Snakeman', 'Supertype', 'ST', 'Luffy', 'Rufy', 'STR'],
        class: [Class.FGT, Class.FSP],
        rumble: {
            style: Style.ATK,
            styleIcon: '',
            special: '',
            skill: '',
            target: '',
            pattern: '',
            resistance: ''
        }
    },
    {
        id: 2588,
        icon: '',
        artwork: '',
        unitName: 'Nami',
        name2: 'Cat Burglar deceiving the world',
        altnames: ['Legend', 'Nami', '6+', 'Whole Cake Island', 'DEX'],
        class: [Class.CER, Class.STK],
        rumble: {
            style: Style.OBS,
            styleIcon: '',
            special: '',
            skill: '',
            target: '',
            pattern: '',
            resistance: ''
        }
    },
    {
        id: 2444,
        icon: '',
        artwork: '',
        unitName: 'Donquijote Doflamingo',
        name2: `God's Sanction`,
        altnames: ['V1', '6+', 'Doffy', 'Doflamingo', 'INT'],
        class: [Class.DRV, Class.CER],
        rumble: {
            style: Style.DEF,
            styleIcon: '',
            special: '',
            skill: '',
            target: '',
            pattern: '',
            resistance: ''
        }
    },
    {
        id: 1675,
        icon: '',
        artwork: '',
        unitName: 'random',
        name2: `random`,
        altnames: ['V1', '6+', 'Doffy', 'Doflamingo', 'INT'],
        class: [Class.DRV, Class.CER],
        rumble: {
            style: Style.DEF,
            styleIcon: '',
            special: '',
            skill: '',
            target: '',
            pattern: '',
            resistance: ''
        }
    }
]