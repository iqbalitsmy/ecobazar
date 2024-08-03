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

const steps = ['order received', 'processing', 'on the way', 'delivered'];

const ProgressTracker = ({ step }) => {
    return (
        <div>
            <Stepper alternativeLabel activeStep={steps.indexOf(step) + 1} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <p className='capitalize'>
                                {label}
                            </p>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default ProgressTracker;
