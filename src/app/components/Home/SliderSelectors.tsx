import React from 'react';

// Define the prop type for Circle
interface CircleProps {
    isSelected?: boolean;
}

const Circle: React.FC<CircleProps> = ({ isSelected = false }) => (
    <svg className={!isSelected ? 'opacity-60' : ''} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.21875" cy="7.21875" r="7.21875" fill="#08BBB9" />
    </svg>
);

function SliderSelectors() {
    return (
        <div className="flex gap-2">
            <Circle isSelected={true} />
            <Circle isSelected={false} />
            <Circle isSelected={false} />
        </div>
    );
}

export default SliderSelectors;
