export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact ">
      <div className="star"></div>
      <div className="container container-card bg-yellow-box">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Enter you email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button type="submit" value="send" className="btn-contact-form">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
