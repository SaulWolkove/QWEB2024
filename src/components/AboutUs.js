import Header from "./Header"
import Login from "./Login"

export default function AboutUs() {
    return(
      <div>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
        <style dangerouslySetInnerHTML={{__html: "\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n        overflow: hidden;\n      }\n\n      li {\n        float: left;\n      }\n\n      li a {\n        font-family: Montserrat, sans-serif;\n        display: block;\n        color: black;\n        text-align: center;\n        padding: 14px 16px;\n        text-decoration: none;\n      }\n\n      li a:hover {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      .active {\n        text-decoration-line: underline;\n        text-underline-offset: 2px;\n      }\n\n      #grad1 {\n     \n        padding:0;\n        margin:0;\n        top:0;\n        left:0;\n        width: 100%;\n        height: 400px;\n        background-color: #FFA25F; /* For browsers that do not support gradients */\n        background-image: linear-gradient(to right, #FFA25F , #FFFAF6);\n      }\n\n      .grid-container {\n        display: grid;\n        grid-auto-columns: minmax(0, 1fr);\n        grid-auto-flow: column;\n        padding-left: 100px;\n        padding-right: 100px;\n        column-gap: 150px;\n      }\n      .grid-item {\n        background-color: rgba(235, 235, 235, 1);\n        border-left: 10px solid rgba(194, 226, 255, 1);\n        border-bottom: 10px solid rgba(194, 226, 255, 1);\n        padding: 20px;\n        font-size: 30px;\n        text-align: center;\n        font-family: Montserrat, sans-serif;\n      }\n      " }} />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
        <div id="grad1">
          
          <div style={{width: '50%', fontSize: '64px', padding: '50px 10px', fontFamily: 'Montserrat, sans-serif'}}> <Header current={"home"}/>Queen's Black Computer Science Society</div>
          <div style={{width: '50%', fontSize: '24px', padding: '0px 10px', fontFamily: 'Roboto, sans-serif'}}>We are the organization that provides supportive space for black students pursuing their passion for technology.</div>
          <div style={{width: '50%', fontSize: '36px', paddingTop: '100px', paddingBottom: '30px', paddingLeft: '50px', fontFamily: 'Montserrat, sans-serif'}}>Our Goals</div>
          <div className="grid-container">
            <div className="grid-item">NETWORKING
              <div style={{fontSize: '20px', paddingTop: '15px', textAlign: 'left'}}>Connect with peers and industry professionals, bridging the gap between academia and industry. Our events and sessions aim to build a supportive network for black students in computer science, fostering diversity and innovation.</div>
            </div>
            <div className="grid-item">PROFESSIONAL<div>DEVELOPMENT</div>
              <div style={{fontSize: '20px', paddingTop: '15px', textAlign: 'left'}}>Sharpen your skills with interactive workshops and hands-on sessions. We're here to support your growth, providing resources, mentorship, and insights to help you thrive in the ever-evolving tech world.</div>
            </div>
            <div className="grid-item">COMMUNITY
              <div style={{fontSize: '20px', paddingTop: '15px', textAlign: 'left'}}>Join a safe and inclusive community for black students passionate about computer science. We celebrate achievements, foster collaboration, and create a sense of belonging beyond the screen.</div>
            </div>
          </div>
          <div style={{padding: '20px'}} />
          <Login/>

        </div>

      </div>

    )
}