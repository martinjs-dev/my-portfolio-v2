import Awards from "@/components/Awards";
import BlogSlider from "@/components/Blog";
import Brands from "@/components/Brands";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const counterItems = [
    { id: 1, title: "Ans d'expérience", value: 4 },
    { id: 2, title: "Projets & Intervention", value: 86 },
    { id: 3, title: "Clients Heureux", value: 72 },,
    { id: 3, title: "Clients Heureux", value: 72 },
  ];
  const about = {
    name: "Martin Dohou",
    bio: "Je suis Martin Dohou, développeur fullstack spécialisé en solutions logicielles métier, je combine expertise technique et vision d'ensemble pour comprendre vos besoins métiers et vous proposer des solutions techniques adéquates. </p><br><p>Mon parcours en sciences de l'ingénieur et en informatique me permet d'analyser vos besoins avec précision et d'y répondre par des solutions sur mesure, évolutives et sécurisées.</p>",
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info" style={{ marginBottom: "0px" }}>
              
               <div className="text">
                <h1 className="main-title">
                  Bonjour et bienvenue dans <span>mon univers</span> 👋
                </h1>
              </div>
              <div className="available-btn">
                <span>
                  <i className="fas fa-circle" /> Disponible pour discuter
                </span>
              </div>
            </div>

            <div className="top-info">
              <div className="textdescription">
                <p dangerouslySetInnerHTML={{ __html: about.bio }}></p>
              </div>
            </div>

            <div className="counter-area">
              <div className="counter">
                {counterItems.map((item) => (
                  <div className="counter-item" key={item.id}>
                    <h3 className="number">+{item.value}</h3>
                    <p className="subtitle">{item.title}</p>
                  </div>
                ))}
              </div>
              {/* <div className="circle-area">
                <div className="circle-text">
                  <img
                    className="circle-image"
                    src="assets/img/about-us/circle-text.svg"
                    alt="circle-text"
                  />
                  <img
                    className="circle-image circle-image-light d-none"
                    src="assets/img/about-us/circle-text-light.svg"
                    alt="circle-text"
                  />
                  <span className="arrow-down">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 5V35"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 30L20 35L25 30"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div> */}
            </div>
            <Brands />
            <Testimonial />
            <Awards />
            <BlogSlider />
            <WorkTogether />
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
