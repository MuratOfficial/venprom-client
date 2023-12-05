"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Image, Product } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  detailId: z.string().min(1),
  categoryId: z.string().min(1),
  characteristics1: z.string().min(1),
  characteristics2: z.string().min(1),
  characteristics3: z.string().min(1),
  characteristics4: z.string().min(1),
  characteristics5: z.string().min(1),
  characteristics6: z.string().min(1),
  characteristics7: z.string().min(1),
  characteristics8: z.string().min(1),
  characteristics9: z.string().min(1),
  characteristics10: z.string().min(1),
  characteristics11: z.string().min(1),
  characteristics12: z.string().min(1),
  characteristics13: z.string().min(1),

  isArchived: z.boolean().default(false).optional(),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData:
    | (Product & {
        images: Image[];
      })
    | null;
  categories: Category[];
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  categories,
}) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Изменить продукт" : "Создать продукт";
  const description = initialData
    ? "Изменение продукта"
    : "Добавить новый продукт";
  const toastMessage = initialData ? "Продукт обновлен" : "Продукт создан";
  const action = initialData ? "Сохранить изменения" : "Создать продукт";

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
        }
      : {
          name: "",
          images: [],
          categoryId: "",
          detailId: "",
          characteristics1: "",
          characteristics2: "",
          characteristics3: "",
          characteristics4: "",
          characteristics5: "",
          characteristics6: "",
          characteristics7: "",
          characteristics8: "",
          characteristics9: "",
          characteristics10: "",
          characteristics11: "",
          characteristics12: "",
          characteristics13: "",
          isArchived: false,
        },
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/products/${params.productId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/products`, data);
      }

      router.refresh();
      router.push(`/admin/${params.storeId}/products`);
      toast.success("Категория обновлена");
    } catch (error) {
      toast.error("Что-то пошло не так...");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/admin/${params.storeId}/products`);
      toast.success("Продукт удален");
    } catch (error) {
      toast.error("Убедитесь что вы удалили все");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Изображения</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value.map((image) => image.url)}
                    disabled={loading}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Название продукта"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Подкатегория</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Выберите подкатегорию"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detailId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id детали</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Id детали"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 1</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 2</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 2"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 3</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics4"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 4</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 4"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics5"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 5</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics6"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 6</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics7"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 7</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="characteristics8"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 8</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 8"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="characteristics9"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 9</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 9"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="characteristics10"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 10</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="characteristics11"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 11</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 11"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics12"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 12</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="characteristics13"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Характеристика 13</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Характеристика 13"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isArchived"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>В архив</FormLabel>
                    <FormDescription>
                      Продукт не будет отображаться
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit" className="ml-auto">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
