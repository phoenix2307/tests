export type UserType = {
    name: string
    hair: number
    adress: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}


export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type NewCompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export const addNewNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, bks: Array<string>) => {
    return {
        ...user,
        books: [...user.books, ...bks]

    }
}

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {
        ...user,
        books: user.books.map(item => item === oldBook ? newBook : item)

    }


}

export const removeBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string) => {
    return {
        ...user,
        books: user.books.filter(item => item !== oldBook)
    }
}

export const inNewCompany = (user: UserWithLaptopType & WithCompaniesType, newCom: WithCompaniesType) => {
    let copy = {...user}
    return {
        copy,
        companies: [...user.companies, newCom]
    }
}