import Image from 'next/image'
import hexagon from '../../src/assets/hexagon.png'


export default function HexagonIcon() {

    return (
        <>
        <Image className="p-0"
            src={hexagon}
            layout="fixed"
            height={700}
            width={700}
          
        />
        </>
    )
}