import React from "react";
import './App.css';

class App extends React.Component {
    state={
        items:[
            1,2,3,4,5,6,7,8,943,459,27,36,54,26,17,44,33,121,314,45,12,56,441
        ]
    }

    handleDeleteItem=()=> {
        this.state.items.pop()
        this.setState(this.state)
    }

    handleAddItem=()=> {
        this.state.items.push(Math.random()*100)
        this.setState(this.state)
    }

    render() {
    return (
        <div className="App">
          <button onClick={this.handleDeleteItem}>Delete Item</button>
          <button onClick={this.handleAddItem}>Add Item</button>
            {this.state.items.map(item=><div key={`${item}`}>{item}</div>)}
        </div>
    );
  }
}

export default App;
