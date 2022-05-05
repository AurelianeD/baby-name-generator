interface Name {
    id: number;
    name: string;
    gender: gender;
    popularity: popularity;
    length: length;
}

export enum gender{
    GIRL = 'girl',
    BOY = 'boy',
    UNISEX = 'unisex',
}

export enum popularity{
    TRENDY = 'trendy',
    UNIQUE = 'unique',
}

export enum length{
    SHORT = 'short',
    LONG = 'long',
    ALL = 'all',
}
export const names: Name[] = [
    {
        id: 1,
        name: "Laith",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 2,
        name: "Jake",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 3,
        name: "Lamelo",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 4,
        name: "Abraham",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 5,
        name: "Bartholomew",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },
    {
        id: 6,
        name: "Noah",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 7,
        name: "Benjamin",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 8,
        name: "William",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 9,
        name: "Lucus",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 10,
        name: "Harrison",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },
    {
        id: 11,
        name: "Selma",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 12,
        name: "Asher",
        gender: gender.BOY,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 13,
        name: "Tucker",
        gender: gender.BOY,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },

    {
        id: 14,
        name: "Arya",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 15,
        name: "Olivia",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 16,
        name: "Fay",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 17,
        name: "Brooklyn",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 18,
        name: "Genevieve",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },
    {
        id: 19,
        name: "Zoe",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 20,
        name: "Valentina",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 21,
        name: "Josephine",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 22,
        name: "Maya",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 23,
        name: "Everleigh",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },
    {
        id: 24,
        name: "Poppy",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 25,
        name: "Maia",
        gender: gender.GIRL,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 26,
        name: "Ivy",
        gender: gender.GIRL,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },

    {
        id: 27,
        name: "Jude",
        gender: gender.UNISEX,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 28,
        name: "Adrian",
        gender: gender.UNISEX,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
    {
        id: 29,
        name: "Sunny",
        gender: gender.UNISEX,
        popularity: popularity.UNIQUE,
        length: length.SHORT,
    },
    {
        id: 30,
        name: "Channing",
        gender: gender.UNISEX,
        popularity: popularity.TRENDY,
        length: length.LONG,
    },
    {
        id: 31,
        name: "Tennessee",
        gender: gender.UNISEX,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },
    {
        id: 32,
        name: "Dallas",
        gender: gender.UNISEX,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },

    {
        id: 33,
        name: "Zephyr",
        gender: gender.UNISEX,
        popularity: popularity.UNIQUE,
        length: length.LONG,
    },

    {
        id: 34,
        name: "Teri",
        gender: gender.UNISEX,
        popularity: popularity.TRENDY,
        length: length.SHORT,
    },
];