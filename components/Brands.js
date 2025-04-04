const Brands = () => {
  const brandItems = [
    { id: 16, icon: "assets/img/icons/neomedias.webp", name: "Néo Médias", url: "https://neo-medias.com/" },
    { id: 13, icon: "assets/img/icons/fondationfmm.png", name: "Fondation FMM", url: "https://fondationfmm.com/" },
    { id: 1, icon: "assets/img/icons/aaconceptstore-golfe-sttropez.svg", name: "A&A Concept Store Golfe de Saint Tropez", url: "https://aaconceptstore-golfe-sttropez.fr/" },
    { id: 2, icon: "assets/img/icons/comeup.svg", name: "ComeUp", url: "https://comeup.com/fr/@martin-js" },
    { id: 3, icon: "assets/img/icons/cleaningheroes.png", name: "Cleaning Heroes", url: "https://cleaningheroes.ch/" },
    { id: 4, icon: "assets/img/icons/unilependentif.png", name: "Unile Pendentif", url: "https://unilependentif.fr/" },
    { id: 5, icon: "assets/img/icons/chauffeurg8.png", name: "Chauffeur G8", url: "https://chauffeurg8.fr/" },
    { id: 6, icon: "assets/img/icons/curanderas.png", name: "Curanderas", url: "https://curanderas.fr/" },
    { id: 8, icon: "assets/img/icons/arystead.png", name: "Ary Stead", url: "https://arystead.com/" },
    { id: 9, icon: "assets/img/icons/cabinetvay.png", name: "Cabinet Vay", url: "https://cabinetvay.com/" },
    { id: 10, icon: "assets/img/icons/a-l-abordage-moussaillon.png", name: "À l'abordage Moussaillon", url: "https://a-l-abordage-moussaillon.com/" },
    { id: 11, icon: "assets/img/icons/lorient-express.webp", name: "L'orient Express", url: "https://www.lorient-express.fr/" },
    { id: 12, icon: "assets/img/icons/rgoal-coaching.png", name: "RGoal Coaching", url: "https://rgoalcoaching.fr/" },
    { id: 14, icon: "assets/img/icons/auvergnesancyautotour.png", name: "Auvergne Sancy Auto Tour", url: "https://auvergnesancyautotour.fr/" },
    { id: 15, icon: "assets/img/icons/GEFAP-officiel.png", name: "GEFAP Officiel", url: "https://www.gestion-facile-artisan-pme.com/" },
    { id: 16, icon: "assets/img/icons/escalecrossfit.png", name: "Escale Cross Fit", url: "https://escalecrossfit.com/" },
    { id: 16, icon: "assets/img/icons/e-connex-web-marketing.png", name: "e-connex Web Marketing", url: "https://e-connex-web-marketing.tech/" },
    { id: 16, icon: "assets/img/icons/awinz.png", name: "Awinz MarketPlace", url: "https://awinz.net/" },
    { id: 16, icon: "assets/img/icons/papilles-sans-gluten.png", name: "Papilles Sans Gluten", url: "https://papillesansgluten.com/" },
    { id: 16, icon: "assets/img/icons/transition-turquoise.png", name: "Transition Turquoise", url: "https://transition-turquoise.fr/" },
    { id: 16, icon: "assets/img/icons/ekfacades.png", name: "EK Façades", url: "https://ekfacades-toulouse.fr/" },
    { id: 16, icon: "assets/img/icons/technostatgroup.png", name: "Techno Stat Group", url: "https://technostatgroup.com/" },
    { id: 16, icon: "assets/img/icons/mieldumonde.png", name: "Miel du Monde", url: "https://mieldumondefr.com/" },
    { id: 16, icon: "assets/img/icons/lokapart.png", name: "Lokapart", url: "https://lokapart.com/" },
  ];
  return (
    <div className="working-with-area">
      <h2 className="main-common-title">
        Ils m'ont faut confiance ! ✨ En Afrique & en Europe
      </h2>
      <div className="working-with-main">
        {brandItems.map((item) => (
          <div className="items" key={item.id}>
            <a href={item.url} target="blank"><img src={item.icon} alt={item.name} /></a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
