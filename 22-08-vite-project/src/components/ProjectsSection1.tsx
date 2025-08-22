const ProjectsSection1 = () => {
  return (
    <section className="section3">
      {/* CARDS SECTION */}
      <div className="section3_wrapper">
        <h2 className="playfair">Mes projets récents</h2>
        <p className="section3_wrapper_p">
          Découvrez une sélection de mes travaux récents qui démontrent mes
          compétences en développement web et design d'interface.
        </p>

        <div className="cards">
          {/* Card 1 */}
          <div className="onecard">
            <img src="images/delicesucre.jpg" alt="Projet Délices Sucrés" />
            <div className="info_zone">
              <h3 className="playfair">Délices Sucrés</h3>
              <p>
                Conception d'une interface responsive au design raffiné, mettant
                en valeur les produits grâce à une mise en page soignée et une
                expérience utilisateur immersive.
              </p>
              <div id="section3_skills_infos">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Responsive</p>
              </div>
              <a href="Delice Sucre/Délices_Sucrés.html" className="animation">
                Voir le projet →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="onecard">
            <img src="images/todoapp.jpg" alt="Projet To Do List" />
            <div className="info_zone">
              <h3 className="playfair">To Do List</h3>
              <p>
                Gérez vos tâches facilement avec cette todo list claire et
                intuitive. Ajoutez, modifiez et supprimez vos tâches en toute
                simplicité.
              </p>
              <div id="section3_skills_infos">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
              </div>
              <a
                href="https://todolist2105.netlify.app/"
                className="animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>        
  );
};

export default ProjectsSection1;