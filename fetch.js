const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = async (method, url, data) => {
  const res = await fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  });
  if (res.status >= 400) {
    return res.json().then((errResData) => {
      const error = new Error("Something went wrong");
      error.data = errResData;
      throw error;
    });
  }
  return res.json();
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) =>
    console.log(responseData)
  );
};

const postData = async () => {
  try {
    const response = await sendHttpRequest("POST", "https://reqres.in/api/register", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    });
    console.log(response);
  } catch (e) {
    console.log(e, e.data);
  }
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
