import { BigHead } from "@bigheads/core";
export const generateDiceBearBottts = (seed) =>
  `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

const data = [
    {
        id: "1",
        name: "Pedro Perez",
        position: "CEO",
        personxskill: {python:"100", java:"100", sql:"40", javascript:"60", php:"100", mongoDB:"80"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "2",
        name: "Luisa Rodriguez",
        position: "Engineer",
        personxskill: {python:"80", java:"80", sql:"40", javascript:"20", php:"80"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "3",
        name: "Juan Gonzales",
        position: "Engineer",
        personxskill: {python:"20", java:"40", sql:"80", javascript:"100", php:"40"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "4",
        name: "Ana Bray",
        position: "Developer",
        personxskill: {python:"60", java:"20", sql:"40", javascript:"40", php:"100"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "5",
        name: "Laura Gomez",
        position: "Engineer",
        personxskill: {python:"50", java:"50", sql:"50", javascript:"50", php:"50"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "6",
        name: "Lucas Paqueta",
        position: "Developer",
        personxskill: {python:"40", java:"20", sql:"50", javascript:"40", php:"100"},
        avatar: generateDiceBearBottts(Math.random()),
    },
    {
        id: "7",
        name: "Juan Rueda",
        position: "Engineer",
        personxskill: {python:"60", java:"60", sql:"60", javascript:"60", php:"60"},
        avatar: generateDiceBearBottts(Math.random()),
    },
]

export default data