import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

function Header() {
    return (<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem Title="HOME"
                Icon={HomeIcon}/>
            <HeaderItem Title="VERIFIED"
                Icon={BadgeCheckIcon}/>
            <HeaderItem Title="COLLECTIONICON"
                Icon={CollectionIcon}/>
            <HeaderItem Title="TRENDING"
                Icon={LightningBoltIcon}/>
            <HeaderItem Title="SEARCH"
                Icon={SearchIcon}/>
            <HeaderItem Title="ACCOUNT"
                Icon={UserIcon}/>


        </div>
        <Image className="object-contain" src=" http://links.papareact.com/ua6"
            width={200}
            height={100}/>
    </header>);;
}

export default Header
