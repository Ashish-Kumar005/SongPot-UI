import { HashLink } from "react-router-hash-link";

const Home4Section = ({ textSection , className}) => {
  return (
    <>
      <div >
        {textSection.map((item, index) => {
          return (
            <div className={`home4-text-wrapper ${className}`} key={index}>
              <h2 className="heading">{item.title}</h2>
              <p className="paragraph">{item.subHeading}</p>
              <p className={`sub-paragraph ${item.color}`}>{item.description}</p>
              <HashLink to = {"/game-unfold"}><button className={`btn home4-btn ${item.hidden}`}>{item.btn}</button></HashLink>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home4Section;
