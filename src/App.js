import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './loginform';
import AdminHome from './adminhome';
import LocalHome from './localhome';
import DoctorHome from './doctorhome';
import PharmacyHome from './pharmacyhome';
import HealthRecords from './healthrecords';
import HealthRecordsForDoc from './healthrecordsfordoc';
import CurrentMedications from './currentmedications';
import CreateTicket from './createticket';
import PharmacyNearMe from './pharmacynearme';
import PatientProfile from './patientprofile';
import DocProfile from './docprofile';
import SignupForm from './signupform';
import RoleBasedPage from './rolebasedpage';
import Medicines from './medicines';
import PatientInfo from './patientinfo';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login form */}
        <Route path="/" element={<LoginForm />} />
        
        {/* Signup form */}
        <Route path="/signupform" element={<SignupForm />} />

        {/* Admin home */}
        <Route path="/admin" element={<AdminHome />} />

        {/* Patient home */}
        <Route path="/local" element={<LocalHome />} />

        {/* Doctor home */}
        <Route path="/doctor" element={<DoctorHome />} />

        {/* Pharmacy home */}
        <Route path="/pharmacy" element={<PharmacyHome />} />

        {/* Health records */}
        <Route path="/health-records" element={<HealthRecords />} />

        {/* Health records */}
        <Route path="/healthrecordsfordoc" element={<HealthRecordsForDoc />} />

        {/* Current medications */}
        <Route path="/current-medication" element={<CurrentMedications />} />

        {/* Create ticket */}
        <Route path="/create-ticket" element={<CreateTicket />} />

        {/* Patient profile */}
        <Route path="/patientprofile" element={<PatientProfile />} />

        {/* Patient profile */}
        <Route path="/docprofile" element={<DocProfile />} />

        {/* Pharmacy near me */}
        <Route path="/pharmacynearme" element={<PharmacyNearMe />} />

        {/* Pharmacy near me */}
        <Route path="/rolebasedpage" element={<RoleBasedPage />} />

        {/* Pharmacy near me */}
        <Route path="/medicines" element={<Medicines />} />

        {/* Pharmacy near me */}
        <Route path="/patientinfo" element={<PatientInfo />} />

        {/* Fallback route for undefined paths (optional) */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
