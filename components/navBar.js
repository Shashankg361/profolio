export default function Navbar(){

    return (
        <div className='flex bg-white text-slate-800 items-center justify-between' >
          <div >LOGO</div>
          <div>
            <ul className="flex justify-between">
              <li className='p-2'>profile</li>
              <li className='p-2'>projects</li>
              <li className='p-2'>contact</li>
            </ul>
          </div>
        </div>
    )
}