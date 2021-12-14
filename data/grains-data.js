import { nanoid } from "nanoid"

const grains = [
    {
        id: nanoid(10),
        name: "Turkey Red",
        classification: "Hard Red Winter Wheat",
        protein: 13.5,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: ["Colorado", "Kansas"],
        isOrganic: true,
        flavor: "Malty and Sweet",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "Performs well in bread, pizza dough, crackers, cookies, pie crusts, muffins, and biscuits. Truly is an all-purpose whole wheat.",
        history: "It was brought from Crimea to Kansas by Mennonite farmers in the 1870's.",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Red Fife",
        classification: "Hard Red Winter Wheat",
        protein: 14,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: ["South Dakota"],
        isOrganic: true,
        flavor: "Toasty, Sweet, and Nutty",
        texture: "Fine and slightly sandy.",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Rouge De Bordeaux",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Clark's Cream",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "White Sonora",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Einkorn",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Emmer",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Kamut",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Spelt",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Rye",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Barley",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "All-Purpose",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Buckwheat",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Blue Corn",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Oxacan Green Corn",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Bloody Burtcher Red Corn",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Nixtamalized Corn",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Millet",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Quinoa",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Brown Rice",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Oat",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Teff",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Sorghum",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    },
    {
        id: nanoid(10),
        name: "Amaranth",
        classification: "",
        protein: 12,
        hasGluten: true,
        pricePerLb: 3,
        grownIn: "",
        isOrganic: true,
        flavor: "",
        texture: "",
        bakingCharacteristics: "",
        inStock: true,
        img: "",
    }
]

export default grains

// {
//     id: nanoid(10),
//         name: "",
//         classification: "",
//         protein: 12,
//         hasGluten: true,
//         pricePerLb: 3,
//         grownIn: "",
//         isOrganic: true,
//         flavor: "",
//         texture: "",
//         bakingCharacteristics: "",
//         inStock: true,
//         img: "",
// }