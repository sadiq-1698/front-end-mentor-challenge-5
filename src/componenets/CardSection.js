import React from 'react';
import Card from './Card';

const CardSection = () => {
    return (
      <div className="cards-section">
  
          <Card 
              class="cyan" 
              header="Supervisor" 
              para="Monitors activity to identify project roadblocks"
              imgPath="/icon-supervisor.svg"
          />
  
          <div className="desktop-card-container">
            <Card 
              class="red" 
              header="Team Builder" 
              para="Scans our talent network to create the optimal team for your project"
              imgPath="/icon-team-builder.svg"
            />
  
            <Card 
              class="orange" 
              header="Karma" 
              para="Regularly evaluates our talent to ensure quality"
              imgPath="/icon-karma.svg"
            />
          </div>
  
          <Card 
            class="blue" 
            header="Calculator" 
            para="Uses data from past projects to provide better delivery estimates"
            imgPath="/icon-calculator.svg"
          />
  
        </div>
    );
}

export default CardSection;