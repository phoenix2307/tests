import {
    addNewNewBooksToUser, inNewCompany,
    removeBook,
    updateBook, updateCompany, updateCompanyTitle,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from "./03";

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

//

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

//

test('remove js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
})

//

test('work in new company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-Incubator'}
        ]
    }
    let newCompany = {id: 3, title: 'Google'}


    const userCopy = inNewCompany(user, newCompany)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.adress).toBe(userCopy.adress)
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[1].title).toBe('It-Incubator')
    expect(userCopy.companies[1].id).toBe(2)
    expect(userCopy.companies[2].title).toBe('Google')

})

test('update title company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 32,
        adress: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-Incubator'}
        ]
    }


    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.adress).toBe(userCopy.adress)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')

})

test('update company', () => {

    // let user: UserWithLaptopType = {
    //     name: 'Alex',
    //     hair: 32,
    //     adress: {
    //         city: 'Minsk',
    //         house: 12
    //     },
    //     laptop: {
    //         title: 'ZenBook'
    //     }
    // }

    let companies = {
        'Alex': [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-Incubator'}
        ],
        'Artem': [
            {id: 2, title: 'It-Incubator'}
        ]
    }

    const updatedCompany = updateCompany(companies, 'Alex', 2, 'SF')

    expect(updatedCompany['Alex']).not.toBe(companies['Alex'])
    expect(updatedCompany['Artem']).toBe(companies['Artem'])
    expect(updatedCompany['Alex'][1].title).toBe('SF')
    expect(updatedCompany['Artem'][0].title).toBe(companies['Artem'][0].title)


})