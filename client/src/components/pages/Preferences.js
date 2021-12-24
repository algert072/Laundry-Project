import React , { useContext, useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';
import PreferenceContext from '../../context/preference/preferenceContext';

const Preferences = () => {
  const preferenceContext = useContext(PreferenceContext);
  const { preferences } = preferenceContext;
  const [preferenceData , setPreferenceData] = useState(preferences)
  useEffect(() => {
    preferenceContext.getPreference();
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    setPreferenceData(preferences);
    // eslint-disable-next-line
  }, [preferences])
  return (
    <>
      <div className="containerP border p-5 my-5">
        <div className="fs-3 mb-5">
          <i className="far fa-address-card"></i> Your Preferences
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Detergent:</div>
            <div className="col-sm-4">{preferenceData.detergent}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Fabric Softener:</div>
            <div className="col-sm-4">{preferenceData.fabricSoftener}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Bleach for Whites:</div>
            <div className="col-sm-4">{preferenceData.bleachForWhites}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Water Temp. Dark:</div>
            <div className="col-sm-4">{preferenceData.waterTempDark}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Water Temp. Light:</div>
            <div className="col-sm-4">{preferenceData.waterTempLight}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Water Temp. White:</div>
            <div className="col-sm-4">{preferenceData.waterTempWhite}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Drying:</div>
            <div className="col-sm-4">{preferenceData.drying}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Dryer Sheets:</div>
            <div className="col-sm-4">{preferenceData.dryerSheets}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Pants:</div>
            <div className="col-sm-4">{preferenceData.foldingPants}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Dress Shirts:</div>
            <div className="col-sm-4">{preferenceData.foldingDressShirts}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Skirts:</div>
            <div className="col-sm-4">{preferenceData.foldingSkirts}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Jeans:</div>
            <div className="col-sm-4">{preferenceData.foldingJeans}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Golf Shirts:</div>
            <div className="col-sm-4">{preferenceData.foldingGolfShirts}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Laundry Instructions:</div>
            <div className="col-sm-4">{preferenceData.laundryInstructions ? preferenceData.laundryInstructions : 'None'}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Dry Cleaning Instructions:</div>
            <div className="col-sm-4">{preferenceData.dryCleaningInstructions ? preferenceData.dryCleaningInstructions : 'None'}</div>
          </div>
        </div>
        <div className="pt-4 border-bottom">
          <div className="row mb-2">
            <div className="col-sm-4">Folding Instructions:</div>
            <div className="col-sm-4">{preferenceData.foldingInstructions ? preferenceData.foldingInstructions : 'None'}</div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="col-4 d-grid">
          <Link to="/editPreferences">
            <button type="submit" className="btn btnCustom btn-outline-primary">
              Edit
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Preferences;
