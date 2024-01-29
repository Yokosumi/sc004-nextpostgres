import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    const { app_pin, body, rank } = await req.json()

    try {
        if (app_pin !== process.env.APP_PIN)
            throw new Error('you are unauthorized')
        if (!body || !rank) throw new Error('body and rank are required')
        await sql`INSERT INTO NOTES (body, rank) VALUES (${body}, ${rank})`
        const { rows } = await sql`SELECT * FROM Notes`
        return NextResponse.json(
            { addedItem: rows[rows.length - 1] },
            { status: 201 }
        )
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
