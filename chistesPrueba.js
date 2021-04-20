
const myHeaders=new Headers();
myHeaders.append("Accept", "application/json");
const requestOptions={

    method: "GET",
    headers:myHeaders,
    redirect: "follow"

};
 let myRequest= new Request ("https://icanhazdadjoke.com/");
 async function fetchChistesJSON() {
  const response = await fetch(myRequest,requestOptions);
  const chistes = await response.json();
  return chistes;
}



fetchChistesJSON().then(result=>{
    console.log(result.joke);
    paragraph.innerHTML = result.joke;
    paragraph.style.display="block";
    });



    