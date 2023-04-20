const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios.get('https://reqres.in/api/users').then(response =>  {
    console.log(response);
  })
};

const postData = async () => {
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: "eve.holt@reqres.in",
      // password: "pistol",
     }, {
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      });
    console.log(response);
  }
  catch(e) {
    console.log(e, e.response, e.response.data);
  }
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
