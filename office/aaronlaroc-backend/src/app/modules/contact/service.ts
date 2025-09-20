import { ISMS } from "./interface";
import { Contact } from "./model";


export  const creatdata = async (data:ISMS) => {
 const result = await Contact.create(data);
 return result;
}



export  const getallcontact = async () => {
 const result = await Contact.find();
 return result;
}
