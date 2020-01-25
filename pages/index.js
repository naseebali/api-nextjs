import React from 'react';
import fetch from 'isomorphic-unfetch';
// import axios from 'axios';
// import fetch from 'unfetch'
// import useSWR from 'swr'


const Home = (props) => {
  
// const { data, error } = useSWR('api/users/', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//  {console.log(data)}
//   return <div>Next stars: {data}</div>
console.log(props);
  return (
  <div>
    <input text="email" name="email" placeholder="email" />
  </div>
  )


  // ou can Access to initial API setup using this url: https://lit-reef-54228.herokuapp.com/

  // for signup: [POST] https://lit-reef-54228.herokuapp.com/api/auth/signup
  // body parameters: name, email, password
  
  // for signin: [POST] https://lit-reef-54228.herokuapp.com/api/auth/signin
  // body parameters: email, password
  
  // for logout: [POST] https://lit-reef-54228.herokuapp.com/api/auth/logout
  // Headers: Authorization: Bearer {token}
  
  // for get current-user: [GET] https://lit-reef-54228.herokuapp.com/api/users/me
  // Headers: Authorization: Bearer {token}


  // return (
  //   <div>

  //   </div>
  // )
}
Home.getInitialProps = async () => {
  const res = await fetch('https://lit-reef-54228.herokuapp.com/api/users')
  const data = await res.data;
  // console.log(res);
  return { stars: data }
}
export default Home;
