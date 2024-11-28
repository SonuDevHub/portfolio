import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react'

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Reliable",
  "Future",
]

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div
        className="bg-gradient-to-r from-emerald-300 to-sky-400  relative -rotate-3 px-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex flex-none pr-4 py-3 gap-4 animate-move-left">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {words.map(word => (
                <div key={word} className="inline-flex gap-4 items-center whitespace-nowrap">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12 " />
                </div>
              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  )
}
