import react from "react";
 function Carousel(){
 return(<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
     aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
     aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
     aria-label="Slide 3"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
     aria-label="Slide 4"></button>

 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="image/chris-karidis-nnzkZNYWHaU-unsplash.jpg" class="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h3>The Eiffel Tower</h3>
       <p>Paris, France</p>
     </div>
   </div>
   <div class="carousel-item">
     <img src="image/david-kohler-VFRTXGw1VjU-unsplash.jpg" class="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h3>The Colosseum</h3>
       <p>Rome, Italy</p>
     </div>
   </div>
   <div class="carousel-item">
     <img src="image/robert-tudor-EjHr26LqfhI-unsplash.jpg" class="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h3>London Bridge
       </h3>
       <p> London, United Kingdom</p>
     </div>
   </div>
   <div class="carousel-item">
     <img src="image/luca-bravo-TaCk3NspYe0-unsplash.jpg" class="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
       <h3>Times Square</h3>
       <p>Manhattan, NY, United States</p>
     </div>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
   data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
   data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button></div>);}
 export default Carousel;