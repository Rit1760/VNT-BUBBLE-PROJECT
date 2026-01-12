
import Link from "next/link";
import "../Styles/Home.css"
import Image from "next/image";

export default function Home() {
  return (
<>
<div className="main1_Homemqtt">
  <div className="contaniner1_Homemqtt">
    <div className="row1_Homemqtt">
      <div className="col1_Homemqtt">
 <h2>VNT Intelligent Connectivity for a<span style={{color:"#ff6600",borderBottom:"6px solid #ff6600"}}> Smarter Future </span></h2>
<p>
At VNT, we build reliable and scalable MQTT-based solutions that enable seamless real-time communication between devices. 
Our platform empowers businesses to connect, monitor, and control IoT systems with unmatched speed, security, and efficiency.
</p>
      </div>
    </div>
  </div>
  
  <div className="container2_Homemqtt">
    <div className="row2_Homemqtt">
      <div className="col2_Homemqtt">
<Image src="/Images/Homemqtt1.png" width={400} height={300} alt="Homemqtt1" />
      </div>
      <div className="col3_Homemqtt">
<Image src="/Images/Homemqtt3.jpg" width={400} height={300} alt="Homemqtt3" />
      </div>
    </div>
  </div>
  <div className="container33_Homemqtt">
    <div className="row33_Homemqtt1">
      <div className="col11_Homemqtt">
        <h2 className="hero-title">Continue to<span style={{color:"#ff6600"}}> VNT</span> please log in or register to proceed</h2>
      </div>
    </div>
    <div className="row33_Homemqtt">
      <div className="col22_Homemqtt">
        <Link href="/Register">Register</Link>
      </div>
      <div className="col33_Homemqtt">
<Link href="/Login">Login</Link>
      </div>
    </div>
  </div>
</div>
</>
  );
}
