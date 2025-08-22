const HomeSection2 = () => {
  return (
    <section className="section2">
    <h2 className="playfair">À propos de moi</h2>
    <div className="section2_wrapper">
        <div className="parcours">
        <h3 className="playfair">Mon parcours</h3>
        <p>
            Diplômée en développement web, je combine des compétences techniques
            solides avec une sensibilité esthétique pour créer des sites web et
            applications qui sont à la fois fonctionnels et visuellement attrayants.
        </p>
        <p>
            J&apos;ai depuis réalisé plusieurs projets personnels et scolaires. Mon
            objectif est de devenir développeur front-end tout en continuant à
            explorer le back-end.
        </p>
        <p id="for_a_padding_bottom">
            Passionnée par les technologies web modernes et je m&apos;efforce
            constamment de perfectionner mes compétences pour créer des expériences
            utilisateur à la fois intuitives, performantes et esthétiques.
        </p>
        <a href="about.html" className="anim">
            En savoir plus sur mon parcours →
        </a>
        </div>

        <div className="section2div2wrapper">
        <h3 className="playfair">Mes compétences</h3>
        <div className="competences">
            <div>
            <img src="images/icons8-html5.svg" alt="icon for html5" />
            <p>HTML5</p>
            </div>
            <div>
            <img src="images/icons8-css3.svg" alt="icon for css3" />
            <p>CSS3</p>
            </div>
            <div>
            <img src="images/icons8-javascript.svg" alt="icon for javascript" />
            <p>JavaScript</p>
            </div>
            <div>
            <img src="images/circle-svgrepo-com.svg" alt="circle icon" />
            <p>Responsive</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
};

export default HomeSection2;
