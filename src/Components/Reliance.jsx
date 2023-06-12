import mno from "./reliance.module.css"
const Reliance=()=>{
    return(
        <section id={mno.nav}>
            <article>
                <div className={mno.logo}>
                    <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="" />
                </div>
                <div className={mno.menu}>
                        <ol> 
                            <li><a href="">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">INDIE</a></li>
                            <li><a href="">HOME AND KITCHEN</a></li>
                        </ol>
                </div>
                <div className={mno.emt}>
                </div>
                <div className={mno.box}>
                    <div className={mno.box1}>
                            <ol>
                                <li><a href="">Sign In / Join AJIO</a></li>
                                <li><a href="">Customer Care</a></li>
                                <div className={mno.vis}>
                                    Visit AJIOLUXE
                                </div>
                            </ol>
                    </div>
                    <div className={mno.box2}>
                        <div className={mno.s}>
                            <input type="text" placeholder="Search AJIO"/>
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <div className={mno.h}>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div className={mno.b}>
                        <ion-icon name="bag-outline"></ion-icon>
                        </div>
                    </div>  
                </div>
            </article>
        </section>
    )
}
export default Reliance