import './navbar.css'
const NavItem = (props)=>
{
    console.log(props.className);
    return(
        
        <span className="navItemsItem">{props.val}</span>
    );
}

const NavLeft = (props)=>
{
    return(
        <div className={props.className}>
            <NavItem className={props.childClass} val = "Home"/>
            <NavItem className={props.childClass} val = "About"/>
            <NavItem className={props.childClass} val = "Projects"/>
            <NavItem className={props.childClass} val = "Contacts"/>
        </div>
    )
}
export default NavLeft;