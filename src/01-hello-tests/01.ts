import {student, StudentType} from "./02";

export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
                .map(w => w
                    .replace('!', '')
                    .replace('.', '')
                    .replace(',', '')
                )
}

//testing function

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
}
// !!! Важно в функции addSkill параметр student может называться как угодно,
// но он будет обращаться к обьекту с типом StudentType. То есть мы получим нам объект
// в тесте этой функции наш тест обращается непосредственно к объекту student.
// И несмотря на разные с виду имена мы работаем с одним и тем же объектом,
// просто ссылки на него имеют разное название