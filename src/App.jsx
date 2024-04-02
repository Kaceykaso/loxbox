import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <section className="hero">
        <h3>Products that Produce Results</h3>
        Security ipsum dolor sit amet pPP data encryption standard HTTPS, intranet PPTP internet URL access control 
        ransomware covert channel patch. Subnet mask URL anonymous ransomware ethernet authorized TCP/IP hypertext 
        markup language corruption file transfer protocol IP address TTL auditing sniffing race condition. Trust brute 
        force backdoor, buffer overflow layer 2 tunneling protocol signature domain hijacking cache header RBAC threat 
        assessment URL daemon access control fuzzing. UDP LDAP OSPF, software public key confidentiality reverse proxy 
        MAC. War dialing certificates zero day worm static routing covert channel, echo request smartcard. Ephemeral 
        port IP spoofing VPN, SQL injection tcpdump countermeasure kerberos shell IP forwarding sensitive cipher 
        penetration test. Patch exposure cookie subnet mask, packet FTP phishing logic bomb byte account harvesting 
        PPP worm cloud computing.
      </section>

      <section className="services">
        <h3>Solutions that Solve</h3>
        Basic authentication layer 2 tunneling protocol router hypertext transfer protocol corruption. PPP ephemeral port 
        loopback, corruption hardening form-based authentication backdoor HTTP. Octet symmetric key least privilege data 
        mining authentication IP flooding. Linux plaintext brute force URL cache poisoning certificates HTTPS payload 
        masquerade. Hops tcpdump business continuity plan, race condition octet file transfer protocol MD5 echo request 
        MAC trust account harvesting SSH AES. Telnet SHA256 rootkit reverse proxy public key password IP spoofing.
      </section>

      <section className="userStories">
        <h3>Our Customers are People</h3>
        Hypertext markup language zombie SHA256 aute ping of death, trojan horse honey pot digital signature diffie-hellman. 
        Penetration test symmetric key business continuity plan elit port scan internet irure ransomware. MAC jitter in 
        nulla, UDP reverse engineer gateway domain hijacking. Dictionary attack rootkit auditing boot sector, octet account 
        harvesting ransomware id MD5 token ring trojan horse SSH kernel domain hijacking. SSH MD5 certificates, jitter TTL 
        router ARP cache poisoning reprehenderit dolore bastion host FTP.
      </section>

      <section className="research">
        <h3>Explore the Research</h3>
        Challenge-handshake authentication protocol extensible authentication protocol router, fingerprint dictionary 
        attack ARP cache poisoning FTP basic authentication. Domain name system due diligence internet control message 
        protocol buffer overflow BGP byte. Hash function eavesdropping session hijack, byte cloud computing challenge-handshake 
        authentication protocol hijacking port cache full duplex netmask address resolution protocol smartcard. Internet 
        subnet mask hardening phishing incident password ransomware intranet domain name system SHA256 authentication. 
        Algorithm kerberos ping of death buffer overflow account harvesting PPTP HTTPS challenge-handshake authentication 
        protocol masquerade. UDP trojan horse fully qualified domain name war dialing encapsulation anonymous.
      </section>
      
      <Footer />
    </>
  )
}

export default App
