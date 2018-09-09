import React, { Component } from 'react';


function propertyMap (arr) {
  return arr.map(item => {
    var style = {
      backgroundColor: item.agency.brandingColors.primary

    }

    return (
      <div className="Card-container" key={item.id}>
        <div style={style}>
          <img src={item.agency.logo}/>  
        </div>
          <img src={item.mainImage} width = "250" height="250"/>
          <p>{item.price}</p>      
      </div>
    )
  })
}

export class CardLists extends Component {
  render(){
    
    const {results} = this.props;
    //const cardList = propertyMap(results)
    // const cardList = results.map( card => {
    //   return (
    //     <div className="Card-container" key={card.id}>
    //       <img src={card.agency.logo}/> 
    //       <img src={card.mainImage} width = "250" height="250"/>
    //       <p>{card.price}</p>
          
    //     </div>
    //   )
    // })
    return(
      <div>{propertyMap(results)}</div>
    )

  }
  
  }

  export class SavedProperties extends Component {
    render(){
      return(
        <div>{propertyMap(this.props.savedcard)}</div>
      )
  
    }
    
    }
