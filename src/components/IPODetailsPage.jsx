import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/IPODetailsPage.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import ipoDetailsData from '../data/IPODetailsData.js'; 
const IPODetailsPage = () => {
  const { id } = useParams();
  const ipo = ipoDetailsData[id];
  const [expanded, setExpanded] = useState(false);

  if (!ipo) {
    return <div>IPO details not found</div>;
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const ipsumShort = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus euismod, 
  dignissim tellus eu, volutpat ante. Nullam interdum ipsum nec sodales tempus.`;

  const ipsumFull = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus euismod, 
  dignissim tellus eu, volutpat ante. Nullam interdum ipsum nec sodales tempus. Curabitur 
  venenatis ipsum ut nulla posuere, vitae euismod odio pulvinar. Fusce et diam auctor, 
  elementum felis vel, placerat risus. Aliquam erat volutpat. Phasellus tincidunt ex vel 
  tortor tincidunt sodales. Ut nec feugiat dolor. Nullam eu fringilla libero. Suspendisse 
  sed lacinia enim. Pellentesque habitant morbi tristique senectus et netus et malesuada 
  fames ac turpis egestas. Sed lacinia massa sit amet est tincidunt, a lobortis erat 
  fermentum. Integer at velit ut mi fringilla efficitur a a eros.`;

  return (
    <div className='container'>
      <div className="ipo-details">
        <h6 className='upper'>home {'>'} Market Watch</h6>
        <div className="ipo-header">
          <div className="nav1">
            <Link to="/" ><IoIosArrowBack className="backButton" /></Link>
            <img src={ipo.imageUrl} alt={ipo.company} className="company-image" />
            <div className="company-details">
              <h1>{ipo.company}</h1>
              <p className="company-more">{ipo.companyMore}</p>
            </div>
          </div>
          <div className="nav2">
            <button className="download-button"><IoDownloadOutline className="downloadicon" /></button>
            <button className="apply-button">Apply now</button>
          </div>
        </div>
        <div className="ipo-info">
          <h2>IPO Details</h2>
          <div className="ipo-info-container">
            <div className="ipo-info-row">
              <div className="ipo-info-item">
                <p className="label">Issue size:</p>
                <p className="value">{ipo.issueSize}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Price range:</p>
                <p className="value">{ipo.priceRange}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Minimum amount:</p>
                <p className="value">{ipo.minAmount}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Lot size:</p>
                <p className="value">{ipo.lotSize}</p>
              </div>
            </div>
            <div className="ipo-info-row">
              <div className="ipo-info-item">
                <p className="label">Issue dates:</p>
                <p className="value">{ipo.issueDates}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Listed on:</p>
                <p className="value">{ipo.listedOn}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Listed price:</p>
                <p className="value">{ipo.listedPrice}</p>
              </div>
              <div className="ipo-info-item">
                <p className="label">Listing gains:</p>
                <div className="listGainDiv">
                  <span>
                    <p className="value">{ipo.listingGains} (</p>
                    <p className="gainPercentage">{ipo.listingGainsPercentage}</p>
                    <p className='value'>)</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ipo-timeline">
          <h2>IPO Timeline</h2>
          <div className="timeline-line"></div>
          <ul>
            {[
              { label: 'Bidding starts', date: `${ipo.issueDates.split(' - ')[0]} 2023` },
              { label: 'Bidding ends', date: `${ipo.issueDates.split(' - ')[1]} 2023` },
              { label: 'Allotment finalization', date: '18 Dec 2023' },
              { label: 'Refund initiation', date: '18 Dec 2023' },
              { label: 'Demat transfer', date: '18 Dec 2023' },
              { label: 'Listing date', date: '21 Dec 2023' }
            ].map((item, index) => (
              <li key={index}>
                <span className="tick"><TiTick className="tickSize" /></span>
                <div className="timeline-item">
                  <p className="labelTimeline">{item.label}</p>
                  <p className="date">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-company">
          <h2>About the company</h2>
          <p>{expanded ? ipsumFull : `${ipsumShort.slice(0, 500)}...`}</p>
          <button onClick={toggleExpand} className="read-more-button">
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IPODetailsPage;



