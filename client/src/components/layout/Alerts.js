import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div className="max text-center m-auto">
        <div key={alert.id} className={`alert1 alert1-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      </div>
    ))
  );
};

export default Alerts;
