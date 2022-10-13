// import { API_BASE_URL } from "../app-config";
// const ACCESS_TOKEN = "ACCESS_TOKEN";

// export function call(api, method, request){
//     let headers = new Headers({
//       "Content-Type": "application/json",
//     });

//     const accessToken = localStorage.getItem("ACCESS_TOKEN");
//     if(accessToken && accessToken !== null){
//       headers.append("Authorization", "Bearer " + accessToken);
//     }
  
//     let options ={
//         headers: headers,
//         url: API_BASE_URL + api,
//         method: method,
//     };

//     if(request){
//         // GET
//         options.body = JSON.stringify(request);
//     }

//     return fetch(options.url, options).then((response) => {
//         if (response.status === 200) {
//           return response;
//         } else if(response.status === 403) {
//           window.location.href = "/login"; // redirect
//         } else {
//           new Error(response);
//         }
//       }).catch((error) => {
//           console.log("http error");
//           console.log(error);
//     });
// }

// export function signin(userDTO){
//     return call("/auth/signin", "POST", userDTO)
//       .then((response) => response.json())
//         .then((data) => {
//           if(data.token){
//             localStorage.setItem(ACCESS_TOKEN, data.token);
//             window.location.href = "/";
//           }
//         });
//         // .then((response) => {
//         //     console.log("response : ", response);
//         //     alert("로그인 토큰: " + response.token);
//         // });
// }

import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

// 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
   if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }
  
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else if(response.status === 403) {
      window.location.href = "/login"; // redirect
    } else {
      new Error(response);
    }
  }).catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) => {
      if (response.token) {
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("ACCESS_TOKEN", response.token);
        // token이 존재하는 경우 Todo 화면으로 리디렉트
        window.location.href = "/";
      }  
    });
}