import NavbarItem from "./NavbarItem";


export default function Navbar() {
    return (
        <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
            <NavbarItem title="Tranding" param="fetchTrending" />
            <NavbarItem title="Top Rtated" param="fetchToprated" />
        </div>
    )
}
