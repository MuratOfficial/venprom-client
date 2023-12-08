import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { detailId: string } }
) {
  try {
    if (!params.detailId) {
      return new NextResponse("detail id is required", { status: 400 });
    }

    const detail = await prismadb.detail.findUnique({
      where: {
        id: params.detailId,
      },
    });

    return NextResponse.json(detail);
  } catch (error) {
    console.log("[detail_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { colorId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.colorId) {
      return new NextResponse("detail id is required", { status: 400 });
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

    const detail = await prismadb.detail.delete({
      where: {
        id: params.colorId,
      },
    });

    return NextResponse.json(detail);
  } catch (error) {
    console.log("[detail_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { detailId: string; storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const { name, detailId, price, price1, value1, value2 } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!value1) {
      return new NextResponse("Value Id is required", { status: 400 });
    }

    if (!params.detailId) {
      return new NextResponse("detail id is required", { status: 400 });
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

    const detail = await prismadb.detail.update({
      where: {
        id: params.detailId,
      },
      data: {
        name,
        detailId,
        price,
        price1,
        value1,
        value2,
      },
    });

    return NextResponse.json(detail);
  } catch (error) {
    console.log("[detail_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
