import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const LoadingContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                <LoadingSkeleton></LoadingSkeleton>
                 <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton> 
     

            </div>
            
        </div>
    );
};

export default LoadingContainer;