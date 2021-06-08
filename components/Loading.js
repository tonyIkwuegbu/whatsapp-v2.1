import { ThreeBounce } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh" }}>
        <div>
        <img 
        src="https://www.pngrepo.com/download/303150/whatsapp-symbol-logo.png"
        alt=""
        style={{marginBottom:10}}
        height={200}
        />
        </div>
        <ThreeBounce color="#3CBC2B" size={30} />
        <h4 style={{color: "grey"}}>From Zetrov</h4>
      </center>
    )
}

export default Loading
