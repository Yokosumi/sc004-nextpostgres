export interface note {
    id: number
    body: string
    rank: number
}

export interface newNote {
    body: string
    rank: string
    app_pin: string
}

export const blankNewNote = {
    body: '',
    rank: '2.5',
    app_pin: '',
}
