'use client'

import SetTimeField from "@/components/SetTimeField";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
  const [time, setTime] = useState<number>(60)
  const [reload, setReload] = useState<number>(0)
  const [words, setWords] = useState<string[]>([])
  const [actualWord, setActualWord] = useState<string>("")
  const [isBadWord, setIsBadWord] = useState<boolean>(false)

  useEffect(() => {
    axios.post("/api/getWords", {wordsNumber: 1000})
      .then(response => {
        setWords(response.data)
      })
  }, [time])

  const compareWords: (wordToCompare: string) => boolean = (wordToCompare: string) => {
    for (let i = 0; i < actualWord.length; i++) {
      if (wordToCompare[i] != actualWord.trim()[i]) {
        return false
      }
    }
    return true
  }

  useEffect(() => {
    setIsBadWord(!compareWords(words[0]))
  }, [actualWord]);


  return (
    <div className="w-full h-full flex flex-col justify-center items-center fixed gap-8">
      <SetTimeField changeTime={setTime}>{time}</SetTimeField>
      <div className="w-full flex flex-row gap-1">
        <p className="w-2/5 flex flex-row justify-end text-2xl text-slate-400"></p>
        <p className={`text-2xl ${
          (isBadWord) ? "text-red-500" : ""
        }`}>{words[0]}</p>
        <p className="text-2xl">
          {
            words.slice(1, 6).map((word, idx) => (
              <span key={idx}>{word} </span>
            ))
          }
        </p>
      </div>
      <input onChange={(e) => {
        setActualWord(e.target.value)
      }} type="text" className="text-2xl rounded-md bg-slate-700 text-slate-300 outline-none p-1 w-1/5"/>
      <button onClick={() => {
        setReload(e => e + 2)
      }} className="bg-red-500 px-3 py-2 rounded-xl opacity-80 hover:opacity-100 transition">🔥
      </button>
    </div>
  )
}