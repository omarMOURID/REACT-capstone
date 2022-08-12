import React, { useEffect } from "react"

function useHover() {
    const [hovered, setHovered] = React.useState(false)
    const ref = React.useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const cur = ref.current
        cur.addEventListener("mouseenter", enter)
        cur.addEventListener("mouseleave", leave)

        return () => {
            cur.removeEventListener("mouseenter", enter)
            cur.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
}


export default useHover