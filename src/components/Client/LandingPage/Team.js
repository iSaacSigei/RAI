import React from 'react';
import './../../../styles/Team.css';
import ProfileImage from './../../../images/enrique.jpeg';
import { TbArrowBadgeRight, TbArrowBadgeLeft } from "react-icons/tb";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-components-group">
        <TbArrowBadgeLeft className='team-arrows team-arrow-left'/>
        <div className="team-left team-component">
          <div className="team-top">
            <img src={ProfileImage} alt="" />
            <div className="team-details">
              <h4>Name Name Name</h4>
              <h6 className="team-role"><i>Designer, chairman RAIALLIANCE</i></h6>
            </div>
          </div>
          <div className="team-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
            <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
          </div>
        </div>
        <div className="team-focused team-component">
          <div className="team-top">
            <img src={ProfileImage} alt="" />
            <div className="team-details">
              <h4>Name Name Name</h4>
              <h6 className="team-role"><i>Designer, chairman RAIALLIANCE</i></h6>
            </div>
          </div>
          <div className="team-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
            <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
          </div>
        </div>
        <div className="team-right team-component">
          <div className="team-top">
            <img src={ProfileImage} alt="" />
            <div className="team-details">
              <h4>Name Name Name</h4>
              <h6 className="team-role"><i>Designer, chairman RAIALLIANCE</i></h6>
            </div>
          </div>
          <div className="team-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
            <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
          </div>
        </div>
        <TbArrowBadgeRight className='team-arrows team-arrow-right'/>
      </div>
    </div>
  )
}

export default Team;
