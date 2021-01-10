import { DomSanitizer } from "@angular/platform-browser";
import { Type } from "../Color";
import { Class, Style } from "../Enums";
import { Unit } from "../Unit";
import { Tags } from "./Tags";

export let characters: Array<Unit> = [
    {
        id: 1445,
        icon: '',
        artwork: '',
        unitName: 'Boa Hancock',
        name2: 'Snake Princess',
        altnames: ['6+', 'Boa', 'Legend', 'QCK', 'V1'],
        class: [Class.SHT, Class.FSP],
        type: Type.QCK,
        rumble: {
            style: Style.HLR,
            styleIcon: '',
            special: {
                content: '',
                tags: []
            },
            skill: {
                content: '',
                tags: []
            },
            target: 'test',
            pattern: 'test',
            resistance: 'test',
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
        type: Type.PSY,
        rumble: {
            style: Style.SUP,
            styleIcon: '',
            special: {
                content: '',
                tags: [Tags.DMG, Tags.ATK, Tags.BUFF, Tags.CTS,]
            },
            skill: {
                content: '',
                tags: []
            },
            target: '',
            pattern: '',
            resistance: '',
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
        type: Type.STR,
        rumble: {
            style: Style.ATK,
            styleIcon: '',
            special: {
                content: '',
                tags: []
            },
            skill: {
                content: '',
                tags: []
            },
            target: '',
            pattern: '',
            resistance: '',
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
        type: Type.DEX,
        rumble: {
            style: Style.OBS,
            styleIcon: '',
            special: {
                content: '',
                tags: []
            },
            skill: {
                content: '',
                tags: []
            },
            target: '',
            pattern: '',
            resistance: '',
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
        type: Type.INT,
        rumble: {
            style: Style.DEF,
            styleIcon: '',
            special: {
                content: '',
                tags: []
            },
            skill: {
                content: '',
                tags: []
            },
            target: '',
            pattern: '',
            resistance: '',
        }
    },
    {
        id: 2964,
        icon: '',
        artwork: '',
        unitName: 'Blackbeard',
        name2: `Emperor`,
        altnames: ['V2', 'Legend', 'Blackbeard', 'BB', 'Super Type', 'ST', 'INT'],
        class: [Class.DRV, Class.CER],
        type: Type.INT,
        rumble: {
            style: Style.DEF,
            styleIcon: '',
            special: {
                content: 'Targets mid-range enemies for damage: 2x own ATK, boosts own ATK (10 tiers, 25 s.), boosts own CT loading speed (3 tiers, 25 s.)',
                tags: [Tags.DMG, Tags.ATK, Tags.BUFF, Tags.CTS,]
            },
            skill: {
                content: 'Targets INT allies for HP boost (5 tiers), when HP is below 60% boosts own CT loading speed (5 tiers)',
                tags: [Type.INT, Tags.BUFF, Tags.HP, Tags.CTS]
            },
            target: 'Enemies nearby',
            pattern: 'Normal, Normal, Strong, Full power',
            resistance: 'Seldom heals own HP by 150 when below 50%'
        }
    }
]