import { INewNote, blankNewNote } from '@/interfaces'
import axios from 'axios'

interface IProps {
    newNote: INewNote
    setNewNote: (newNote: INewNote) => void
    fetchAllNotes: () => void
}

export const NotesForm = ({ newNote, setNewNote, fetchAllNotes }: IProps) => {
    const handleFieldChange = (fieldIdCode: string, value: string) => {
        switch (fieldIdCode) {
            case 'body':
                newNote.body = value
                break
            case 'rank':
                newNote.rank = value
                break
            case 'app_pin':
                newNote.app_pin = value
                break
        }
        setNewNote(structuredClone(newNote))
        fetchAllNotes()
    }

    const handleFormSubmit = async () => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        try {
            const response = await axios.post('/api/add-note', newNote, {
                headers,
            })
            setNewNote(blankNewNote)
        } catch (error: any) {
            alert('your note could not be saved')
        }
    }

    return (
        <>
            <form className="bg-slate-400 p-6 rounded-lg">
                <div className="mb-3">
                    <label className="block mb-1" htmlFor="note">
                        Note:
                    </label>
                    <textarea
                        onChange={(e) =>
                            handleFieldChange('body', e.target.value)
                        }
                        value={newNote.body}
                        className="w-full"
                        id="note"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1" htmlFor="rank">
                        Rank:
                    </label>
                    <input
                        value={newNote.rank}
                        onChange={(e) =>
                            handleFieldChange('rank', e.target.value)
                        }
                        className="w-[4rem] text-right"
                        id="rank"
                        type="text"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1" htmlFor="app_pin">
                        PIN:
                    </label>
                    <input
                        value={newNote.app_pin}
                        onChange={(e) =>
                            handleFieldChange('app_pin', e.target.value)
                        }
                        className="w-[7rem]"
                        type="password"
                        id="app_pin"
                    />
                </div>

                <div className="mb-3 flex justify-end">
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                        className="bg-slate-800 px-2 py-1 rounded-sm text-slate-400"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}
