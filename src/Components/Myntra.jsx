import myn from "./myntra.module.css"
import img from "./R.png"
const Myntra=()=>{
    return(
        <section id={myn.box}>
            <article className={myn.box2}>
                <div className={myn.logo}>
                    <img src={img} alt="" />
                </div>
                <div className={myn.menu}>
                    <ol>
                        <li><a href="">MEN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME&LIVING</a></li>
                        <li><a href="">BEAUTY</a></li>
                        <li><a href="">STUDIO <sup>NEW</sup></a></li>
                    </ol>
                </div>
                <div className={myn.Ebox}></div>
                <div className={myn.search}>
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Srearch for products, brands and more"/>
                    </div>
                </div>
                <div className={myn.ediv}></div>
                <div className={myn.profile}>
                    <div className={myn.abc}>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <p>Profile</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-heart"></i>
                            <p>Wishlist</p>
                        </div>
                        <div>
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>Bag</p>
                        </div>
                    </div>
                </div>
                <div>
                    <i class="myntraweb-sprite desktop-iconUser sprites-headerUser" data-reactid="855"></i>
                </div>
            </article>
        </section>
    )
}
export default Myntra;