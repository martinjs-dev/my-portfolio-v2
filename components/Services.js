import Link from "next/link";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const serviceItems = [
    { id: 1, icon: "/assets/img/icons/ui-ux.svg", title: "Application Web" },
    { id: 2, icon: "/assets/img/icons/app.svg", title: "Application Mobile" },
    {
      id: 3,
      icon: "/assets/img/icons/prd-design.svg",
      title: "Architecture Logicielle",
    },
    { id: 4, icon: "/assets/img/icons/branding.svg", title: "CyberSécurité" },
  ];
  return (
    <div className="services-area mt-24">
      <div className="row g-4">
        <div className="col-xl-8">
          <div className="card services-card">
            <div className="card-body">
              <h3 className="card-title">
                Ce Que Je Propose
                <Link className="link-btn" href="/services">
                  {" "}
                  Voir tous les services
                  <svg
                    className="icon"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16699 10H15.8337"
                      stroke="#4770FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.833 15L15.833 10"
                      stroke="#4770FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.833 5L15.833 10"
                      stroke="#4770FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </h3>
              <div className="services-main mt-24">
                <div className="row g-4">
                  <ServiceItem items={serviceItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card lets-talk-together-card">
            <div className="card-body">
              <div className="scrolling-info">
                <div className="slider-item">
                  <p>
                    Available For Hire 🚀 Crafting Digital Experiences 🎨
                    Available For Hire 🚀 Crafting Digital Experiences 🎨
                  </p>
                </div>
              </div>
              <h3 className="card-title">
                Votre Projet, 👋
                <span className="d-block">On En Discutes ?</span>
              </h3>
              <Link className="link-btn" href="/contact">
                {" "}
                Contactez-moi
                <svg
                  className="icon"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.6665V6.6665H12.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
