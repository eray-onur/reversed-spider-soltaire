import React from 'react';
import './Page.css';
import { motion } from 'framer-motion';
const Page = ({pageVariants, pageTransition, classes, children}) => {
    return (
        <motion.div
            className={classes + ' page-body'}
            variants={pageVariants}
            transition={pageTransition}
            initial="out"
            animate="in"
            exit="out"
        >
            {children}
        </motion.div>
    );
}

export default Page;