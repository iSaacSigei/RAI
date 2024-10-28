import React from 'react';
import './../../../styles/Team.css';
import ProfileImage from './../../../images/enrique.jpeg';
import { TbArrowBadgeRight, TbArrowBadgeLeft } from "react-icons/tb";

const Team = () => {
  return (
    <div className="team container">
        <div className="components-group">
            <TbArrowBadgeLeft className='arrows arrowLeft'/>
            <div className="left component">
                <div className="top">
                    <img src={ProfileImage} alt="" />
                    <div className="details">
                        <h4>Name Name Name</h4>
                        <h6 className="role"><i>Designer, chairman RAIALLIANCE</i></h6>
                    </div>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
                    <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
                </div>
            </div>
            <div className="focused component">
                <div className="top">
                    <img src={ProfileImage} alt="" />
                    <div className="details">
                        <h4>Name Name Name</h4>
                        <h6 className="role"><i>Designer, chairman RAIALLIANCE</i></h6>
                    </div>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
                    <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
                </div>
            </div>
            <div className="right component">
                <div className="top">
                    <img src={ProfileImage} alt="" />
                    <div className="details">
                        <h4>Name Name Name</h4>
                        <h6 className="role"><i>Designer, chairman RAIALLIANCE</i></h6>
                    </div>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere itaque asperiores magni natus consequatur perferendis amet repellendus. Eos doloremque illo officia aut expedita maiores, odit aliquam deserunt tempora nulla.</p>
                    <italic>Quote: Lorem ipsum dolor sit amet consectetur adipisicing elit.</italic>
                </div>
            </div>
            <TbArrowBadgeRight className='arrows arrowRight'/>
        </div>
    </div>
  )
}

export default Team