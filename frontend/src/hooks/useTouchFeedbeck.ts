import { useEffect } from "react"

const useTouchFeedback = () => {
    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
            @media (max-width: 768px) {
                button, a, input[type="button"] {
                    -webkit-tap-highlight-color: transparent;
                    transition: transform 0.1s ease;
                }
                
                button:active, a:active {
                    transform: scale(0.97);
                }
            }
        `

        document.head.appendChild(style)

        return () => {
            style.remove()
        }
    }, [])
}

export default useTouchFeedback