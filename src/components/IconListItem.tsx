import Image from 'next/image'
import chatIcon from '../../src/assets/chatIcon.png'


export default function IconListItem() {
    return (
       <>
            <Image 
                src={chatIcon}                
            />
            
        </>

    )
}