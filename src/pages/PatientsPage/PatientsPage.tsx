// PatientsPage.jsx
import React, { useState } from 'react';
import PatientCard from '~/components/PatientCard';
import PatientForm from '~/components/PatientForm';

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (newPatient) => {
    const id = new Date().getTime().toString(); // Generamos un ID único (solo para ejemplo)
    const pacienteConId = { ...newPatient, id };
    setPatients([...patients, pacienteConId]);
  };

  const handleDeletePatient = (id) => {
    const updatedPatients = patients.filter(paciente => paciente.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="patients-page min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Registro de Pacientes</h1>
        <PatientForm onSubmit={handleAddPatient} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {patients.map(paciente => (
            <PatientCard key={paciente.id} paciente={paciente} onDelete={handleDeletePatient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
