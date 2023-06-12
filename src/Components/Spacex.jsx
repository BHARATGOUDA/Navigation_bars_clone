import spa from "./spacex.module.css"
import img from "./spacex-logo.png"
const Spacex=()=>{
    return(
          <section id={spa.nav}>
            <article>
                <div className={spa.logo}>
                  <img src={img} alt="" />
                </div>
                <div className={spa.menu}>
                    <ol>
                      <li><a href="">FALCON 9</a></li>
                      <li><a href="">FALCON HEAVY</a></li>
                      <li><a href="">DRAGON</a></li>
                      <li><a href="">STARSHIP</a></li>
                      <li><a href=""> HUMAN SPACEFLIGHT</a></li>
                      <li><a href="">RIDESHARE</a></li>
                      <li><a href="">STARSHIELD</a></li>
                      <li><a href="">STARLINK</a></li>
                    </ol>
                </div>
                <div className={spa.ebox}></div>
                <div className={spa.shop}>
                  <ol>
                    <li><a href="">SHOP</a></li>
                    <li><a href=""><i class="fa-sharp fa-solid fa-bars"></i></a></li>
                  </ol>
                </div>
            </article>
          </section>
    )
}
export default Spacex;