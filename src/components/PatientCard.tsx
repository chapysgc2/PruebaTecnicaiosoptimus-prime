// PatientCard.jsx
import React from 'react';

const PatientCard = ({ paciente, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{paciente.nombre}</div>
        <p><strong>Edad:</strong> {paciente.edad}</p>
        <p><strong>Peso:</strong> {paciente.peso}</p>
        <p><strong>Propietario:</strong> {paciente.propietario}</p>
        <p><strong>Teléfono:</strong> {paciente.telefono}</p>
        <p><strong>Síntomas:</strong> {paciente.sintomas}</p>
        <p><strong>Fecha de próxima cita:</strong> {paciente.fechaCita}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => onDelete(paciente.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
