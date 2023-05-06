import { Box } from '@chakra-ui/react'
import { useRef, useEffect, MouseEvent, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'

const MotionBox = motion(Box)

type CardLayoutProps = {
    children: React.ReactNode
    glowColor?: string
} & Rest

const dampen = 100
const defaultGlowColor = 'rgba(255, 255, 255, 0.03)'
// Colors panel:
// 'rgba(255, 255, 255, 0.03)', // blanc
// 'rgba(212, 0, 255, 0.05)', // violet
// 'rgba(0, 38, 255, 0.08)', // bleu
// 'rgba(0, 255, 179, 0.05)', // bleu/vert
// 'rgba(255, 247, 0, 0.04)', // jaune

export const CardLayout: React.FC<CardLayoutProps> = ({ children, glowColor, ...rest }) => {

    const cardRef = useRef<HTMLDivElement>(null)
    // const [rotateX, setRotateX] = useState(0)
    // const [rotateY, setRotateY] = useState(0)
    

    useEffect(() => {
        // glow effect color
        const card = cardRef.current
        if (!card) return    
        card.style.setProperty("--glow-color", glowColor || defaultGlowColor)
    }, [])

    const handleMouseMove = (e: MouseEvent) => {

        const card = cardRef.current
        if (!card) return

        // glow effect
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)

        // parallax effect (DISABLED FOR NOW)
        // const rotateX = (x - rect.left - rect.height / 2) / dampen,
        //       rotateY = (y - rect.top - rect.width / 2) / dampen
        //
        // setRotateX(rotateX)
        // setRotateY(rotateY)
    } 

	return (<>
        <MotionBox
            // style={{
            //     rotateX,
            //     rotateY
            // }}
            p='2rem'
            bg='background.secondary'
            border='1px solid' borderColor='background.tertiary'
            borderRadius='10px'
            display='flex' flexDirection='column' gap='20px' flex='1 1'
            w='100%'
            position='relative'
            className='card'
            onMouseMove={(handleMouseMove)}
            onHoverEnd={() => {
                // setRotateX(0)
                // setRotateY(0)
            }}
            ref={cardRef}
            {...rest}
        >
            { children }
        </MotionBox>
    </>)
}