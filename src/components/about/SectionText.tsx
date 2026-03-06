import React from 'react';

const SectionText = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
    <div className={`mb-16 ${className}`}>
        <h2 className="text-3xl font-serif font-bold mb-6 text-sunset-coral">{title}</h2>
        <div className="opacity-80 leading-relaxed text-lg space-y-4">
            {children}
        </div>
    </div>
);

export default SectionText;
