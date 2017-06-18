import 'styles/App.css';
import 'styles/reset.css';

import React from 'react';

/* Components */
import Header from './Header';
import Categories from './Categories';
import Stations from './Stations';

class AppComponent extends React.Component {
    
  stations = [
      {
          id: 1,
          name: 'Lipsum Rock',
          category: 'Rock',
          img: ''
      },
      {
          id: 2,
          name: '80s Classics',
          category: 'Recommended',
          img: ''
      },
      {
          id: 3,
          name: 'House',
          genre: 'Party',
          img: ''
      },
      {
          id: 4,
          name: 'Trance',
          genre: 'Party',
          img: ''
      },
      {
          id: 5,
          name: 'Classical music',
          genre: 'Others',
          img: ''
      }
  ]
  
  categories = ['Recommended', 'Rock', 'Pop', 'Party', 'Rap', 'Others']
     
  render() {
    return (
      <div id='app-content'>
        <div id='side-panel'>
          <Categories categories={this.categories} />
        </div>
        <div className='main-section'>
          <Header />
          <Stations stations={this.stations} />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
