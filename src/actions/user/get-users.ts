'use server';

import prisma from '@/lib/prisma';


export const getUsers =  async()=> {

  try {
      const users = await prisma.user.findMany({
        include:{
          role:true
        },
        orderBy: {
          name: 'asc'
        }
      });

      return users;

  } catch (error) {
    console.log(error);
    return [];
  }


}