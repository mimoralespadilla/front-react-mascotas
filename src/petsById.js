import React from "react";

export default class PetsById extends React.Component{
  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.State = {value:this.handleSubmit};

    }

  handleChange(event){
      this.setState({value:event.target.value})
  }
  handleSubmit(event){
      fetch('http://localhost:8080/mascotas/'+this.state.value,
      {
          method:'GET',
      })
      .then(result => result.json())
      .then(data=>this.setState({mascotas:data}))
      .catch(function(error){console.log(error)});
  }
  _renderMascotas(mascotas,index){
    return <li key={index}>{mascotas.name}-{mascotas.id}</li>
  }
  render(){
    const { mascotas } =  this.state.value;
      return (
          <div>
              <h1>callPetsById</h1>
              <form onSubmit={this.handleSubmit}>
              Id:
              <input name="id" type="text" value={this.state.value} onChange={this.handleChange}></input>
              <input type="submit" value="Submit" ></input>
              </form>
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