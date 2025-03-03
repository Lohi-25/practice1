import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image.png'; // Ensure this path is correct

function LandingPage() {
    return (
        <div 
            className="landing" 
            style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                padding: '20px'
            }}
        >
            <h1>Welcome to Houseplant Store</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>

            {/* Get Started Button */}
            <Link to="/products">
                <button 
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '18px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}
                >
                    Get Started
                </button>
            </Link>
        </div>
    );
}

export default LandingPage;
