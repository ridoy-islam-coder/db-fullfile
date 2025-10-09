import { data } from "@/app/api/data";
import page from './../../components/navbar/page';

export async function GET(_request: Request, { params }: { params: { id: string } } ) {
    const {id}=await params;

    const user =data.find((user) => user.id === parseInt(id));
    return Response.json(user);
    
}

export async function   PATCH(request: Request, { params }: { params: { id: string } } ) {
    const {id}=await params;
    const updatedData = await request.json();
    const userIndex = data.findIndex((user) => user.id === parseInt(id));
    if (userIndex !== -1) {
        data[userIndex] = { ...data[userIndex], ...updatedData };
        return Response.json(data[userIndex]);
    } else {
        return new Response("User not found", { status: 404 });
    }

}