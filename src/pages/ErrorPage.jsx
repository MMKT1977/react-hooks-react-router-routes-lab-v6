import NavBar from "../components/NavBar";

function ErrorPage() {
    
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>We couldn't find the page you were looking for.</p>
        <p>Please check the URL or navigate back to the home page.</p>
      </main>
    </>
  );
}

export default ErrorPage;