import Image from 'next/image'
import logo from '../assets/logo.png'
import LoginButton from '../components/LoginButton'
import SignupButton from '../components/SignupButton'



export default function Header() {
return (
    <>
    <div className="container mx-auto flex justify-between items-center z-20">
        <div className="mx-12 w-1/4 my-6 ">
            <Image className=""
            src={logo}
            layout="responsive"   
             />
        </div>

        <div className="flex items-center  ">
            <LoginButton />
            <SignupButton />
        </div>
    </div>

    </>
)
}