import { Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// line design
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    // active
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#00B207',
        },
    },
    // complete
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
                '#00B207',
        },
    },
    // default
    [`& .${stepConnectorClasses.line}`]: {
        height: 10,
        border: 0,
        backgroundColor:
            '#F2F2F2',
        borderRadius: 1,
    },
}));

// icon design
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: "#fff",
    zIndex: 1,
    color: '#00B207',
    width: 50,
    height: 50,
    display: 'flex',
    border: "2px dashed #00B207",
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // active step
    ...(ownerState.active && {
        backgroundColor:
            '#00B207',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        color: '#fff',
    }),
    // complete step
    ...(ownerState.completed && {
        backgroundColor:
            '#00B207',
        color: '#fff',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: "01",
        2: "02",
        3: "03",
        4: "04",
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {
                completed ? <FontAwesomeIcon icon={faCheck} /> : icons[String(props.icon)]
            }
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ['Order received', 'Processing', 'On the way', 'Delivered'];

const ProgressTracker = () => {
    return (
        // <div className="w-full max-w-4xl mx-auto p-4">
        //     <div className=''>
        //         <div className='w-full flex justify-between items-center text-center'>
        //             {/* <div className='bg-gray-100 rounded-full absolute z-0 bottom-[60px] right-0 left-0'>
        //                 <div className='rounded-full bg-primary-color w-[50%] h-3'>
        //                 </div>
        //             </div> */}
        //             <div className='relative'>
        //                 <div className='bg-primary-color text-white text-2xl inline-block rounded-full px-4 py-2 mb-4 after:absolute after:top-1/2 after:transform  after:-translate-y-1/2 after:w-32 after:h-4 after:bg-primary-color after:-z-10'>
        //                     <span className=''>&#10003;</span>
        //                 </div>
        //                 <p className='text-secondary-color'>Order received</p>
        //             </div>
        //             <div className=''>
        //                 <div className='bg-primary-color text-white inline-block rounded-full px-4 py-3 mb-4'>
        //                     <span className=''>02</span>
        //                 </div>
        //                 <p className='text-secondary-color'>Processing</p>
        //             </div>
        //             <div className=''>
        //                 <div className='bg-white text-secondary-color border-dashed border-secondary-color border-2 inline-block rounded-full px-4 py-3 mb-4'>
        //                     <span>03</span>
        //                 </div>
        //                 <p>On the way</p>
        //             </div>
        //             <div className=''>
        //                 <div className='bg-white text-secondary-color border-dashed border-secondary-color border-2 inline-block rounded-full px-4 py-3 mb-4'>
        //                     <span>04</span>
        //                 </div>
        //                 <p>Delivered</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default ProgressTracker;
