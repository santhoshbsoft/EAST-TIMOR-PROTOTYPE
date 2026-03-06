import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ModuleCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    path: string;
    image: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, icon: Icon, path, image }) => {
    const navigate = useNavigate();

    return (
        <Link
            to={path}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-sunset-peach/30 h-full"
        >
            {/* Image Section */}
            <div className="relative w-full aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay for Top Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Icon overlaid inside the image area */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 group-hover:bg-sunset-coral/80 group-hover:border-sunset-coral transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-ocean-deep transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow line-clamp-2">
                    {description}
                </p>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(path);
                    }}
                    className="flex items-center text-sunset-coral font-medium mt-auto transition-transform duration-300 group-hover:translate-x-1"
                >
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>
        </Link>
    );
};

export default ModuleCard;
