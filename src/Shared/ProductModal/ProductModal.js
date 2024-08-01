import { Box, Modal } from '@mui/material';
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductModal = ({ productDetail, open, setOpen }) => {

    // for modal
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        overflow: "auto",
        marginBottom: "25px",
        p: 2,
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box sx={style} className="max-h-screen">
                <div className="md:p-6 2xl:p-16">
                    <ProductDetails productDetail={productDetail} ></ProductDetails>
                </div>
            </Box>
        </Modal>
    );
};

export default ProductModal;