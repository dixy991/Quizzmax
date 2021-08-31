export interface Quizz {
    id: number,
    title: string,
    img: { src: string, alt: string },
    active: boolean,
    category: number,
    questions: [{ name: string, answers: [{ options: string, correct: boolean }] }]
}