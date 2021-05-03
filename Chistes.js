function fetchChistes (){

const myHeaders=new Headers();
myHeaders.append("Accept", "application/json");
const requestOptions={

    method: "GET",
    headers:myHeaders,
    redirect: "follow"

};

 let myRequest= new Request ("https://icanhazdadjoke.com/");
  const fetchChistesJSON= async()=> {
  const response = await fetch(myRequest,requestOptions);
  const chistes = await response.json();
    return chistes;

}

fetchChistesJSON().then(chistes=>{
    paragraph.innerHTML = chistes.joke;
    });
}
fetchChistes();