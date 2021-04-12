import React from 'react';

function Footer(){

    return(
        <>
        <footer className="bg-warning text-center text-white">
    
        <div className="container p-4 pb-0">
          
          <section className="mb-4">

              <h4>Síguenos en nuestras redes sociales</h4>
            
            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #3b5998;"}
              href="#!"
              role="button"
              ><i class="fab fa-facebook-f"></i
            ></a>
      
            
            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #55acee"}
              href="#!"
              role="button"
              ><i className="fab fa-twitter"></i
            ></a>
      
            
            <a
              className="btn btn-dark btn-floating m-1"
              //style={{"background-color: #ac2bac"}}
              href="#!"
              role="button"
              ><i class="fab fa-instagram"></i
            ></a>
      
            
          </section>
          
        </div>
    
        <div class="text-center p-3" //style={{"background-color: rgba(0, 0, 0, 0.2)"}}
        >
          © 2021 Copyright:
        <a 
            class="text-white mx-2" 
            href="https://github.com/vanesacifuentes/Project-eventos-choclo.git">
                 Proyecto Desarrollo de software II
        </a>
        </div>
        
      </footer>
      </>
  );

}export default Footer




