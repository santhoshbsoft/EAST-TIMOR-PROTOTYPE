import React, { useRef } from 'react';

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative w-full">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-3 py-2 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <button
                    onClick={() => onCategoryChange('All')}
                    className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all snap-start shadow-sm border ${activeCategory === 'All'
                        ? 'bg-tropical-teal text-white border-tropical-teal'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-tropical-teal hover:text-tropical-teal'
                        }`}
                >
                    All Types
                </button>

                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all snap-start shadow-sm border ${activeCategory === category
                            ? 'bg-tropical-teal text-white border-tropical-teal'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-tropical-teal hover:text-tropical-teal'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Optional gradient fades for scroll indication */}
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden"></div>
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none lg:hidden"></div>
        </div>
    );
};

export default CategoryFilter;
