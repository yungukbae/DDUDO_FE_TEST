import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
const {Kakao} = window;

function App() {

  const socialLogin = (social) => {
    let response_data,response_auth;
    Kakao.Auth.login({
      success: function(authObj) {

        console.log(authObj)
        response_auth = authObj;
        Kakao.API.request({
          url: '/v2/user/scopes',
          success:function(res){
            console.log('동의항목보기',res)
          },
          fail:function(res){
            console.log('fail',res)
          }
        });

        //동의 항목 가져오기
        Kakao.API.request({
          url:'/v2/user/me',
          data:{
            property_keys:["kakao_account.profile","kakao_account.email","kakao_account.gender","kakao_account.age"]
          },
          success:function(res){
            console.log('동의항목',res);
            response_data = res;
          },
          fail:function(res){
            console.log(res)
          }
        })

      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
    setTimeout(() => {
      postData('http://localhost:3000/v1/user/signup?user_social=kakao', {
        user_email:response_data.kakao_account.email,
        user_token:response_auth.access_token,
        user_nickname:response_data.kakao_account.profile.nickname
      })
          .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
          .catch(error => console.error(error));
    },1500)
  }

  function postData(url = '', data = {}) {
    // Default options are marked with *
    console.log('url',url,'data',data)
    return axios({
      method: 'post',
      url: 'http://localhost:3000/v1/user/signup?user_social=kakao',
      data:data,
      headers:{
        'Content-type':'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000'
      }
    }).then(res => {console.log(res)});
  }

  return (
    <div className="App">
    <button onClick={(e) => socialLogin()}>login</button>
    </div>
  );
}

export default App;
