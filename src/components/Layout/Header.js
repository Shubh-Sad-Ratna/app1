import image from"../../assests/image.jpg"
import classes from"./Header.module.css"
import HeaderCardButton from "./HeaderCardButton"
const Header=(props)=>{
    return(
        <>
            <header className={classes.head}>
                <h1>React Meals</h1>
                <HeaderCardButton/>
            </header>
            <div>
                <img src={image} alt="A tabel full of delicious food"></img>
            </div>
        </>
    )
}
export default Header;
