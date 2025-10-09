import { data } from "./data";

export async function GET(request: Request) {
    return  Response.json(data);
}




export async function POST(request: Request) {
    const newData = await request.json();
    data.push(newData);
    return Response.json(newData);
}