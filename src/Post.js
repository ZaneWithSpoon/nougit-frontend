import React from 'react';
import mohammad from './assets/mohammad.jpg';
import nougit from './assets/Nougit.png';
import './Post.css';

function Post(props) {
  return (
    <div className="Post">
      <header className="Post-header">
        <img src={mohammad} className="user-photo" alt="user photo" />

        <div className="user-info">
            <name  className="user-name">{props.data.userName}</name>
            <bio  className="user-bio">{props.data.userBio}</bio>
        </div>
        <tag className="tag">
            Trending
        </tag>

      </header>
      <projectinfo className="project-info">
        <projectname className="project-name">{props.data.projectName}</projectname>
        <projectdescription className="project-description">{props.data.projectDescription}</projectdescription>
      </projectinfo>
      <projectdetails className="project-details">
        <projectdetailsbody className="project-details-body">
            <img src={nougit} className="project-image" alt="project image" />
            <pledgedata className="pledge-data">
                <pledgeamount className="pledge-amount">${props.data.pledged}</pledgeamount>
                <pledgegoal>pledged of ${props.data.pledgeGoal} goal</pledgegoal>
                <pledgecount className="pledge-count">{props.data.pledgeCount}</pledgecount>
                pledgers
            </pledgedata>
            <pledgebutton className="pledge-button">Pledge</pledgebutton>
        </projectdetailsbody>
        <projectdetailsfooter className="project-details-footer">
            <viewsource className="footer-text">View Source</viewsource>
            <submissions className="footer-text">&lt;/&gt; Code Sumbissions ({props.data.codeSubmissions})</submissions>
            <claimbutton className="claim-button">Claim ${props.data.pledged}</claimbutton>
        </projectdetailsfooter>
      </projectdetails>
      <footer className="footer">
            <comment className="footer-text">Comments ({props.data.comments})</comment>
            <share className="footer-text">Share</share>
            <dots className="footer-dots">•••</dots>
      </footer>
    </div>
  );
}

export default Post;