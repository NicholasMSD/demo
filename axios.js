const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .post(
      'https://MSD71:20008/Emortelle/Login',
      {
        username: 'MSDSUP',
        password: 'te2312dasf3445yu56s6tyrtgrgdfgdfgdfgdfgdst'
      },
      {
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
