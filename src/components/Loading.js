import React from 'react'
import './Loading.css'
// import Loader from 'react-loader-spinner'
// import $ from 'jquery'
import {FiCodesandbox} from 'react-icons/fi'
// <div className='IconLoad d-flex justify-content-center animated infinite bounce delay-2s'
//     style={{color:'#64FFDA',border:"2px solid #64FFDA"}}>
//   <FiCodesandbox color="" size='8vw'/>
// </div>

class Loading extends React.Component {
  render(){
    return (
      <div className='container d-flex justify-content-center align-items-center Loading'>
          <div className='IconLoad d-flex justify-content-center'>
            <div className='IconLoad2 d-flex justify-content-center' >
              <FiCodesandbox color="#64FFDA" size='8vw'/>
            </div>
          </div>
    </div>
    );
  }
}

export default Loading
