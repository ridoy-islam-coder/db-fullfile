import { NextFunction, Request, Response } from "express";

interface AppError extends Error{
    statusCode?: number;
    status?:string;
    isOperational?: boolean;
}

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        err: err,
        stack: err.stack
    })
}

export default errorHandler;