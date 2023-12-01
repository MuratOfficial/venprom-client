import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, surname, email, sex, birthday, isActive, phone, password } =
      body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!surname) {
      return new NextResponse("Surname is required", { status: 400 });
    }

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!sex) {
      return new NextResponse("Sex is required", { status: 400 });
    }

    if (!birthday) {
      return new NextResponse("Birthday is required", { status: 400 });
    }

    if (!isActive) {
      return new NextResponse("IsActive is required", { status: 400 });
    }

    if (!phone) {
      return new NextResponse("Phone is required", { status: 400 });
    }

    if (!password) {
      return new NextResponse("Password is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const user = await prismadb.user.create({
      data: {
        name,
        surname,
        email,
        birthday,
        password,
        sex,
        isActive,
        phone,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const users = await prismadb.user.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log("[USERS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
