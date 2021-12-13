import React, { Component } from 'react'
import './Home.css';


const content1 =
    [{judul:"kamu"},{judul:"adalah"},
    {judul:"anak"},{judul:"gembala"},
    {judul:"selalu"},{judul:"riang"},
    {judul:"serta"},{judul:"gembira"},
    ]

class Home extends Component {
    state = {
        title: ["kamu","adalah","anak","gembala","selalu","riang","serta","gembira"],
        detik: 0,
        kata: '',
        isEnded: false
    }

    // react component lifecycle
    componentDidMount(){
        let words = this.state.title
        let index = Math.floor(Math.random() * words.length)
        this.setState({kata: words[index]})

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

    ubahTitle = (selectedWord) => {
        console.log('ubahTitle : ', selectedWord);
        
        if (selectedWord == this.state.kata){
        // Yang harus ditampilkan ketika kata dipilih
        // Hapus kata yang dipilih dari array
        // Mengambil kata baru yang akan ditampilkan secara random
        
        let kata2 = this.state.title
        let array2 = kata2.indexOf(selectedWord)

        kata2.splice(array2,1)             
        console.log('test : ',kata2)

        let katabaru = kata2.indexOf(0)

        this.setState({
            detik:0,
            katabaru
        }) 
        }
    }

    render() {
        return (
            <div>
                <h1>Cari Kata</h1>
                <div>{this.state.detik}</div>
                <div className="mid">{this.state.kata}
                </div>
                <div className="btn">{content1.map((content1)=> {
                    return (
                    <button onClick={() => this.ubahTitle(content1.judul)}>{content1.judul}</button>
                )})}
                </div>
            </div>
        )
    }
}

export default Home