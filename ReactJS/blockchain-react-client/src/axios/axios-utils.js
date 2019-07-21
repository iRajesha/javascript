import axios from 'axios'
export default axios.create({
url:'http://dummy.restapiexample.com/api/v1/employees',
responseType:'json',
crossDomain:true
})
