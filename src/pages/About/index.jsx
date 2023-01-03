import Header from "../../components/Home/Header";
import CommentSection from "../../components/About/CommentSection";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div style={{maxWidth: '100%', display:'flex', justifyContent:'center'}}>
        <CommentSection />
      </div>
    </div>
  );
};

export default About;
