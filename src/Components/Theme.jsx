onst Theme=()=>{
    let Dark=()=>{
        document.body.style.background="black";
        document.body.style.color="white";
    }
    let light=()=>{
        document.body.style.background="pink";
        document.body.style.color="black";
    }
    return(
        <>
      <h1>DARK AND LIGHT THEME</h1>
      <br />
      DARK
      <input type="radio" name="a" onClick={Dark} />
      <br /><br />
      LIGHT
      <input type="radio" name="a" onClick={light} />
      </>
    )
}
export default Theme;