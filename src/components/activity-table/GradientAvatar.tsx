import { LetterGradientDict } from '@/utils/constants'

export default function GradientAvatar({letter}: {letter: string}) {
  return (
    <div 
        className='w-6 h-6 text-sm font-bold rounded-full flex justify-center items-center text-white'
        style={{background: LetterGradientDict[letter]}}
    >
       {letter}
    </div>
  )
}
