import { useEffect, useState } from 'react'

export function Async(){
    const [isButtonInvisible, seIsButtonInvisible ] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            seIsButtonInvisible(true)
        }, 1000)
    }, [])

    return (
        <div>
            <div>Hello World</div>
            {!isButtonInvisible && <button>Button</button>}
        </div>
    )
}