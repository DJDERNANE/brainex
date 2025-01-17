
"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react";
import { MainApi } from "../../utils/MainApi";

const Cours = () => {
    const { id } = useParams();
    const getCoursDetails = (id) => {
        axios.get(`${MainApi}/cours/${id}`)
            .then((response) => {
                console.log(response.data.data); // Log the full response to inspect the structure
                // setCours(response.data.data); // Assuming `data` contains the courses
            })
            .catch((error) => {
                console.error('Error fetching courses:', error);
            });
    };
    useEffect(() => {
        getCoursDetails(id)
    }, [id])
    return (
        <div className="">
            
        </div>
    );

}
export default Cours