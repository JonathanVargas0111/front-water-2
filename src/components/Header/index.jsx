import styles from './header.module.css';

function Header(){
    return(
        <div className={styles.containerHeader}>
            <img src="https://water.toryskateshop.com/wp-content/uploads/2021/09/banner-slider.jpg"
             alt="" className={styles.header__img}/>
        </div>
    )
}

export default Header;