import Image from 'next/image'
import appPreview from '../assets/app-preview.png'
import logoImage from '../assets/logo.svg'
import avatars from '../assets/avatares.png'
import iconCheck from '../assets/icon.svg'

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImage} alt="NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>

        </div>
      </main>

      <Image src={appPreview} alt="" />
    </div>
  )
}
