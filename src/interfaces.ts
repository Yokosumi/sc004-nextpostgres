export interface INote {
    id: number
    body: string
    rank: number
}

export interface INewNote {
    body: string
    rank: string
    app_pin: string
}

export const blankNewNote = {
    body: '',
    rank: '2.5',
    app_pin: '',
}
