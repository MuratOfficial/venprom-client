import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { Category, Detail, Product } from "@/types";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();

    const parsedData = JSON.parse(JSON.stringify(body));

    const formattedData: Product[] = parsedData.map((el: any) => ({
      name: el.name,
      detailId: el?.detailId,
      images: [{ url: el?.images[0]?.url }, { url: el?.images[1]?.url }],
      categoryId: el.categoryId,

      characteristics1: el?.characteristics1 || "",
      characteristics2: el?.characteristics2 || "",
      characteristics3: el?.characteristics3 || "",
      characteristics4: el?.characteristics4 || "",
      characteristics5: el?.characteristics5 || "",
      characteristics6: el?.characteristics6 || "",
      characteristics7: el?.characteristics7 || "",
      characteristics8: el?.characteristics8 || "",
      characteristics9: el?.characteristics9 || "",
      characteristics10: el?.characteristics10 || "",
      characteristics11: el?.characteristics11 || "",
      characteristics12: el?.characteristics12 || "",
      characteristics13: el?.characteristics13 || "",
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

    const product = await prismadb.product.createMany({
      data: formattedData.map((el) => {
        const images = [];
        if (el.images && el.images.length > 0) {
          images.push({ url: el.images[0]?.url || "" });
        }
        if (el.images && el.images.length > 1) {
          images.push({ url: el.images[1]?.url || "" });
        }

        return {
          name: el.name?.toString(),
          detailId: el?.detailId?.toString() || "",
          images,
          categoryId: el.categoryId?.toString() || "",
          characteristics1: el?.characteristics1?.toString() || "",
          characteristics2: el?.characteristics2?.toString() || "",
          characteristics3: el?.characteristics3?.toString() || "",
          characteristics4: el?.characteristics4?.toString() || "",
          characteristics5: el?.characteristics5?.toString() || "",
          characteristics6: el?.characteristics6?.toString() || "",
          characteristics7: el?.characteristics7?.toString() || "",
          characteristics8: el?.characteristics8?.toString() || "",
          characteristics9: el?.characteristics9?.toString() || "",
          characteristics10: el?.characteristics10?.toString() || "",
          characteristics11: el?.characteristics11?.toString() || "",
          characteristics12: el?.characteristics12?.toString() || "",
          characteristics13: el?.characteristics13?.toString() || "",
          storeId: params.storeId,
        };
      }),
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
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

    const deleteProducts = await prismadb.product.deleteMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(deleteProducts);
  } catch (error) {
    console.log("[product_DELETE]", error);
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
