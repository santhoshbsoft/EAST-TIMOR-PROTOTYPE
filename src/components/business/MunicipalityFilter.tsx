import React from 'react';
import { MapPin } from 'lucide-react';
import { municipalitiesData } from '../../data/municipalities'; // Assume this exports an array of municipality objects with {id, name}

interface MunicipalityFilterProps {
    activeMunicipality: string;
    onMunicipalityChange: (municipality: string) => void;
}

const MunicipalityFilter: React.FC<MunicipalityFilterProps> = ({ activeMunicipality, onMunicipalityChange }) => {
    return (
        <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
                className="block w-full pl-10 pr-10 py-3 text-base border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-tropical-teal focus:border-tropical-teal sm:text-sm rounded-xl appearance-none cursor-pointer shadow-sm transition-colors hover:border-tropical-teal/50"
                value={activeMunicipality}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onMunicipalityChange(e.target.value)}
            >
                <option value="All">All Municipalities</option>
                {municipalitiesData.map((municipality) => (
                    <option key={municipality.id} value={municipality.name}>
                        {municipality.name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </div>
    );
};

export default MunicipalityFilter;
