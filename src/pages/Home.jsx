import React, { Component } from 'react'
import Mid from '../component/Mid';
import './Home.css';


const content1 =
        [{judul:'kamu'},{judul:'adalah'},
        {judul:'anak'},{judul:'gembala'},
        {judul:'selalu'},{judul:'riang'},
        {judul:'serta'},{judul:'gembira'},
        ]

class Home extends Component {
    state = {
        title: "home",
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

    ubahTitle = () => {
        alert("berhasil");
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Cari Kata</h1>
                <div>{this.state.detik}</div>
                <div>
                <Mid />
                <div className="btn">{content1.map((content1)=> {
                    return (
                    <button onClick={() => this.ubahTitle()}>{content1.judul}</button>
                )})}
                </div>
                </div>
            </div>
        )
    }
}

export default Home