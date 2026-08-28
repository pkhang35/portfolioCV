import {ChartColumnIncreasing, Folder, GraduationCap, House, Languages, Moon, WrenchOff} from 'lucide-react';
function Header(){
    return(
        <>
            <header className=''>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-center'>
                        <ul className='mt-3 p-2 bg-amber-200 rounded-2xl flex gap-3 items-center justify-center'>
                            <li><House/></li>
                            <li><WrenchOff /></li>
                            <li><Folder /></li>
                            <li><ChartColumnIncreasing /></li>
                            <li><GraduationCap /></li>
                            <li><Languages /></li>
                            <li>
                                <button className='flex items-center'><Moon/></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;