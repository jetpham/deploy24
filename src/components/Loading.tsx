import React from 'react';
import Image from 'next/image'

const Loading = () => {
    return (
        <div>
            <Image src="/icon.png" alt="Loading" width={664} height={664} style={{ animation: 'spin 2s linear infinite' }} />
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