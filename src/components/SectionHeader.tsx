import React from 'react'

const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl text-center  md:text-5xl mt-6">{title}</h2>
            <p className="text-center text-white/60 mt-6 md:text-lg lg:text-xl max-w-md mx-auto">{description}</p>
        </>
    )
}

export default SectionHeader