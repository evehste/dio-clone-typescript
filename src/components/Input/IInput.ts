import React from "react";

export default interface IInput{
    leftIcon?: React.ReactNode, 
    name: string, 
    control: any,
    errorMessage?: any,
    type?: string,
    placeholder?: string,
} 