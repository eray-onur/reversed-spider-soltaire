import React from 'react';
import './Page.css';
// import { motion } from 'framer-motion';
const Page = ({classes, children}) => {
    return (
        <div
            className={classes + ' page-body'}
        >
            {children}
        </div>
    );
}

export default Page;