import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height: "500px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3a4256'}}>Your new smile <br/> start here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ratione quos qui id eum incidunt.</p>
                <button style={{backgroundColor: '#1cc7c1'}} className="btn">Get Appointments</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="chair" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;