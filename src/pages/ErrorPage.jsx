import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section style={styles.section}>
      <div className="star"></div>
      <div className="bg-white-box" style={styles.imageContainer}>
        <h1 style={styles.text}>Oops! An error occurred.</h1>
        {error && <p style={styles.errorMessage}>{error.data}</p>}
        <img src="/images/404_.jpeg" style={styles.image} alt="Error 404" />
        <NavLink to="/">
          <button style={styles.button}>Go Home</button>
        </NavLink>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "90%",
    maxWidth: "400px",
    margin: "0 auto",
    border: "2px solid transparent",
    background: "linear-gradient(71deg, #080509, #1a171c, #080509)",
    backgroundClip: "padding-box",
    borderRadius: "45px",
  },
  text: {
    position: "absolute",
    top: "53%",
    left: "50%",
    transform: "translate(-50%, 0)",
    color: "#fff",
    fontSize: "1.2rem",
    padding: "10px 0px",
    borderRadius: "5px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "600px",
    maxHeight: "400px",
    objectFit: "contain",
    borderRadius: "48px",
  },
  button: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
  errorMessage: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, 0)",
    color: "#fff",
    fontSize: "1.2rem",
    borderRadius: "5px",
    textAlign: "center",
  },
};
