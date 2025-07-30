import Logo from '../assets/logo/logo.svg'

const Header = () => {
  return (
    <header className='p-3'>
        <div>
            <img src={Logo} alt="Logo" width={48} height={48} />
        </div>
    </header>
  )
}

export default Header