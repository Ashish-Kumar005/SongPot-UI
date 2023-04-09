const Home4Section = ({ textSection }) => {
  return (
    <>
      <div >
        {textSection.map((item, index) => {
          return (
            <div className="home4-text-wrapper" key={index}>
              <h2 className="heading">{item.title}</h2>
              <p className="paragraph">{item.subHeading}</p>
              <p className="sub-paragraph">{item.description}</p>
              <button className="btn home4-btn">{item.btn}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home4Section;
