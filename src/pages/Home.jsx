import React, { Component } from 'react'
import './Home.css';


const content1 =
    [{judul:'kamu'},{judul:'adalah'},
    {judul:'anak'},{judul:'gembala'},
    {judul:'selalu'},{judul:'riang'},
    {judul:'serta'},{judul:'gembira'},
    ]
        
var content2 = 
    ['kamu','adalah','anak',
    'gembala','selalu','riang',
    'serta','gembira'];

class Home extends Component {
    state = {
        title: ["kamu","adalah","anak","gembala","selalu","riang","serta","gembira"],
        detik: 0
    }

    // react component lifecycle
    componentDidMount(){
        this.interval = setInterval(() => {
            console.log(this.state.detik);
            this.setState({
                detik: this.state.detik + 1
            })
        }, 1000)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    ubahTitle = () => {
        console.log('ubahTitle');
        this.setState({
            title: "test",
            detik:0
        })
    }

    render() {
        return (
            <div>
                <h1>Cari Kata</h1>
                <div>{this.state.detik}</div>
                <div className="mid">{this.state.title}
                </div>
                <div className="btn">{content1.map((content1)=> {
                    return (
                    <button onClick={() => this.ubahTitle()}>{content1.judul}</button>
                )})}
                </div>
            </div>
        )
    }
}

export default Home