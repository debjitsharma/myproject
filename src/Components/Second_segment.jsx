import react from "react";
import About_us from "./About_us";
import Carousel from "./Carosel";
function Second_segment(){
    return( <div class="container-fluid my-4">
    <div class="row">
      <div class="col-sm-4">
          <About_us/></div>
          <div class="col-sm-8">
              <Carousel/>
          </div></div></div>);
}
export default Second_segment;
