import React , {useState} from 'react'
function Cards(){

  const [textMore,setText]= useState(true)
  const [textMore1,setText1]= useState(true)
  const [textMore2,setText2]= useState(true)
  const [textMore3,setText3]= useState(true)
  const [textMore4,setText4]= useState(true)
  const [textMore5,setText5]= useState(true)

  const changeText=textMore?'Read More ':'Read Less'
  const changeText1=textMore1?'Read More ':'Read Less'
  const changeText2=textMore2?'Read More ':'Read Less'
  const changeText3=textMore3?'Read More ':'Read Less'
  const changeText4=textMore4?'Read More ':'Read Less'
  const changeText5=textMore5?'Read More ':'Read Less'
    return(
    <div class="container my-4">
    <div class="row">
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/c-valdez-XfS0Y9Af-cg-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">South Island, New Zealand</h4>
              <p class="card-text">#1 in World's Best Places to Visit<span id="dots"></span><span id="more"></span>
            </p></center>
              <p>

               <center><button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={()=>setText(!textMore)} >
                  {changeText}
                </button></center>
              </p>
            
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
               New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to
                fjords to glaciers. Here, you can explore Fiordland National Park, a UNESCO World Heritage Area, or
                gaze at the starry skies at Mount John Observatory. You can also indulge your inner daredevil in
                Queenstown, explore two of the most accessible glaciers in the world on the country's west coast or
                sample delicious food and wine in the Marlborough region.
            </div>
          </div>
        </div>
      </div></div>
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/leonard-cotte-R5scocnOOdM-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">Paris, France</h4>
              <p class="card-text">#2 in World's Best Places to Visit<span id="d"></span><span id="m"></span></p></center>
              <p>
<center>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1"
                  aria-expanded="false" aria-controls="collapseExample1" onClick={()=>setText1(!textMore1)} >
                  {changeText1}
                </button></center>
              </p>
            
            <div class="collapse" id="collapseExample1">
              <div class="card card-body">
                Every day, the magnetic City of Light draws visitors from around the globe who come to see iconic
                attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really
                fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and
                unmistakable je ne sais quoi charm. Get lost wandering along Paris' cobblestone streets, or grab a
                croissant and relax on the banks of the Seine for hours.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/cosmic-timetraveler-8xXYqz5X7yo-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">Bora Bora, Island in French Polynesia</h4>
              <p class="card-text">#3 in World's Best Places to Visit<span id="a"></span><span id="b"></span></p> </center>
              <p>

             <center>   <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2"
                  aria-expanded="false" aria-controls="collapseExample2" onClick={()=>setText2(!textMore2)}>
                  {changeText2}
                </button></center>
              </p>
           
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">
                What this small island may lack in size it makes up for in sheer tropical beauty. Here, you'll find
                picturesque beaches, lush jungles and luxurious resorts. The island's dormant volcano, Mount
                Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help
                you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to
                Matira Beach for crystal-clear water and soft sand. Although a trip to Bora Bora is very expensive,
                most travelers say it's worth every penny.

              </div>
            </div>
          </div>
        </div>
      </div>
  
  <div class="container my-4">
    <div class="row">
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/tony-reid-UMJUr3st0AE-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">Glacier National Park, Montana, United States</h4>
              <p class="card-text">#4 in World's Best Places to Visit<span id="e"></span><span id="f"></span></p> </center>
              <p>
<center>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3"
                  aria-expanded="false" aria-controls="collapseExample3" onClick={()=>setText3(!textMore3)}>
                  {changeText3}
                </button></center>
              </p>
           
            <div class="collapse" id="collapseExample3">
              <div class="card card-body">
                Snow-capped peaks and azure lakes are just two reasons why Glacier National Park is one of the
                most-visited parks in the United States. There are more than 700 miles of hiking trails in this
                Montana park, plus 13 designated areas for camping. In winter, travelers can enjoy snowshoeing and
                skiing, while summer is when vacationers can go swimming and whitewater rafting, among other popular
                activities. For those who'd rather admire their surroundings from their car, a scenic drive along
                Going-to-the-Sun Road can't be missed.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/eva-dang-EXdXLrZXS9Q-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">London, United Kingdom</h4>
              <p class="card-text">#5 in World's Best Places to Visit<span id="i"></span><span id="j"></span></p> </center>
              <p>
<center>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4"
                  aria-expanded="false" aria-controls="collapseExample4" onClick={()=>setText4(!textMore4)} >
                  {changeText4}
                </button></center>
              </p>
           
            <div class="collapse" id="collapseExample4">
              <div class="card card-body">
                London is a world unto itself. The eclectic neighborhoods, which house a blend of historical
                landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in
                London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British
                Museum before sitting down to a classic afternoon tea. The best time to travel to London is during
                the warmer months, but be warned that this is also the busiest and most expensive time of year.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card bg-warning"> <img src="image/luca-bravo-3Z70SDuYs5g-unsplash.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <center>
              <h4 class="card-title">Maui, Island in Hawaii</h4>
              <p class="card-text">#6 in World's Best Places to Visit<span id="m"></span><span id="n"></span></p>  </center>
              <p>

              <center> <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5"
                  aria-expanded="false" aria-controls="collapseExample5" onClick={()=>setText5(!textMore5)}>
                  {changeText5}
                </button></center>
              </p>
          
            <div class="collapse" id="collapseExample5">
              <div class="card card-body">
                Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from
                a helicopter, snorkeling with sea turtles or simply relaxing on the island's honey- or black-colored
                beaches, you'll find that Maui is unlike any other tropical destination. Don't miss a chance to
                visit Haleakala National Park, which is home to the world's largest dormant volcano. You should also
                attend a luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and
                mahimahi. .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> </div></div>
   
   );
 
}

export default Cards;