import React, { Component } from 'react'
import Mid from '../component/Mid';


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
        this.setState({title: "Title Berubah!"});
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
                <div>
                    <button onClick={() => this.ubahTitle()}>Kamu</button>
                    <button onClick={() => this.ubahTitle()}>Adalah</button>
                    <button onClick={() => this.ubahTitle()}>Anak</button>
                    <button onClick={() => this.ubahTitle()}>Gembala</button>
                    <button onClick={() => this.ubahTitle()}>Selalu</button>
                    <button onClick={() => this.ubahTitle()}>Riang</button>
                    <button onClick={() => this.ubahTitle()}>Serta</button>
                    <button onClick={() => this.ubahTitle()}>Gembira</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Home