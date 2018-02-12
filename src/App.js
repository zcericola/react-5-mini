import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { increment, decrement } from './ducks/counter';



//importing connect in the app.js file


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}


//needed to map state out to props for this component. We won't deal with this.state. Just this.props.
//If you don't need all of state, you can simply return an object that slices off the part of state that you actually need.

function mapStateToProps(state){
  return state;
}

//Another way you might see it:
// const mapStateToProps = state => state;

//exporting connect(mapStateToProps) and also App as usual.
//connect is taking in the state values that we want access to in our component. It gives us the state that we want and then puts it on the component that is chained afterwards (App). We will have access to it with props. We can get props because of mapStateToProps!!! Any component that you want to subscribe to the redux store, you have to connect here with mapStateToProps

//Every connected component has its own version of mapStateToProps
//we also have to add our reducers here. We import and export them.
export default connect(mapStateToProps, {decrement, increment})(App);

