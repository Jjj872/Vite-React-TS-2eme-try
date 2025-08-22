const AboutSection3 = () => {
  return (
        <section className="section4">
        <div className="section4_wrapper">
            <h2 className="playfair">Contactez-moi</h2>
            <div className="container">
            <p>
                Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me
                contacter, je vous répondrai dans les plus brefs délais.
            </p>
            </div>
            <div className="form_wrapper">
            <form action="#">
                <div id="double_input">
                <input type="text" placeholder="Votre Nom" />
                <input type="text" placeholder="Votre Email" />
                </div>
                <textarea name="message" id="message" placeholder="Votre message"></textarea>
                <div id="checkbox_zone">
                <input type="checkbox" />
                <p>
                    J&apos;accepte que mes données soient traitées conformément à la
                    politique de confidentialité. Elles ne seront utilisées que pour
                    répondre à ma demande.
                </p>
                </div>
                <a href="#">Envoyer le message</a>
            </form>
            </div>
        </div>
        </section>

  );
};

export default AboutSection3;