import SidebarItem from "./SidebarItem"
import items from "./Data/SideBar.json"


export default function SideBarNew(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}