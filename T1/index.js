
let breedData=[]

function showModal(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

function searchFilter() {
    let input, filter,  b, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    let div = document.getElementById("search-options-container");
    b = div.getElementsByTagName("button");
    for (i = 0; i < b.length; i++) {
      let txtValue = b[i].textContent || b[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        b[i].style.display = ""
      } else {
        b[i].style.display = "none"
      }
    }
}

async function fetchBreeds(){
    try{
        const data = await fetch(`https://api.thecatapi.com/v1/breeds`)
        const response = await data.json() 
        breedData = response.map(x=>({id:x.id,name:x.name}))
    }catch(e){
        console.error(e)
    }
    
    console.log(breedData)

    let div = document.getElementById("search-options-container");
    const filterinput = div.firstElementChild 
    div.innerHTML=""
    div.appendChild(filterinput)

    breedData.forEach(b=>{
        const button = document.createElement('button')
        button.classList.add('w3-bar-item','w3-button')
        button.innerHTML = b.name
        button.onclick = ()=>{
            updateCats(b)
            document.getElementById("search-input").value="";
            searchFilter()
        }
        div.appendChild(button)
    })
}

async function fetchCats(breed){
    let data=[]
    let response=[]

    try{
        if(breed)
            data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9&breed_id=${breed}`)
        else
            data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=9`)
        response = await data.json()
    }catch(e){
        console.error(e)
    }

    console.log(response)
    return response
}

async function updateCats(breed){
    const data = await fetchCats(breed.id)
    const catContainer=document.querySelector('#cat-card-container')
    const breedHeader= catContainer.firstElementChild
    breedHeader.innerHTML=breed.name
    catContainer.innerHTML = ''
    catContainer.appendChild(breedHeader)

    data.forEach(e => {
        const catImg = document.createElement('img')
        catImg.classList.add('cat-img','w3-col','s12','m6','l4','w3-round','w3-center')
        catImg.onclick=()=>showModal(catImg)
        catImg.src=e.url

        catContainer.appendChild(catImg)
    });

}

async function updateCatsRandom(){
    const randomBreedId = breedData[Math.floor(Math.random()*breedData.length)]
    updateCats(randomBreedId)
}

async function startup(){
    await fetchBreeds()
    updateCatsRandom()
}

startup()

