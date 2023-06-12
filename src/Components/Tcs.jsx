import tcs from "./tcs.module.css"
const Tcs=()=>{
    return(
       <section id={tcs.nav}>
            <article>
                <div className={tcs.logo}>
                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg" alt="" />
                </div>
                <div className={tcs.menu}>
                    <ol>
                        <li><a href="">What we do</a></li>
                        <li><a href="">Who we are</a></li>
                        <li><a href="">Insights</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Investors</a></li>
                    </ol>
                </div>
                <div className={tcs.ebox}></div>
                <div className={tcs.con}>
                    <ol>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">TCS WORLDWIDE</a></li>
                        <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                    </ol>
                </div>
                <div className={tcs.tata}>
                    <img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/logo-tata.svg" alt="" />
                </div>
            </article>
       </section>
    )
}
export default Tcs