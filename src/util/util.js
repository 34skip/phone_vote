import axios from 'axios'
import qs from 'qs'
// import { Message } from 'element-ui'

var URL = 'http://app.udian.me/system046/api/web/v1/'

/**
 * post接口公共方法
 */
export const uploadFile = (File, Type, rtntype, successBack, errorBack) => {
  console.log(File)
  let header = localStorage.getItem('AccessToken') ? {
    AccessToken: localStorage.getItem('AccessToken')
  } : {}
  header['Content-Type'] = 'application/x-www-form-urlencoded'
  var formdata = new FormData()
  formdata.append('file', File)
  formdata.append('type', Type)
  formdata.append('rtntype', rtntype)
  formdata.append('authToken', '')
  formdata.append('token', 'c92114bcc9e4454f1d2b7399dc9d62a9')
  formdata.append('time', '1480576266')
  axios({
    method: 'POST',
    url: URL + 'index/uploads',
    headers: header,
    data: formdata
  }).then(function (response) {
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
export const post = (_url, _postData, successBack, errorBack,type) => {

  let header = localStorage.getItem('AccessToken') ? {
    AccessToken: localStorage.getItem('AccessToken')
  } : {}
  header['Content-Type'] = 'application/x-www-form-urlencoded'
  axios({
    method: 'POST',
    url:_url === 'http://app.ttouch.com.cn/qzd/frontend/web/site/pay'?_url: URL + _url,
    // url:_url,
    headers: header,
    data: qs.stringify(_postData)
  }).then(function (response) {
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
export const postnourl = (_url, _postData, successBack, errorBack) => {
  let header = localStorage.getItem('AccessToken') ? {
      AccessToken: localStorage.getItem('AccessToken')
    } : {}
  header['Content-Type'] = 'application/x-www-form-urlencoded'
  axios({
    method: 'POST',
    url:_url,
    headers: header,
    data: qs.stringify(_postData)
  }).then(function (response) {
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
export const put = (_url, _postData, successBack, errorBack) => {
  let header = localStorage.getItem('AccessToken') ? {
    AccessToken: localStorage.getItem('AccessToken')
} : {}

  header['Content-Type'] = 'application/x-www-form-urlencoded'

  axios({
    method: 'PUT',
    url: URL + _url,
    headers: header,
    data: qs.stringify(_postData)
  }).then(function (response) {
    console.log(response)
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
export const get = (_url, header, _postData, successBack, errorBack) => {
   var jsonHead = {}
   if (header !== '') {
     for (let key in header) {
       jsonHead[ key ] = header[ key ]
     }
   }
  jsonHead[ 'Content-Type' ] = 'application/x-www-form-urlencoded'
  header = jsonHead
    axios({
      method: 'GET',
      url:URL + _url,
      headers: header,
      params: _postData,
      transformResponse: [function (data) {
        data = JSON.parse(data)
        return data
      }]
    })
    .then(function (response) {
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
      console.log(error)
      let data = error.response.data // 报错返回的数据
      if (errorBack) {
        errorBack(data)
      } else {
        console.log(data.Message)
      }
  })
}
export const del = (_url, _postData, successBack, errorBack) => {
  let header = localStorage.getItem('AccessToken') ? {
    AccessToken: localStorage.getItem('AccessToken')
  } : ''

  header['Content-Type'] = 'application/x-www-form-urlencoded'
  axios({
    method: 'DELETE',
    url: URL + _url,
    headers: header,
    params: _postData
  })
    .then(function (response) {
      let data = response.data
      if (response.status === 200) {
        successBack(data)
      }
    }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
export const patch = (_url, _postData, successBack, errorBack) => {
  let header = localStorage.getItem('AccessToken') ? {
      AccessToken: localStorage.getItem('AccessToken')
    } : {}
  header['Content-Type'] = 'application/x-www-form-urlencoded'
  axios({
    method: 'PATCH',
    url: URL + _url,
    headers: header,
    data: qs.stringify(_postData)
  }).then(function (response) {
    let data = response.data
    if (response.status === 200) {
      successBack(data)
    }
  }).catch(function (error) {
    console.log(error)
    let data = error.response.data // 报错返回的数据
    if (errorBack) {
      errorBack(data)
    } else {
      console.log(data.Message)
    }
  })
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const Filebase = 'http://203.156.232.106/EResourceMSys/'
export const Url = 'http://203.156.232.106/EResourceMSys/api/'
