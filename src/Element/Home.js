import {React,Component} from "react";
import { Button, Container } from "react-bootstrap";
import { Card} from 'antd';

import IconElectron from './logo-electron.svg';
import background from '../Element/img/backgroud.jpg';

class Home extends Component{
    constructor(){
        super();
        console.log("contructor called");
    }
    componentDidMount(){
        console.log("contructor called");
    }
    getValue() {
        var Num = document.getElementById("number").value;
        var Root = document.getElementById("rootof").value;
        console.log(Num);
        console.log(Root);
        document.getElementById("shownumber").innerHTML=Num;
        document.getElementById("showrootof").innerHTML=Root;
    }
    createinputMatrics=()=>{
        
    }



    render(){
        
        return (
            <body>
                <div class="Boxpage">
                <div class="content">
                    <h4>PRESENT</h4>
                    <h1 class="auto-type">PROJECT NUMER</h1>
                    
                </div>
            </div>
            <section class="about">
                <div class="main">
                </div>
            </section>
            <div class="contact">
                <div class="title">
                    <h2>CONTACT</h2>
                </div>
                <div class="box">
                <div class="card">
                    <h5>ชั้นไม่รู้และยังคงไม่แน่ใจ</h5> 
                    <p>ชั้นไม่รู้และยังคงไม่แน่ใจ</p> 
                    <p>ชั้นไม่รู้และยังคงไม่แน่ใจ</p> 
                </div>
                <div class="card">
                    <h5>ชั้นไม่รู้และยังคงไม่แน่ใจ</h5> 
                    <p>ชั้นไม่รู้และยังคงไม่แน่ใจ</p> 
                    <p>ชั้นไม่รู้และยังคงไม่แน่ใจ</p> 
                </div>
                
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
            
            </body>
            
        )
    }
}
export default Home;