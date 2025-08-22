const ContactSection1 = () => {
  return (
    <section className="contact_section">
      <div className="contact_wrapper">
        <h1 className="playfair">Me contacter</h1>
        <p>
          N'hésitez pas à m'envoyer un message, je vous répondrai dès que
          possible !
        </p>
        <form action="#" method="post" className="contact_form">
          <div className="form_group">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Votre message..."
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>        
  );
};

export default ContactSection1;