const stars = document.querySelector('#stars')

const imgs = ["Pic1.jpeg","Pic2.jpeg","Pic3.webp","Pic4.jpeg","Pic5.png","Pic6.webp","Pic7.jpeg","Pic8.webp","Pic9.webp","Pic10.webp"]

window.addEventListener('DOMContentLoaded', function(){
  
  getUser()
})


    async function getUser() {
      
      const api_url = "https://swapi.dev/api/people";
      
      const response = await fetch(api_url);
      
      const data = await response.json();

  let imgArr = imgs.map(function (item, index){
     

      const link = data.results;
     
      
      return `<ul>
      <li id="darth"> <h5>Name: ${link[index].name}</h5></li>
      <li id="darthHeight"> <h6>Height: ${link[index].height}</h6></li>
      <li id="darthGender"> <h6>Gender: ${link[index].gender}</h6></li>
     </ul>
      <img src="images/${item}" alt=${link[index].name}>`;

      

    });
    imgArr = imgArr.join('')
    console.log(imgArr)

    stars.innerHTML = imgArr
    let docuName = document.getElementsByTagName('img')
  }
