import React from 'react';
import './footer.css'

function Footer() {

  return (
    <>
      <footer className=" footer text-center text-white">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <h4>Síguenos en nuestras redes sociales</h4>

            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #3b5998;"}
              href="https://es-la.facebook.com"
              target="_blank"
              role="button"
            ><i class="fab fa-facebook-f"></i
            ></a>


            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #55acee"}
              href="https://twitter.com"
              target="_blank"
              role="button"
            ><i className="fab fa-twitter"></i
            ></a>


            <a
              className="btn btn-dark btn-floating m-1"
              href="https://www.instagram.com"
              target="_blank"
              role="button"
            ><i className="fab fa-instagram" ></i>
            </a>

          </section>

        </div>

        <div class="text-center p-3"
        >
          © 2021 Copyright:
        <a
            class="text-white mx-2"
            href="https://github.com/vanesacifuentes/Project-eventos-choclo.git"
            target="_blank">
            Proyecto Desarrollo de software II
        </a>
        </div>

      </footer>
    </>
  );

} export default Footer




