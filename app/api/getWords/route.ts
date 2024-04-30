import {NextRequest} from "next/server"
import words from "./words.json"

export async function POST(req: NextRequest) {
    const {wordsNumber} = await req.json()
    let listToReturn: string[] = []

    for (let i = 0; i < wordsNumber; i++) {
        let randomIndex: number = Math.floor(Math.random() * words.length);
        listToReturn.push(words[randomIndex])
    }

    return new Response(JSON.stringify(listToReturn))
}