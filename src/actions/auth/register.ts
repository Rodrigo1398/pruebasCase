"use server";

import prisma from "@/lib/prisma";

export const registerUser = async () => {
  try {
    // const user = await prisma.user.create({
    //   data: {
    //     name: name,
    //     email: email,
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //   }
    // })

    return {
      ok: true,
    //   user: user,
      message: "Usuario creado",
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
