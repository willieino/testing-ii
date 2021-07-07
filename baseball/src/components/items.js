import React from 'react';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'bronze', durability: 50, enhancement: 4, type: 'weapon' },
        { id: 2, name: 'gauntlet', durability: 50, enhancement: 9, type: 'armor'},
        { id: 3, name: 'staff', durability: 50, enhancement: 2, type: 'weapon'}
      ],
  }
  //let itemz = [];
  //itemz = this.state.items;
  }
  
  enhance = item => {
    let itemz = this.state.items
    item.enhancement++;
    console.log("items:", this.state.items);
    console.log("item.enhancement:", item.enhancement);
    
    this.setState(() => ({ items: itemz })); 
    console.log("this.state:", this.state.items)
  }

  render() {
const itemz = this.state.items;
    return (
      <>
        <h3 data-testid="title">Items</h3>
        {itemz.map(i => (
          <div key={i.id}>
            <div data-testid="item">{i.name}</div>
            <div data-testid="enhancement">{i.enhancement}</div>
            <button  data-testid="button" onClick={() => { this.enhance(i) }}>Enhance</button>
          </div>
        ))}
      </>
    );
  };
}
export default Items;