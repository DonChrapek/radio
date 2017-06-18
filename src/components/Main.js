import 'styles/App.css';
import 'styles/reset.css';

import React from 'react';

/* Components */
import Categories from './Categories';

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
            <Categories categories={this.categories}/>
        </div>
        <div className='main-section'>
          <h1>App!</h1>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
