// src/data/ipoDetailsData.js

import goAirImage from '../assets/goair.png';
import bajajEnergyImage from '../assets/bajajEnergy.jpeg';
import oyoImage from '../assets/oyo.png';
import relianceImage from '../assets/reliance.jpeg';
import airtelImage from '../assets/airtel.jpeg';
import tataImage from '../assets/tata.webp';

const ipoDetailsData = {
  1: {
    company: 'GO AIR',
    companyMore: 'GO AIR private limited',
    issueSize: '₹3,600 Crores',
    priceRange: '₹50 - 60',
    minAmount: '₹50,000',
    lotSize: '100 shares/lots',
    issueDates: '4th - 7th Oct 2022',
    listedOn: '10 Oct 2022',
    listedPrice: '₹55',
    listingGains: '₹5',
    listingGainsPercentage: '10.0%',
    imageUrl: goAirImage,
  },
  2: {
    company: 'BAJAJ ENERGY',
    companyMore: 'BAJAJ ENERGY private limited',
    issueSize: '₹3,600 Crores',
    priceRange: '₹50 - 60',
    minAmount: '₹50,000',
    lotSize: '100 shares/lots',
    issueDates: '4th - 7th Oct 2022',
    listedOn: '10 Oct 2022',
    listedPrice: '₹58',
    listingGains: '₹8',
    listingGainsPercentage: '13.3%',
    imageUrl: bajajEnergyImage,
  },
  3: {
    company: 'OYO',
    companyMore: 'OYO private limited',
    issueSize: '₹3,600 - 3,700 Cr.',
    priceRange: '₹100 - 200',
    minAmount: '₹50,000',
    lotSize: '150 shares/lots',
    issueDates: '12 Dec - 15 Dec 22',
    listedOn: '15 Dec 22',
    listedPrice: '₹150',
    listingGains: '₹10',
    listingGainsPercentage: '10.0%',
    imageUrl: oyoImage,
  },
  4: {
    company: 'RELIANCE RETAIL',
    companyMore: 'Reliance Retail Ventures Limited',
    issueSize: '₹25,000 - 30,000 Cr.',
    priceRange: '₹900 - 1,000',
    minAmount: '₹100,000',
    lotSize: '50 shares/lots',
    issueDates: '1st - 4th Nov 2022',
    listedOn: '8 Nov 2022',
    listedPrice: '₹980',
    listingGains: '₹80',
    imageUrl: relianceImage,
    listingGainsPercentage: '8.2%',
  },
  5: {
    company: 'AIRTEL PAYMENTS BANK',
    companyMore: 'Airtel Payments Bank Limited',
    issueSize: '₹6,000 - 7,000 Cr.',
    priceRange: '₹300 - 350',
    minAmount: '₹25,000',
    lotSize: '75 shares/lots',
    issueDates: '5th - 8th Nov 2022',
    listedOn: '15 Nov 2022',
    listedPrice: '₹330',
    listingGains: '₹30',
    imageUrl: airtelImage,
    listingGainsPercentage: '9.1%',
  },
  6: {
    company: 'TATA NEWGEN',
    companyMore: 'Tata NewGen Technologies Limited',
    issueSize: '₹4,500 - 5,000 Cr.',
    priceRange: '₹150 - 180',
    minAmount: '₹30,000',
    lotSize: '100 shares/lots',
    issueDates: '10th - 13th Nov 2022',
    listedOn: '20 Nov 2022',
    listedPrice: '₹170',
    listingGains: '₹20',
    imageUrl: tataImage,
    listingGainsPercentage: '11.8%',
  },
};

export default ipoDetailsData;
