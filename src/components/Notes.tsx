import { INote } from '@/interfaces'

interface IProps {
    notes: INote[]
}

export const Notes = ({ notes }: IProps) => {
    return (
        <ul>
            {notes.map((note) => {
                return (
                    <>
                        <li
                            className="flex gap-2 mb-2 items-center"
                            key={note.id}
                        >
                            <span className="bg-slate-700 text-yellow-400 p-1 rounded w-[2.5rem] flex justify-center">
                                {note.rank}
                            </span>
                            <span>{note.body}</span>
                        </li>
                    </>
                )
            })}
        </ul>
    )
}
