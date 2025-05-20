import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';

const LoadingContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                <LoadingSkeleton></LoadingSkeleton>
                {/* <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton>
                <LoadingSkeleton></LoadingSkeleton> */}
    

            </div>
            
        </div>
    );
};

export default LoadingContainer;