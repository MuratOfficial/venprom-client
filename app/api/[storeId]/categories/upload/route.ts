import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { Category, Detail } from "@/types";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const parsedData = JSON.parse(JSON.stringify(body));

    const formattedData: Category[] = parsedData.map((el: any) => ({
      id: el.id,
      name: el.name,
      heading1: el?.heading1 || "",
      description1: el?.description1 || "",
      heading2: el?.heading2 || "",
      description2: el?.description2 || "",
      heading3: el?.heading3 || "",
      description3: el?.description3 || "",
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

    const category = await prismadb.category.createMany({
      data: formattedData.map((el) => ({
        id: el.id,
        name: el.name,
        heading1: el?.heading1 || "",
        description1: el?.description1 || "",
        heading2: el?.heading2 || "",
        description2: el?.description2 || "",
        heading3: el?.heading3 || "",
        description3: el?.description3 || "",
        storeId: params.storeId,
      })),
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[categories_POST]", error);
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
    if (!params.storeId) {
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

    const deleteCategories = await prismadb.category.deleteMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(deleteCategories);
  } catch (error) {
    console.log("[category_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// export async function PATCH(
//   req: Request,
//   { params }: { params: { storeId: string } }
// ) {
//   try {
//     const { userId } = auth();

//     if (!userId) {
//       return new NextResponse("Unauthenticated", { status: 403 });
//     }

//     const body = await req.json();

//     const formattedData: Category[] = body.map((detail: any) => ({
//       detailId: detail.detailId,
//       price: detail.price,
//       price1: detail.price1 || "",
//       name: detail.name,
//       value1: detail.value1,
//       value2: detail.value2 || "",
//     }));

//     const storeByUserId = await prismadb.store.findFirst({
//       where: {
//         id: params.storeId,
//         userId,
//       },
//     });

//     if (!storeByUserId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     // Using a transaction for better data consistency
//     await prismadb.$transaction([
//       prismadb.detail.deleteMany({
//         where: {
//           storeId: params.storeId,
//         },
//       }),
//       prismadb.detail.createMany({
//         data: formattedData.map((detail) => ({
//           ...detail,
//           storeId: params.storeId,
//         })),
//       }),
//     ]);

//     return new NextResponse("Success", { status: 200 });
//   } catch (error) {
//     console.error("[detail_PATCH]", error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }
