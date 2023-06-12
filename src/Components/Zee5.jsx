import abc from "./zee5.module.css"
const Zee5=()=>{
    return(
        <section id={abc.nav}>
            <article>
                <div className={abc.logo}>
                    <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.60" title="ZEE5 Logo" alt="ZEE5 Logo" width="100%" height="auto"></img>
                </div>
                <div className={abc.menu}>
                    <ol>
                        <li><a href="">Home</a></li>
                        <li><a href="">TV Shows</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Web Series</a></li>
                        <li><a href="">News</a></li>
                    </ol>
                </div>
                <div className={abc.grid}>
                    <ion-icon name="grid-outline"></ion-icon>
                </div>
                <div className={abc.sea}>
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search for Movies,Shows,Channels etc." />
                    </div>   
                </div>
                <div className={abc.a}>
                <i class="fa-solid fa-a"></i>
                </div>
                <div className={abc.login}>
                    <div className={abc.log}>
                        LOGIN
                    </div>
                </div>
                <div className={abc.buy}>
                    <div className={abc.crown}>
                        <i class="fa-sharp fa-solid fa-crown"></i>
                        BUY PLAN
                    </div>
                </div>
                <div className={abc.bar}>
                    <i class="fa-solid fa-bars"></i>
                </div>
            </article>
        </section>
    )
}
export default Zee5;