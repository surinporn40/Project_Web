import {React,Component} from "react";
import "antd/dist/antd.css";
import { Card,Input,Button} from 'antd';
import { error, func} from '../Element/ChangeNum';
import { det } from 'mathjs';

const InputStyle = {
	background: "#ff6500",
	color: "white",
	fontWeight: "bold",
	fontSize: "15px",
    borderRadius:"35px"
};

var A = [], B = [], X, matrixA = [], matrixB = [], output = []
class Gass extends Component{
    constructor() {
        super();
        this.state = {
            row: 0,
            column: 0,
            showDimentionForm: true,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.gauss = this.gauss.bind(this);

    }

    gauss(n) {
        this.matrixCreate()
        //Forward eliminated
        for (var k = 0; k < n; k++) {
            for (var i = k + 1; i < n; i++) {
                var factor = A[i][k] / A[k][k];
                for (var j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];
            }
        }
        //Backward Substitution
        X = new Array(n);
        X[n - 1] = Math.round(B[n - 1] / A[n - 1][n - 1]); //find Xn
        for (i = n - 2; i >= 0; i--) { //find Xn-1 to X1
            var sum = B[i];
            for (j = i + 1; j < n; j++) {
                sum = sum - A[i][j] * X[j];
            }
            X[i] = Math.round(sum / A[i][i]);
        }
        for (i = 0; i < n; i++) {
            output.push("x" + (i + 1) + " = " + X[i]);
            output.push(<br />)
        }

        this.setState({
            showOutputCard: true
        });

    }
    createMatrix(row, column) {
        A = []
        B = []
        X = []
        matrixA = []
        matrixB = []
        output = []
        for (var i = 1; i <= row; i++) {
            for (var j = 1; j <= column; j++) {
                matrixA.push(<Input style={{
                    width: "18%",
                    height: "50%",
                    backgroundColor: "#DAA520",
                    marginInlineEnd: "5%",
                    marginBlockEnd: "5%",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold"
                }}
                    id={"a" + i + "" + j} key={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
            }
            matrixA.push(<br />)
            matrixB.push(<Input style={{
                width: "18%",
                height: "50%",
                backgroundColor: "#DAA520",
                marginInlineEnd: "5%",
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }}
                id={"b" + i} key={"b" + i} placeholder={"b" + i} />)


        }

        this.setState({
            showDimentionForm: false,
            showMatrixForm: true,
        })


    }
    matrixCreate() {
        for (var i = 0; i < this.state.row; i++) {
            A[i] = []
            for (var j = 0; j < this.state.column; j++) {
                A[i][j] = (parseFloat(document.getElementById("a" + (i + 1) + "" + (j + 1)).value));
                console.log(A[i][j])
            }
            B.push(parseFloat(document.getElementById("b" + (i + 1)).value));
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div style={{padding: "30px" }}>
                <div class="content ">
                    <h2>GAUSS ELIMINATION</h2>
                 </div>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            style={{ background: "orange" , width: 450,height: 480 }}
                            onChange={this.handleChange}
                        >


                            {this.state.showDimentionForm &&
                                <div>
                                    <h4 style={{color:"white"}}>Row</h4><Input size="large" name="row" style={InputStyle}></Input>
                                    <h4 style={{color:"white"}}>Column</h4><Input size="large" name="column" style={InputStyle}></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createMatrix(this.state.row, this.state.column)
                                    }
                                        style={{ background: "#4caf50", color: "white" }}>
                                        Submit<br></br>
                                    </Button>
                                </div>
                            }

                            {this.state.showMatrixForm &&
                                <div>
                                    <h4 style={{color:"white"}}>Matrix [A]</h4><br />{matrixA}
                                    <h4 style={{color:"white"}}>Vector [B]<br /></h4>{matrixB}
                                    <br/>
                                    <Button
                                        id="matrix_button"
                                        style={{ background: "blue", color: "white" }}
                                        onClick={() => this.gauss(this.state.row)}>
                                        Submit
                                    </Button>
                                </div>
                            }
                        </Card>                        
                    </div>
                    <div className="col">
                        {this.state.showOutputCard &&
                            <Card
                                title={"Output"}
                                bordered={true}
                                style={{ background: "black", color: "#FFFFFFFF" }}
                                onChange={this.handleChange} id="answerCard">
                                <p style={{ fontSize: "24px", fontWeight: "bold" }}>{output}</p>
                            </Card>
                        }                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Gass;