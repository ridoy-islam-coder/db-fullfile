import { Request, Response } from "express";
import {  FinancialUpdateService, shareFinancialDataWithProxyset } from "./financial.service";






    // export const CreateFinancial=async (req:Request,res:Response) => {
    // let result = await FinancialCreateService(req);
    // res.json(result);

    // }


     export const UpdateFinancial=async (req:Request,res:Response) => {
    let result = await FinancialUpdateService(req);
    res.json(result);

    }


    export const shareFinancial=async (req:Request,res:Response) => {
    const id = req.params.id; // or req.body.id, depending on how id is sent
    let result = await shareFinancialDataWithProxyset(id);
    res.json(result);

    }
