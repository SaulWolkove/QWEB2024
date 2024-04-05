import Header from "./Header"
import Daniel from "../Team_headshots/Daniel_Popoola.png";
import Danne from "../Team_headshots/Danne_Mohamed.png";
import Grace from "../Team_headshots/Grace_Odunuga.jpg";
import Rahel from "../Team_headshots/Rahel_Efrem.jpg";
import Salma from "../Team_headshots/Salma_Shnur.png";
import Somto from "../Team_headshots/Somto_Agbodjan.jpg";
import Zen from "../Team_headshots/Zen_Kingsley.png";
import Al_barr from "../Team_headshots/Al-Barr_Ajiboye.jpg";
import Jordan from "../Team_headshots/Jordan_Harpper.jpg";



export default function Team() {
    return(
        
            <div>
        
        <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      #block {\n        \n        width:100%;\n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n      }\n\n      .grid-container-cochair {\n        display: grid;\n        grid-template-columns: auto auto;\n        padding-left: 100px;\n        padding-right: 100px;\n        column-gap: 150px;\n        row-gap: 50px;\n        }\n        .grid-container {\n        display: grid;\n        grid-template-columns: auto auto auto auto;\n        padding-left: 100px;\n        padding-right: 100px;\n        column-gap: 150px;\n        row-gap: 50px;\n      }\n      .grid-item {\n        font-size: 30px;\n        font-family: Montserrat, sans-serif;\n      }\n      " }} />
        <div id="root" />
        <div id="block">
          <div style={{fontSize: "64px", padding: "10px 20px", fontFamily: "Montserrat, sans-serif", backgroundColor: "#C2E2FF"}}><Header current={"team"} />Meet The Team</div>
          <div style={{padding: "5px"}}></div>
          <div style={{position: "absolute", right: "0px", width: "40%", padding: "15px", backgroundColor: "#C2E2FF"}}></div>
          <div className="grid-container-cochair" style={{paddingTop: "100px"}}>
              <div className="grid-item" >
                  <img src={Grace} width="200em"/>
                  <div style={{paddingTop: "10px"}}>Grace Odunga</div>
                  <div style={{fontSize: "20px", paddingTop: "5px"}}>Co-chair</div>
              </div>
              <div className="grid-item">
                    <img src={Al_barr} width="200em"/>
                  <div style={{paddingTop: "10px"}}>Al-Barr Ajiboye</div>
                  <div style={{fontSize: "20px", paddingTop: "5px"}}>Co-chair</div>
              </div>
          </div>
          <div className="grid-container" style={{paddingTop: "100px"}}>
            <div className="grid-item">
                <img src={Rahel} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}}/>
                <div style={{paddingTop: "10px"}}>Rahel Efrem</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Marketing Director</div>
            </div>
            <div className="grid-item">
                <img src={Jordan} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}}/>
                <div style={{paddingTop: "10px"}}>Jordan Harper</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
                <img src={Salma} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}}/>
                <div style={{paddingTop: "10px"}}>Salma Snur</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Finance Coordinator</div>
            </div>
            <div className="grid-item">
                <img src={Danne} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}} alt="Rahel Efrem"/>
                <div style={{paddingTop: "10px"}}>Danne Mohamed</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Logistics Coordinator</div>
            </div>
            <div className="grid-item">
                <img src={Zen} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}}/>
                <div style={{paddingTop: "10px"}}>Zen Kingsley</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
                <img src={Somto} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px"}}/>
                <div style={{paddingTop: "10px"}}>Somto Agbodjan</div>
                <div style={{fontSize: "20px", paddingTop: "5px"}}>Marketing Coordinator</div>
            </div>
            <div className="grid-item">
                <img src={Daniel} style={{maxWidth: "100%", maxHeight: "100%", borderRadius: "15px",alignSelf:"center"}}/>
            <div style={{paddingTop: "10px"}}>Daniel Popoola</div>
            <div style={{fontSize: "20px", paddingTop: "5px"}}>First Year Rep</div>
            </div>
        </div>
        <div style={{padding: "20px"}}></div>
      </div>
      </div>
        
    )
}