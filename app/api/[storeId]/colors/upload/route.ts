import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { Detail } from "@/types";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const parsedData = JSON.parse(JSON.stringify(body));

    const formattedData: Detail[] = parsedData.map((el: any) => ({
      detailId: el.detailId,
      price: el.price,
      price1: el.price1 || "",
      name: el.name,
      value1: el.value1,
      value2: el.value2 || "",
    }));

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
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

    const detail = await prismadb.detail.createMany({
      data: formattedData.map((el) => ({
        detailId: el.detailId,
        price: el.price,
        price1: el.price1 || "",
        name: el.name,
        value1: el.value1,
        value2: el.value2 || "",
        storeId: params.storeId,
      })),
    });

    return NextResponse.json(detail);
  } catch (error) {
    console.log("[detailS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
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

    const deleteDetail = prismadb.detail.deleteMany();

    await prismadb?.$transaction([deleteDetail]);

    return NextResponse.json(deleteDetail);
  } catch (error) {
    console.log("[detail_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const parsedData = JSON.parse(JSON.stringify(body));

    const formattedData: Detail[] = parsedData.map((el: any) => ({
      detailId: el.detailId,
      price: el.price,
      price1: el.price1 || "",
      name: el.name,
      value1: el.value1,
      value2: el.value2 || "",
    }));

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
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

    const detail = await prismadb.detail.updateMany({
      where: {
        storeId: params.storeId,
      },
      data: formattedData.map((el) => ({
        detailId: el.detailId,
        price: el.price,
        price1: el.price1 || "",
        name: el.name,
        value1: el.value1,
        value2: el.value2 || "",
        storeId: params.storeId,
      })),
    });

    return NextResponse.json(detail);
  } catch (error) {
    console.log("[detail_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}