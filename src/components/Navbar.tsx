import Link from 'next/link'

const Navbar = () => {
  return (
    <header className={`w-100 p-4`}>
      <nav className={`flex flex-row justify-between`}>
        <img src={'/costs_logo.png'} alt='Costs' width={80} height={80}/>

        <ul className={`flex flex-nowrap flex-row my-auto py-4 gap-4 md:gap-8 lg:gap-16 pr-4`}>
          <li className={`font-bold transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer`}>
            <Link href="/about" className="block p-2">About</Link>
          </li>
          <li className={`font-bold transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer`}>
            <Link href="/projects" className="block p-2">Projects</Link>
          </li>
          <li className={`font-bold transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer`}>
            <Link href="/settings" className="block p-2">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;