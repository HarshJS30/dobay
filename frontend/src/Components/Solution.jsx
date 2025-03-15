import React, { useState } from 'react';
import lap from '../assets/lapp.avif';
import '../assets/sol.css';

const ExpandablePanels = () => {
    const panelsData = [
        { 
          id: 1, 
          title: 'End-to-End Content Creation', 
          content: 'We craft high-quality, engaging videos and reels using AI and in-house tools, eliminating the need for client footage or input. From concept to final edit, we handle it all with precision and creativity.' 
        },
        { 
          id: 2, 
          title: 'Proactive Market Research', 
          content: 'Our team dives deep into your niche, uncovering trending topics and audience preferences to generate tailored content ideas that resonate and drive engagement.' 
        },
        { 
          id: 3, 
          title: 'Seamless Social Media Delivery', 
          content: 'We post your content directly to your social platforms with perfect timing and consistency, ensuring your online presence thrives without any effort on your part.' 
        },
        { 
          id: 4, 
          title: 'Performance Tracking & Optimization', 
          content: 'We monitor key metrics and analyze performance, using data to refine strategies and boost your social media growth continuously.' 
        },
        { 
          id: 5, 
          title: 'Hassle-Free Client Experience', 
          content: 'With no need for video shoots or brainstorming, we deliver a plug-and-play solution, freeing you to focus on your core business while we manage everything.' 
        }
      ];
  const [openPanelId, setOpenPanelId] = useState(1);

  const handlePanelClick = (id) => {
    if (openPanelId !== id) {
      setOpenPanelId(id);
    }
  };

  return (
    <div className="all">
        <h1>What We <span>Do</span>?</h1>
        <div className="sol">
            <div className="expandable-panels">
            {panelsData.map((panel) => (
                <div key={panel.id} className="panel">
                <div 
                    className="panel-header" 
                    onClick={() => handlePanelClick(panel.id)}>
                    <span>{'0'+ panel.id + '.'}</span>
                    {panel.title}
                </div>
                <div className={`panel-content ${openPanelId === panel.id ? 'open' : ''}`}>
                    {openPanelId === panel.id && <div className='con'>{panel.content}</div>}
                </div>
                </div>
            ))}
            </div>
            <div className="solmg">
                <img src={lap} alt="Laptop with video editing interface" />
            </div>
        </div>
    </div>
  );
};

export default ExpandablePanels;
