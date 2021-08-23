import React from 'react';
import './Page.css';
import { motion } from 'framer-motion';
const Page = (props) => {
    return (
        <motion.div
            className='page-body'
            variants={props.pageVariants}
            transition={props.pageTransition}
            initial="out"
            animate="in"
            exit="out"
        >
            {props.children}
        </motion.div>
    );
}

export default Page;