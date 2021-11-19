export type StudentType = {
    id: number
    name: string
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countryTitle: string
}

export type TechType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    name: 'Alex',
    isActive: true,
    address: {
        streetTitle: 'Yaremchuka 6',
        city: {
            title: 'Chernovci',
            countryTitle: 'Ukraine'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'JS'
        },
        {
            id: 2,
            title: 'React'
        }
    ]
}