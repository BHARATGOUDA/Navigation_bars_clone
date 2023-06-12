import abc from "./hotstar.module.css"
const Hotstar=()=>{
    return(
        <section id={abc.box}>
            <article>
                    <div className={abc.bar}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className={abc.logo}>
                        <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img>
                    </div>
                    <div className={abc.menu}>
                        <ol>
                            <li><a href="">TV</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Sports</a></li>
                            <li><a href="">Disney+</a></li>
                            <li><a href="" className={abc.kids}>KiDS</a></li>
                        </ol>
                    </div>
                    <div className={abc.ebox}></div>
                    <div className={abc.search}>
                            <div className={abc.searchbox}>
                                    <input type="text" placeholder="Search"  /> 
                                    <i class="fa-solid fa-magnifying-glass"></i>
                            
                            </div>                     
                    </div>
                    <div className={abc.sub}>
                        <div className={abc.isub}>
                                    SUBSCRIBE
                        </div>
                    </div>
                    <div className={abc.login}>
                        LOGIN
                    </div>
            </article>
        </section>
    )
}
export default Hotstar;