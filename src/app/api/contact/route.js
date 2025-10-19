import connectToDB from "@/config/db";
import ContactModel from "@/model/Contact";
export async function POST(req) {
  connectToDB();
  const reqbody = await req.json();
  const { name, email, message } = reqbody;
  // validation

  const res = await ContactModel.create({
    name,
    email,
    message,
  });
  return Response.json(
    { message: "sendrequest created  to  successfully :))", data: res },
    { status: 201 },
  );
}
