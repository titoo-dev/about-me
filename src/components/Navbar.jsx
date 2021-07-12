import { Brand} from './Brand'
import { Iconly } from 'react-iconly'


export function Navbar () {
    return <div className="flex justify-between px-6 xl:px-32 py-6 w-full">
        <Brand />
        <span className="cursor-pointer">
            <Iconly name="Home" primaryColor="white" />
        </span> 
    </div> 
}