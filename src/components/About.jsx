export default function About() {
    const aboutStatis = [
    {
      image: "src/assets/codia-studio-bnlh29.PNG",
      number: "20%",
      title: "lorem ipsum"
    },
    {
      image: "src/assets/codia-studio-kank4b.PNG",
      number: "1.2M",
      title: "dolor sit"
    },
    {
      image: "src/assets/codia-studio-4z4fs1.PNG",
      number: "15+",
      title: "estella des undos"
    },
    {
      image: "src/assets/codia-studio-ppp83l.PNG",
      number: "50+",
      title: "des dolor enstre"
    },
  ];
  return (
    <section className="about-section">  
      <div className="about container">
          <div className="about-content">
            <h2>Sed ut unde<br/>
              <span style={{color: '#1DB497'}}>perspiciatis </span><br/>
              omnis iste natus </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            <button className="btn button-primary">Read More</button>
          </div>
          <div className="about-image">
            <img src="src/assets/codia-studio-wy5vkc.JPG" alt="About Us"/>
          </div>
          <div className="about-stats">
              {aboutStatis.map((stat, index) => (
                  <div className="stats-details" key={index}>
                      <div className="stats-icon">
                          <img src={stat.image} alt={stat.title} />
                      </div>
                      <h3>{stat.number}</h3>
                      <p>{stat.title}</p>
                  </div>
              ))}
          </div>
      </div>
    </section>  
  );
}
