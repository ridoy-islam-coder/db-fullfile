import { data } from "@/app/api/data";

export async function GET(_request: Request, { params }: { params: { id: string } } ) {
    const {id}=await params;

    const user =data.find((user) => user.id === parseInt(id));
    return Response.json(user);
    
}