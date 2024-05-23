import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/IPOListPage.css';
import ipoListData from '../data/IPOData.js';

function IPOListPage() {
  return (
    <div className="container">
      <div className="ipo-list">
        <h1>IPO List Page</h1>
        <table>
          <thead>
            <tr>
              <th className="table-heading">Company / Issue date</th>
              <th className="table-heading">Issue Size</th>
              <th className="table-heading">Price Range</th>
              <th className="table-heading">Min Invest/qty</th>
            </tr>
          </thead>
          <tbody>
            {ipoListData.map((ipo) => (
              <tr key={ipo.id}>
                <td>
                  <div className="company-info">
                    <img src={ipo.imageUrl} alt={ipo.company} className="company-logo" />
                    <div>
                      <Link to={`/ipo/${ipo.id}`} className="company-link">
                        {ipo.company}
                      </Link>
                      <div className="issue-dates">{ipo.issueDates}</div>
                    </div>
                  </div>
                </td>
                <td className="bold-text">{ipo.issueSize}</td>
                <td className="bold-text">{ipo.priceRange}</td>
                <td className="bold-text">
                  {ipo.minAmount}
                  <div className="min-qty">100 Shares / 5 lots</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IPOListPage;


