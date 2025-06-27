import React from 'react';
import '../css/TeamMembers.css'; 
import Image from './images/profile_picture.webp';

const teamMembers = [
    {
        name: 'Mr. V. Yadav',
        role: 'CEO & Founder',
        imgSrc: Image,
      },
      {
        name: 'Jane Doe',
        role: 'Head of Sales',
        imgSrc: Image,
      },
  {
    name: 'John Smith',
    role: 'Lead Trader',
    imgSrc: Image, 
  },

  {
    name: 'Sameet Pawar',
    role: 'Administration and Managing Head',
    imgSrc: Image,
  },
  {
    name: 'Ranjit Yadav',
    role: 'Analytical Head',
    imgSrc: Image,
  },
];

const TeamMembers = () => {
  return (
    <div className="team-members-section"> {/* Updated class name */}
      <h2 className="team-members-title">Our Team</h2> {/* Updated class name */}
      <div className="team-members-container"> {/* Updated class name */}
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}> {/* Updated class name */}
            <div className="team-member-image-container"> {/* Updated class name */}
              <img src={member.imgSrc} alt={member.name} className="team-member-image" /> {/* Updated class name */}
            </div>
            <h3 className="team-member-name">{member.name}</h3> {/* Updated class name */}
            <p className="team-member-role">{member.role}</p> {/* Updated class name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
