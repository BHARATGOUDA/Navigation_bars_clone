import lkg from "./godaddy.module.css"
import img from "./godaddy.webp.png"
const Godaddy=()=>{
    return(
        <section id={lkg.nav}>
            <article>
                <div className={lkg.logo}>
                    <img src={img} alt="" />
                </div>
                <div className={lkg.menu}>
                    <ol>
                        <li><a href="">Domains</a></li>
                        <li><a href="">Hosting</a></li>
                        <li><a href="">Security</a></li>
                        <li><a href="">Email & Marketing</a></li>
                        <li><a href="">For web Proffessionals</a></li>
                    </ol>
                </div>
                <div className={lkg.ebox}></div>
                <div className={lkg.extra}>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-regular fa-circle-question"></i>
                    <i class="fa-solid fa-user"></i>   
                    <i class="fa-solid fa-cart-shopping"></i>                
                </div>
            </article>
        </section>
    )
}
export default Godaddy;