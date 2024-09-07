import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    const userName = 'Melon Husk';
    return (
        <div className="profile-container">
            <div className="gradient"></div>
            <div className="profile-down">
                <img src="https://placehold.co/400" alt="profile" />
                <div className="profile-title">{userName}</div>
                <div className="underline"></div>
                <div className="profile-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione error libero laudantium. Eius atque amet, excepturi
                </div>
                <div className="profile-button">
                    <a href="mailto:heyimnomee@duck.com">
                        Contact {userName.split(' ')[0]}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
