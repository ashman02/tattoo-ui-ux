import {ReactLenis, useLenis} from "lenis/react"
import { ReactNode } from "react"
const LenisProvider = ({children} : {children : ReactNode}) => {
    useLenis(() => {

    })
  return (
    <ReactLenis root options={{lerp : 0.06}}>{children}</ReactLenis>
  )
}

export default LenisProvider
