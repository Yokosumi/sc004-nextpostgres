import Image from 'next/image'
import { note, newNote, blankNewNote } from './interfaces'

export default function Home() {
    return (
        <main className="p-6">
            <h1 className="text-2xl mb-4">Note Taker</h1>
            <p>Welcome to this site.</p>
        </main>
    )
}
