import { DomSanitizer } from "@angular/platform-browser";
import { Class, Style, Type } from "../Enums";
import { Unit } from "../Unit";
import { Tags } from "./Tags";

export let characters: Unit[] = [
    {
        id: 1445,
        icon: '',
        artwork: '',
        unitName: 'Boa Hancock',
        name2: 'Snake Princess',
        altnames: ['6+', 'Boa', 'Legend', 'QCK', 'V1'],
        class: Class.SHT,
        classIcon: '',
        class2: Class.FSP,
        class2Icon: '',
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
            pattern: 'test',
            target: 'test',
            resistance: 'test',
        }
    },
    {
        id: 1985,
        icon: '',
        artwork: '',
        unitName: 'Rufy&Ace',
        name2: '',
        altnames: ['Lace', 'Rufy', 'Luffy', 'Ace', 'dual', 'legend'],
        class: Class.DUAL,
        classIcon: '',
        class2: Class.NONE,
        class2Icon: '',
        type: Type.DUAL,
        rumble: {
            style: Style.SUP,
            styleIcon: '',
            special: {
                content: 'Level 10: Targets Free Spirit allies for ATK boost (3 tiers, 20 s.), DEF boost (3 tiers, 20 s.). Targets wide-range enemies on the side for damage: 0.65x own ATK',
                tags: [Class.FSP, Tags.BUFF, Tags.ATK, Tags.DEF, Tags.DMG]
            },
            skill: {
                content: 'Level 5: Targets Free Spirit allies for tier 5 ATK boost and level 2 Crit chance boost',
                tags: [Class.FSP, Tags.BUFF, Tags.ATK, Tags.CRIT]
            },
            pattern: 'Strong, Strong, Lv 1 Heal on nearby allies (short range), Strong',
            target: 'Enemies nearby',
            resistance: 'Paralysis (50% chance)'
        }
    },
    {
        id: 2034,
        icon: '',
        artwork: '',
        unitName: 'Borsalino',
        name2: 'Navy HQ Greatest Military Power',
        altnames: ['Kizaru', '6+', 'Legend', 'PSY'],
        class: Class.SLA,
        classIcon: '',
        class2: Class.SHT,
        class2Icon: '',
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
            pattern: '',
            target: '',
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
        class: Class.FTR,
        classIcon: '',
        class2: Class.FSP,
        class2Icon: '',
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
            pattern: '',
            target: '',
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
        class: Class.CER,
        classIcon: '',
        class2: Class.STK,
        class2Icon: '',
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
            pattern: '',
            target: '',
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
        class: Class.DRV,
        classIcon: '',
        class2: Class.CER,
        class2Icon: '',
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
            pattern: '',
            target: '',
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
        class: Class.DRV,
        classIcon: '',
        class2: Class.CER,
        class2Icon: '',
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
            pattern: 'Normal, Normal, Strong, Full power',
            target: 'Enemies nearby',
            resistance: 'Seldom heals own HP by 150 when below 50%'
        }
    }
]