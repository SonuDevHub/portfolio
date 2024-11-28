import { style } from 'framer-motion/client';
import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

const HeroOrbit = ({ children, size, rotation, shouldOrbit = false, orbitDuration, shouldSpin = false, spinDuration }: PropsWithChildren<{ size: number; rotation: number; shouldOrbit?: boolean; orbitDuration?: string; shouldSpin?: boolean; spinDuration?: string }>) => {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
            <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{
                animationDuration: orbitDuration,
            }}>
                <div className='flex items-start justify-start' style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                    <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{
                        animationDuration: spinDuration,
                    }}>
                        <div className='inline-flex' style={{
                            transform: `rotate(${rotation * -1}deg)`,
                        }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroOrbit