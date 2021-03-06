export const System = {};

System.label = "Aria";
System.abbrev = "ARIA VTT";
System.name = "aria";
System.rootPath = "/systems/" + System.name;
System.dataPath = System.rootPath + "/_data";
System.templatesPath = System.rootPath + "/templates";
System.logPrefix = System.abbrev;
System.debugMode = true;

export const ARIA = {};

ARIA.itemProperties = {
    "equipable": "ARIA.properties.equipable",
    "stackable": "ARIA.properties.stackable",
    "unique": "ARIA.properties.unique",
    "tailored": "ARIA.properties.tailored",
    "2h": "ARIA.properties.2Handed",
    "predilection": "ARIA.properties.predilection",
    "ranged": "ARIA.properties.ranged",
    "proficient": "ARIA.properties.proficient",
    "finesse": "ARIA.properties.finesse",
    "two-handed": "ARIA.properties.two-handed",
    "equipment": "ARIA.properties.equipment",
    "weapon": "ARIA.properties.weapon",
    "protection": "ARIA.properties.protection",
    "reloadable": "ARIA.properties.reloadable",
    "bow": "ARIA.properties.bow",
    "crossbow": "ARIA.properties.crossbow",
    "powder": "ARIA.properties.powder",
    "throwing": "ARIA.properties.throwing",
    "dr": "ARIA.properties.dr",
    "sneak": "ARIA.properties.sneak",
    "powerful": "ARIA.properties.powerful",
    "critscience": "ARIA.properties.critscience",
    "specialization": "ARIA.properties.specialization",
    "effects": "ARIA.properties.effects",
    "activable": "ARIA.properties.activable",
    "2Handed": "ARIA.properties.2Handed",
    "13strmin": "ARIA.properties.13strmin",
    "bashing": "ARIA.properties.bashing",
    "sling": "ARIA.properties.sling",
    "spell": "ARIA.properties.spell",
    "profession": "ARIA.properties.profession",
    "prestige": "ARIA.properties.prestige",
    "alternative": "ARIA.properties.alternative",
    "racial": "ARIA.properties.racial",
    "creature" : "ARIA.properties.creature"
};

ARIA.professions = [];
ARIA.origines = [];
ARIA.competences = [];

// Mise en cache des données de profession
ARIA.getProfessions = async function () {
    let professions = await game.packs.get("aria.professions").getContent().then(index => index.map(entity => entity.data));
    ARIA.professions = professions;
    console.debug("Professions loaded");
};

// Mise en cache des données d'origine
ARIA.getOrigines = async function () {
    let origines = await game.packs.get("aria.origines").getContent().then(index => index.map(entity => entity.data));
    ARIA.origines = origines;
    console.debug("Origines loaded");
};


// Mise en cache des données de compétences
ARIA.getCompetences = async function () {
    let competences = await game.packs.get("aria.competences").getContent().then(index => index.map(entity => entity.data));
    ARIA.competences = competences;
    console.debug("Competences loaded");
};

ARIA.itemTypes = {
    "origine": "ARIA.category.origines",
    "profession": "ARIA.category.profession",
    "competence": "ARIA.category.competence",
    "trapping": "ARIA.category.trapping",
    "melee": "ARIA.category.melee",
    "armor": "ARIA.category.armor",
    "shield": "ARIA.category.shield",
    "ranged": "ARIA.category.ranged"
};

