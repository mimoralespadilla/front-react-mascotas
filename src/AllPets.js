import React from "react";

export default class AllPets extends React.Component{
  state= { render: false }
  add = () => {
    this.setState({render : !this.state.render})
  }
    
    constructor(){
      super();
      this.state = {mascotas: null};
    }
    componentDidMount(){
      fetch('http://localhost:8080/mascotas/',
      {
        method: 'GET',
      })
      .then(results =>results.json())
      .then(data =>this.setState({mascotas:data}))
      .catch(function(error){console.log(error)});
    }
    _renderMascotas(mascotas,index){
      return <li key={index}>{mascotas.name}-{mascotas.id}</li>
    }
    render(){
      const { mascotas } =this.state;
      return (
        <div>
           <h1>CallAllPets</h1>
           <button onClick={() =>this.add()}>All pets</button>
          {
            this.state.render &&
          <ul>
            {
              mascotas ?
              mascotas.map(this._renderMascotas)
              :
              ""
            }
          </ul>
          }
        </div>
      )
    }
  }