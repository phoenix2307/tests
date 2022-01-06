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
    companies: Array<NewCompanyType>
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

export const inNewCompany = (user: UserWithLaptopType & WithCompaniesType, newCom: NewCompanyType) => {
    let copy = {
        ...user,
        companies: [...user.companies, newCom]
    }
    return copy
}

export const updateCompanyTitle = (user: WithCompaniesType, idCompany: number, titleCompany: string) => {
    return {
        ...user,
        companies: user.companies.map(company => company.id === idCompany ? {...company, title: titleCompany} : company )
    }
}

export const updateCompany = (companies: {[key: string]: Array<NewCompanyType>},
                              userName: string,
                              companyId: number,
                              newTitle: string) => {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(
        c => c.id === companyId ? {...c, title: newTitle} : c
    )

    return companyCopy
}
