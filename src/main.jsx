
import React from 'react'
import ReactDOM from 'react-dom/client'
// import axios from 'axios';
import State01 from './state/State01'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import State02 from './state/State02'

import { Parant02 } from './components/Props/2.Parent';
import ParentComponent from './components/PropsTask/ParentChildTask/1.ParentComponent';
// import ReactStyle01 from './state/ReactStyle01';
// import NasaComponent from './components/NasaAPI/Nasa.Component'
// import NasaComponent from './components/NasaAPI/Nasa.Component'




ReactDOM.createRoot(document.getElementById('root')).render(

<React.Fragment>


<ParentComponent/>
</React.Fragment>
  )
