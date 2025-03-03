import React from 'react';
import image from './assets/image.png'; // Ensure the path is correct

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={image} alt="Custom Logo" width="150" />
                <h1>Welcome to Houseplant Store</h1>
            </header>
        </div>
    );
}

export default App;
