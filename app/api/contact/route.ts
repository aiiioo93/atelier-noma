import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          message: "Les informations envoyées sont invalides.",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Votre demande a bien été reçue.",
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "Une erreur est survenue.",
      },
      {
        status: 500,
      }
    );
  }
}