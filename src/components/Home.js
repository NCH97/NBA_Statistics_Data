import React , { useState, useEffect, useMemo } from 'react'
import Updatedata from './updatedata';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export const Home = () => {

    return(
        <div className="connexiondata">
            <Updatedata/>
        </div>
    )
}