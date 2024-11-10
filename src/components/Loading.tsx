import React from 'react';

const Loading = () => {
    return (
        <div>
            <img src="/icon.png" alt="Loading" style={{ animation: 'spin 2s linear infinite' }} />
            <style>
                {`
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        img {
            width: 500px;
            height: 500px;
        }
        `}
            </style>
        </div>
    );
};

export default Loading;